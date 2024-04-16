import './index.scss'
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { router } from './utils/routes.tsx'
import { setupStore } from './utils/store.ts'
import { RouterProvider } from 'react-router-dom'

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
