import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root/Root'
import NewsProvider from './provider/NewsProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
      <Root />
    </NewsProvider>
  </React.StrictMode>,
)
