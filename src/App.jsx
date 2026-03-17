import React from 'react'
import './App.css'

/* ── Bilingual copy ─────────────────────────────────────────── */
const copy = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      methodology: 'Methodology',
      innera: 'INNERA',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'The science of the inner world.',
      headlineIntro: 'Most people think',
      headlineFocus: 'they understand themselves.',
      headlineClosing: 'They have fragments. Not a map.',
      sub: 'The InnerCode Co. builds proprietary systems for inner-world navigation. Our methodology - the Inner Blueprint Profile - integrates Jungian archetypal modeling, nervous system science, and dynamic psychometrics into a single, personalized architecture.',
    },
    foundation: {
      title: 'Built from conviction, not from trend.',
      paragraphs: [
        "The InnerCode Co. was founded on a single observation: the most sophisticated people in the world - founders, executives, high-performers - operate with enormous blind spots in their inner systems. Not because they lack intelligence. Because they've never had a precise map of how their inner world actually works.",
        'We spent years developing the Inner Blueprint Profile (IBP): a proprietary methodology that decodes the architecture of the inner self - the archetypal patterns, nervous system states, and psychometric dynamics that drive every decision, every relationship, every outcome.',
        "This is not self-help. It's not therapy. It's not a framework borrowed from a certification program.",
        'It\'s a system built from the ground up - grounded in 25 years of direct observation across 50+ enterprise transformation projects - with one purpose: to give you a precise, actionable map of your inner world.',
      ],
    },
    methodology: {
      eyebrow: 'Proprietary Methodology · IBP v2',
      title: 'The Inner Blueprint Profile.',
      intro: "The IBP is not a personality test. It's a living architecture - one that evolves as you evolve.",
      lead: 'It integrates three domains that most systems treat in isolation:',
      pillars: [
        {
          title: 'Archetypal Modeling',
          body: 'Derived from Jungian psychology, the IBP identifies the archetypal structures driving your decision-making patterns, leadership style, and relational dynamics.',
        },
        {
          title: 'Nervous System Science',
          body: "Your inner state isn't just psychological. It's physiological. The IBP maps your autonomic regulation patterns and how they shape your capacity for action, clarity, and sustained performance.",
        },
        {
          title: 'Dynamic Psychometrics',
          body: 'Unlike static assessments, the IBP tracks change over time. Your inner architecture is not fixed. The system updates as your responses and patterns evolve.',
        },
      ],
      closing: 'Together, these three systems produce something no coaching framework, therapy modality, or productivity tool has attempted: a complete, precision map of your inner world - and a calibrated path forward.',
    },
    innera: {
      title: 'The methodology, now in your hands.',
      paragraphs: [
        'INNERA is the first precision application built on the Inner Blueprint Profile.',
        "It's not a wellness app. It's not a meditation platform. It's not another self-assessment tool that tells you what you already suspect.",
        'INNERA gives founders, executives, and high-performers a private, personalized system for navigating their inner world with the same rigor they apply to every other domain of performance.',
        'This is the IBP - made operational.',
      ],
      note: 'Currently in private beta. Limited access by application.',
      cta: 'Access INNERA',
    },
    contact: {
      title: 'Contact',
      body: 'For private beta access, institutional conversations, or partnership inquiries, contact us directly.',
      cta: 'Send an Email',
    },
    footer: {
      tagline: 'The science of the inner world. · theinnercode.net',
      copyright: '© 2026 The InnerCode Co. All rights reserved. · Inner Blueprint Profile® is proprietary methodology of The InnerCode Co.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca',
      methodology: 'Metodología',
      innera: 'INNERA',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'La ciencia del mundo interior.',
      headlineIntro: 'La mayoría cree',
      headlineFocus: 'que se conoce a sí misma.',
      headlineClosing: 'Tiene fragmentos. No un mapa.',
      sub: 'The InnerCode Co. construye sistemas propietarios para navegar el mundo interior. Nuestra metodología - el Inner Blueprint Profile - integra modelado arquetípico junguiano, ciencia del sistema nervioso y psicometría dinámica en una sola arquitectura personalizada.',
    },
    foundation: {
      title: 'Nacido de la convicción, no de la tendencia.',
      paragraphs: [
        'The InnerCode Co. nació de una sola observación: las personas más sofisticadas del mundo - fundadores, ejecutivos y high-performers - operan con enormes puntos ciegos en sus sistemas internos. No porque les falte inteligencia. Sino porque nunca han tenido un mapa preciso de cómo funciona realmente su mundo interior.',
        'Pasamos años desarrollando el Inner Blueprint Profile (IBP): una metodología propietaria que decodifica la arquitectura del yo interior - los patrones arquetípicos, los estados del sistema nervioso y las dinámicas psicométricas que impulsan cada decisión, cada relación y cada resultado.',
        'Esto no es autoayuda. No es terapia. No es un framework tomado de un programa de certificación.',
        'Es un sistema construido desde cero - basado en 25 años de observación directa a través de más de 50 proyectos de transformación empresarial - con un solo propósito: darte un mapa preciso y accionable de tu mundo interior.',
      ],
    },
    methodology: {
      eyebrow: 'Metodología Propietaria · IBP v2',
      title: 'The Inner Blueprint Profile.',
      intro: 'El IBP no es una prueba de personalidad. Es una arquitectura viva - una que evoluciona a medida que tú evolucionas.',
      lead: 'Integra tres dominios que la mayoría de los sistemas tratan por separado:',
      pillars: [
        {
          title: 'Modelado Arquetípico',
          body: 'Derivado de la psicología junguiana, el IBP identifica las estructuras arquetípicas que impulsan tus patrones de toma de decisiones, estilo de liderazgo y dinámicas relacionales.',
        },
        {
          title: 'Ciencia del Sistema Nervioso',
          body: 'Tu estado interior no es solo psicológico. Es fisiológico. El IBP mapea tus patrones de regulación autonómica y cómo moldean tu capacidad de acción, claridad y rendimiento sostenido.',
        },
        {
          title: 'Psicometría Dinámica',
          body: 'A diferencia de las evaluaciones estáticas, el IBP sigue el cambio a lo largo del tiempo. Tu arquitectura interior no es fija. El sistema se actualiza conforme evolucionan tus respuestas y patrones.',
        },
      ],
      closing: 'Juntos, estos tres sistemas producen algo que ningún framework de coaching, modalidad terapéutica o herramienta de productividad ha intentado: un mapa completo y de precisión de tu mundo interior, y un camino calibrado hacia adelante.',
    },
    innera: {
      title: 'La metodología, ahora en tus manos.',
      paragraphs: [
        'INNERA es la primera aplicación de precisión construida sobre el Inner Blueprint Profile.',
        'No es una app de bienestar. No es una plataforma de meditación. No es otra herramienta de autoevaluación que te dice lo que ya sospechas.',
        'INNERA les da a fundadores, ejecutivos y high-performers un sistema privado y personalizado para navegar su mundo interior con el mismo rigor que aplican a cualquier otro dominio del desempeño.',
        'Este es el IBP - vuelto operativo.',
      ],
      note: 'Actualmente en beta privada. Acceso limitado mediante solicitud.',
      cta: 'Acceder a INNERA',
    },
    contact: {
      title: 'Contacto',
      body: 'Para acceso a la beta privada, conversaciones institucionales o alianzas, contáctanos directamente.',
      cta: 'Enviar un correo',
    },
    footer: {
      tagline: 'La ciencia del mundo interior. · theinnercode.net',
      copyright: '© 2026 The InnerCode Co. Todos los derechos reservados. · Inner Blueprint Profile® es una metodología propietaria de The InnerCode Co.',
    },
  },
}

