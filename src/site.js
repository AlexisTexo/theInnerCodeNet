export const SITE_ORIGIN = 'https://theinnercode.net'

export const LOCALES = {
  en: {
    code: 'en',
    htmlLang: 'en',
    ogLocale: 'en_US',
    path: '/',
    label: 'EN',
    switchLabel: 'ES',
    switchAriaLabel: 'Switch language to Spanish',
    title: 'The InnerCode Co. | The Science of the Inner World',
    description:
      'The InnerCode Co. builds proprietary systems for inner-world navigation. The Inner Blueprint Profile integrates Jungian archetypal modeling, nervous system science, and dynamic psychometrics.',
  },
  es: {
    code: 'es',
    htmlLang: 'es',
    ogLocale: 'es_MX',
    path: '/es/',
    label: 'ES',
    switchLabel: 'EN',
    switchAriaLabel: 'Cambiar idioma a inglés',
    title: 'The InnerCode Co. | La Ciencia del Mundo Interior',
    description:
      'The InnerCode Co. construye sistemas propietarios para navegar el mundo interior. El Inner Blueprint Profile integra modelado arquetípico junguiano, ciencia del sistema nervioso y psicometría dinámica.',
  },
}

export function normalizeLanguage(language) {
  return language === 'es' ? 'es' : 'en'
}

export function detectLanguageFromPath(pathname = '/') {
  return pathname.startsWith('/es') ? 'es' : 'en'
}

export function getBasePath(language) {
  return LOCALES[normalizeLanguage(language)].path
}

export function getSectionHref(language, sectionId) {
  const id = String(sectionId || '').replace(/^#/, '')
  const basePath = getBasePath(language)
  return id ? `${basePath}#${id}` : basePath
}

export function getAlternateLanguage(language) {
  return normalizeLanguage(language) === 'es' ? 'en' : 'es'
}

export function getAlternateHref(language) {
  return getBasePath(getAlternateLanguage(language))
}

export function getPageUrl(language) {
  const basePath = getBasePath(language)
  const normalizedPath = basePath === '/' ? '' : basePath.replace(/^\//, '')
  return new URL(normalizedPath, `${SITE_ORIGIN}/`).toString()
}

export function getSeoConfig(language) {
  const current = LOCALES[normalizeLanguage(language)]
  const alternate = LOCALES[getAlternateLanguage(language)]

  return {
    ...current,
    canonical: getPageUrl(current.code),
    alternateUrl: getPageUrl(alternate.code),
    xDefaultUrl: getPageUrl('en'),
    ogLocaleAlternate: alternate.ogLocale,
  }
}
