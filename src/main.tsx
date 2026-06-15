import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { installAuthInterceptors } from './system/http'
import { recordBoot } from './system/identity'
import './system/pwa' // start listening for the install prompt at boot (before any UI mounts)

installAuthInterceptors() // attach the bearer token + 401 handling to all axios calls
recordBoot() // tick the lifetime boot counter shown in About

// Register the service worker so VortexOS is installable as a PWA and works offline.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