/* ── Logo mark (SVG inline — colorful pixel grid) ───────────── */
function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size * 0.72} viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Row 1 */}
      <rect x="0"  y="0"  width="6" height="6" rx="2" fill="#FDB360"/>
      <rect x="8"  y="0"  width="6" height="6" rx="2" fill="#FDB360"/>
      <rect x="24" y="0"  width="6" height="6" rx="2" fill="#2D72FF"/>
      <rect x="32" y="0"  width="6" height="6" rx="2" fill="#2D72FF"/>
      <rect x="40" y="0"  width="6" height="6" rx="2" fill="#2D72FF"/>
      {/* Row 2 */}
      <rect x="0"  y="8"  width="6" height="6" rx="2" fill="#FE5740"/>
      <rect x="8"  y="8"  width="14" height="6" rx="2" fill="#FE5740"/>
      <rect x="24" y="8"  width="6" height="6" rx="2" fill="#52DF83"/>
      <rect x="32" y="8"  width="6" height="6" rx="2" fill="#52DF83"/>
      <rect x="40" y="8"  width="6" height="6" rx="2" fill="#52DF83"/>
      {/* Row 3 */}
      <rect x="0"  y="16" width="14" height="6" rx="2" fill="#A36BDA"/>
      <rect x="24" y="16" width="6" height="6" rx="2" fill="#00B3BD"/>
      <rect x="32" y="16" width="6" height="6" rx="2" fill="#00B3BD"/>
      <rect x="40" y="16" width="6" height="6" rx="2" fill="#00B3BD"/>
      {/* Row 4 */}
      <rect x="0"  y="24" width="6" height="6" rx="2" fill="#6751C4"/>
      <rect x="8"  y="24" width="6" height="6" rx="2" fill="#6751C4"/>
      <rect x="24" y="24" width="6" height="14" rx="2" fill="#FE8851"/>
      <rect x="32" y="24" width="6" height="14" rx="2" fill="#FE8851"/>
      <rect x="40" y="24" width="6" height="14" rx="2" fill="#FE8851"/>
      {/* Row 5 */}
      <rect x="0"  y="32" width="14" height="6" rx="2" fill="#6751C4"/>
    </svg>
  )
}

