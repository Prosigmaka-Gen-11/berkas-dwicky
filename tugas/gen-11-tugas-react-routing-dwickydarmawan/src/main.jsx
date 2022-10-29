import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MoviesLayout from './pages/MoviesLayout'
import MoviesList from './pages/MoviesList'
import MoviesForm from './pages/MoviesForm'
import MoviesDetail from './pages/MoviesDetail'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/Movies', element: <MoviesLayout />, children: [
      { path: 'list', element: <MoviesList /> },
      { path: 'form', element: <MoviesForm /> },
      { path: ':moviesId', element: <MoviesDetail /> }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
