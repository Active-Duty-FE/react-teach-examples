import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store'

import App from './App'
const container = document.getElementById('root')
const root =  ReactDOM.createRoot(container)
//store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
//})
