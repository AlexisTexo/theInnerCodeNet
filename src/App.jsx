import './App.css'

const copyByLanguage = {
  en: {
    title: 'Engineering transformative digital experiences.',
    cta: 'ENTER INNERA',
  },
  es: {
    title: 'Diseñando experiencias digitales transformadoras.',
    cta: 'ENTRAR A INNERA',
  },
}

function App() {
  const language = window.__THEINNERCODE_LANG__ === 'es' ? 'es' : 'en'
  const copy = copyByLanguage[language]

  return (
    <main className="landing-hero">
      <div className="hero-content">
        <h1 className="hero-title">{copy.title}</h1>
        <a className="hero-cta" href="https://innera.theinnercode.net">
          {copy.cta}
        </a>
      </div>
    </main>
  )
}

export default App