/* ── Wordmark (logo mark + text) ────────────────────────────── */
function Wordmark({ dark = false }) {
  return (
    <a href="/" className={`wordmark ${dark ? 'wordmark--dark' : ''}`} aria-label="The Inner Code">
      <img 
        src="/logo_theinnercode_1.png" 
        alt="The Inner Code" 
        className="wordmark__img"
      />
    </a>
  )
}

function DisplayAccent({ children, className = '' }) {
  return <span className={`display-accent ${className}`.trim()}>{children}</span>
}

/* ── Navbar ─────────────────────────────────────────────────── */
function Navbar({ nav }) {
  return (
    <header className="navbar">
      <Wordmark />
      <nav className="navbar__links" role="navigation" aria-label="Main navigation">
        <a href="#hero" className="nav-link">{nav.home}</a>
        <a href="#about" className="nav-link">{nav.about}</a>
        <a href="#methodology" className="nav-link">{nav.methodology}</a>
        <a href="#innera" className="nav-link">{nav.innera}</a>
      </nav>
      <a href="#contact" className="btn-primary btn-sm">{nav.contact}</a>
    </header>
  )
}

/* ── Hero section ───────────────────────────────────────────── */
function HeroSection({ hero }) {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-headline">
      <div className="hero__inner">
        {/* Left: decorative graphic */}
        <div className="hero__graphic">
          <img 
            src="/fondo.png" 
            alt="" 
            className="hero__bg-img" 
            aria-hidden="true"
          />
        </div>

        {/* Right: copy */}
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <LogoMark size={18} />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 id="hero-headline" className="hero__headline">
            <span className="hero__headline-line">{hero.headlineIntro}</span>
            <span className="hero__headline-line">
              <em className="hero__headline-italic">{hero.headlineFocus}</em>
            </span>
            <span className="hero__headline-line">
              <strong className="hero__headline-bold">{hero.headlineClosing}</strong>
            </span>
          </h1>
          <p className="hero__sub">{hero.sub}</p>
        </div>
      </div>
    </section>
  )
}

