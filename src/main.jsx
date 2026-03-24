import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { detectLanguageFromPath } from './site.js'

const container = document.getElementById('root')
const language = detectLanguageFromPath(window.location.pathname)

document.documentElement.lang = language

const app = (
  <StrictMode>
    <App language={language} />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
