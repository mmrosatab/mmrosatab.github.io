import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import GlobalStyle from './styles'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <GlobalStyle/>
      <Routes/>
    </I18nextProvider>
  </React.StrictMode>,
)
