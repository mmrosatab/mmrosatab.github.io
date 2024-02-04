import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import GlobalStyle from './styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routes/>
  </React.StrictMode>,
)
