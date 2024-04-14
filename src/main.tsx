import './index.scss'
import React from 'react'
import App from './views/App/App.tsx'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { setupStore } from './utils/store.ts'

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
