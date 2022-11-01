import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider'
import Home from './Home'
import Login from './Login'
import ProtectedLayout from './ProtectedLayout'
import Quotes from './Quotes'


const router = createBrowserRouter([
  {
    path: '', element: <ProtectedLayout />, children: [
      { path: '/', element: <Home /> },
      { path: '/quotes', element: <Quotes /> },
    ]
  },
  { path: '/login', element: <Login /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
