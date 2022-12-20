import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import store from './app/store/index';
import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
      <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
