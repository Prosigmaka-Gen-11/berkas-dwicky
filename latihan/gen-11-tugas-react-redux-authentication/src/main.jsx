import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from "./store"
import { Provider } from 'react-redux'

import Login from './Login'
import ProtectedLayout from './ProtectedLayout'
import Home from './Home'


const router = createBrowserRouter([
  {
    path: '', element: <ProtectedLayout />, children: [
      { path: '/', element: <Home /> },
    ]
  },
  { path: '/login', element: <Login /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
