import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstApp } from './FirstApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FirstApp></FirstApp>
  </StrictMode>,
)
