import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HomeApp } from './HomeApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeApp />
    </BrowserRouter>
  </React.StrictMode>,
)
