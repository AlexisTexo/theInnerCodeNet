import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'
import viteConfig from '../vite.config.js'
import { getPageUrl, getSeoConfig, SITE_ORIGIN } from '../src/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const clientOutDir = path.join(rootDir, 'dist')
const ssrOutDir = path.join(rootDir, '.ssr')
const ogImageUrl = `${SITE_ORIGIN}/og-innera-1200x630.png`
const logoUrl = `${SITE_ORIGIN}/logo_theinnercode.png`

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function extractAssetTags(html) {
  const matches = html.match(
    /<(?:script type="module"[^>]*><\/script>|link rel="stylesheet"[^>]*>|link rel="modulepreload"[^>]*>)/g,
  )

  return matches ? matches.join('\n    ') : ''
}

function extractPreloadTags(appHtml) {
  const preloadMatches = appHtml.match(/<link rel="preload"[^>]*\/>/g)

  if (!preloadMatches) {
    return { appHtml, preloadTags: '' }
  }

  return {
    appHtml: appHtml.replace(/<link rel="preload"[^>]*\/>/g, ''),
    preloadTags: preloadMatches.join('\n    '),
  }
}

function buildStructuredData(language, seo) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'The InnerCode Co.',
      alternateName: 'theinnercode.net',
      url: SITE_ORIGIN,
      logo: logoUrl,
      image: ogImageUrl,
      description: seo.description,
      email: 'info@theinnercode.net',
      brand: {
        '@type': 'Brand',
        name: 'Innera',
        url: 'https://innera.theinnercode.net/',
      },
      knowsAbout: [
        'Inner Blueprint Profile',
        'Jungian archetypal modeling',
        'Nervous system science',
        'Dynamic psychometrics',
        'Inner-world navigation',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'The InnerCode Co.',
      url: SITE_ORIGIN,
      inLanguage: language,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      url: seo.canonical,
      description: seo.description,
      inLanguage: language,
      isPartOf: {
        '@type': 'WebSite',
        name: 'The InnerCode Co.',
        url: SITE_ORIGIN,
      },
    },
  ]
}

function createDocument({ language, appHtml, assetTags, preloadTags }) {
  const seo = getSeoConfig(language)
  const structuredData = JSON.stringify(buildStructuredData(language, seo), null, 2)

  return `<!doctype html>
<html lang="${seo.htmlLang}">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/icono1.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="${seo.canonical}" />
    <link rel="alternate" hreflang="en" href="${getPageUrl('en')}" />
    <link rel="alternate" hreflang="es-MX" href="${getPageUrl('es')}" />
    <link rel="alternate" hreflang="x-default" href="${getPageUrl('en')}" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="The InnerCode Co." />
    <meta property="og:locale" content="${seo.ogLocale}" />
    <meta property="og:locale:alternate" content="${seo.ogLocaleAlternate}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:image:secure_url" content="${ogImageUrl}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="The InnerCode Co. and Innera brand preview" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
    <meta name="twitter:image:alt" content="The InnerCode Co. and Innera brand preview" />

    <script type="application/ld+json">
${structuredData}
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
    ${preloadTags}
    ${assetTags}
  </head>
  <body>
    <div id="root">${appHtml}</div>
  </body>
</html>
`
}

async function main() {
  await fs.rm(clientOutDir, { recursive: true, force: true })
  await fs.rm(ssrOutDir, { recursive: true, force: true })

  await build({
    ...viteConfig,
    build: {
      ...(viteConfig.build ?? {}),
      outDir: clientOutDir,
      emptyOutDir: false,
    },
  })

  await build({
    ...viteConfig,
    build: {
      ...(viteConfig.build ?? {}),
      ssr: path.join(rootDir, 'src/entry-server.jsx'),
      outDir: ssrOutDir,
      emptyOutDir: false,
    },
  })

  const clientHtml = await fs.readFile(path.join(clientOutDir, 'index.html'), 'utf8')
  const assetTags = extractAssetTags(clientHtml)
  const { render } = await import(pathToFileURL(path.join(ssrOutDir, 'entry-server.js')).href)

  for (const language of ['en', 'es']) {
    const renderedApp = render(language)
    const { appHtml, preloadTags } = extractPreloadTags(renderedApp)
    const outputFile =
      language === 'en'
        ? path.join(clientOutDir, 'index.html')
        : path.join(clientOutDir, language, 'index.html')

    await fs.mkdir(path.dirname(outputFile), { recursive: true })
    await fs.writeFile(outputFile, createDocument({ language, appHtml, assetTags, preloadTags }), 'utf8')
  }

  await fs.rm(ssrOutDir, { recursive: true, force: true })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
