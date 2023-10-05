import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './css/main.css'

// LO QUE VAMOS A UTILZIAR
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