/* ── Section Placeholder ────────────────────────────────────── */
function Section({ id, title, eyebrow, children, dark = false, wide = false }) {
  return (
    <section id={id} className={`content-section ${dark ? 'content-section--dark' : ''}`}>
      <div className="container">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 className="title-section">{title}</h2>
      </div>
      <div className="container">
        <div className={`section-content ${wide ? 'section-content--wide' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  )
}

/* ── Footer ─────────────────────────────────────────────────── */
function SiteFooter({ nav, footer, language }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Wordmark />
          <p className="footer__tagline">
            {language === 'es' ? (
              <>
                <DisplayAccent>La ciencia del mundo interior.</DisplayAccent> · theinnercode.net
              </>
            ) : (
              <>
                <DisplayAccent>The science of the inner world.</DisplayAccent> · theinnercode.net
              </>
            )}
          </p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#hero" className="nav-link">{nav.home}</a>
          <a href="#about" className="nav-link">{nav.about}</a>
          <a href="#methodology" className="nav-link">{nav.methodology}</a>
          <a href="#innera" className="nav-link">{nav.innera}</a>
          <a href="#contact" className="nav-link">{nav.contact}</a>
        </nav>
        <p className="footer__copyright">{footer.copyright}</p>
      </div>
    </footer>
  )
}

/* ── App ────────────────────────────────────────────────────── */
function App() {
  const language = window.__THEINNERCODE_LANG__ === 'es' ? 'es' : 'en'
  const c = copy[language]

  return (
    <>
      <Navbar nav={c.nav} />
      <main>
        <HeroSection hero={c.hero} />

        <Section
          id="about"
          title={
            language === 'es'
              ? <>Nacido de la convicción, <DisplayAccent>no de la tendencia.</DisplayAccent></>
              : <>Built from conviction, <DisplayAccent>not from trend.</DisplayAccent></>
          }
        >
          <div className="rich-copy">
            <p className="body-copy">{c.foundation.paragraphs[0]}</p>
            <p className="body-copy">
              {language === 'es' ? (
                <>
                  Pasamos años desarrollando el <DisplayAccent>Inner Blueprint Profile (IBP)</DisplayAccent>: una metodología propietaria que decodifica la arquitectura del yo interior - los patrones arquetípicos, los estados del sistema nervioso y las dinámicas psicométricas que impulsan cada decisión, cada relación y cada resultado.
                </>
              ) : (
                <>
                  We spent years developing the <DisplayAccent>Inner Blueprint Profile (IBP)</DisplayAccent>: a proprietary methodology that decodes the architecture of the inner self - the archetypal patterns, nervous system states, and psychometric dynamics that drive every decision, every relationship, every outcome.
                </>
              )}
            </p>
            <p className="body-copy">
              <DisplayAccent>{c.foundation.paragraphs[2]}</DisplayAccent>
            </p>
            <p className="body-copy">
              {language === 'es' ? (
                <>
                  Es un sistema construido desde cero - basado en 25 años de observación directa a través de más de 50 proyectos de transformación empresarial - con un solo propósito: darte <DisplayAccent>un mapa preciso y accionable de tu mundo interior.</DisplayAccent>
                </>
              ) : (
                <>
                  It's a system built from the ground up - grounded in 25 years of direct observation across 50+ enterprise transformation projects - with one purpose: to give you <DisplayAccent>a precise, actionable map of your inner world.</DisplayAccent>
                </>
              )}
            </p>
          </div>
        </Section>

        <Section
          id="methodology"
          title={<DisplayAccent>{c.methodology.title}</DisplayAccent>}
          eyebrow={c.methodology.eyebrow}
          dark
          wide
        >
          <div className="rich-copy">
            <p className="body-copy">
              {language === 'es' ? (
                <>
                  El IBP <DisplayAccent>no es una prueba de personalidad.</DisplayAccent> Es una arquitectura viva - una que evoluciona a medida que tú evolucionas.
                </>
              ) : (
                <>
                  The IBP is <DisplayAccent>not a personality test.</DisplayAccent> It's a living architecture - one that evolves as you evolve.
                </>
              )}
            </p>
            <p className="body-copy">{c.methodology.lead}</p>
          </div>
          <div className="pillar-grid">
            {c.methodology.pillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card">
                <h3 className="pillar-card__title">
                  <DisplayAccent>{pillar.title}</DisplayAccent>
                </h3>
                <p className="pillar-card__body">{pillar.body}</p>
              </article>
            ))}
          </div>
          <p className="body-copy methodology-closing">
            {language === 'es' ? (
              <>
                Juntos, estos tres sistemas producen algo que ningún framework de coaching, modalidad terapéutica o herramienta de productividad ha intentado: <DisplayAccent>un mapa completo y de precisión de tu mundo interior</DisplayAccent>, y un camino calibrado hacia adelante.
              </>
            ) : (
              <>
                Together, these three systems produce something no coaching framework, therapy modality, or productivity tool has attempted: <DisplayAccent>a complete, precision map of your inner world</DisplayAccent>, and a calibrated path forward.
              </>
            )}
          </p>
        </Section>

        <Section
          id="innera"
          title={
            language === 'es'
              ? <>La metodología, <DisplayAccent>ahora en tus manos.</DisplayAccent></>
              : <>The methodology, <DisplayAccent>now in your hands.</DisplayAccent></>
          }
        >
          <div className="innera-bridge">
            <img src="/logo_innera_text.png" alt="Innera" className="innera-logo" />
            <div className="rich-copy">
              <p className="body-copy">
                {language === 'es' ? (
                  <>
                    INNERA es la <DisplayAccent>primera aplicación de precisión</DisplayAccent> construida sobre el Inner Blueprint Profile.
                  </>
                ) : (
                  <>
                    INNERA is the <DisplayAccent>first precision application</DisplayAccent> built on the Inner Blueprint Profile.
                  </>
                )}
              </p>
              <p className="body-copy">{c.innera.paragraphs[1]}</p>
              <p className="body-copy">{c.innera.paragraphs[2]}</p>
              <p className="body-copy">
                <DisplayAccent>{c.innera.paragraphs[3]}</DisplayAccent>
              </p>
            </div>
            <p className="bridge-note">{c.innera.note}</p>
            <a href="https://innera.theinnercode.net" className="btn-primary" target="_blank" rel="noopener noreferrer">
              {c.innera.cta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </Section>

        <Section id="contact" title={c.contact.title}>
          <p className="body-copy">{c.contact.body}</p>
          <div style={{ marginTop: '2rem' }}>
            <a href="mailto:info@theinnercode.net" className="btn-primary">
              {c.contact.cta}
            </a>
          </div>
        </Section>
      </main>
      <SiteFooter nav={c.nav} footer={c.footer} language={language} />
    </>
  )
}

export default App
