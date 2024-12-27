import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstApp } from './FirtsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp/>
  </StrictMode>,
)
