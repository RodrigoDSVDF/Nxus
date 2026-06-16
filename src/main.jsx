import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. IMPORTAR O ANALYTICS DA VERCEL (Note o '/react' no final)
import { Analytics } from '@vercel/analytics/react' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics /> 
  </React.StrictMode>,
)
