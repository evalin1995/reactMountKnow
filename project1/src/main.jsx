import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.min.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <HashRouter>
    <App />
    </HashRouter>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
  </React.StrictMode>,
)
