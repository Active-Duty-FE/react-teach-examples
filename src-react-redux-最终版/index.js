import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store'
import {Provider} from 'react-redux'

import App from './App'

const container = document.getElementById('root')
const root =  ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    /* 此处需要用 Provider 包裹 App，目的是让 App 所有的后代容器组件都能接收到 store */
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
