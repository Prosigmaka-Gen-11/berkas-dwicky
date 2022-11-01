import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './Form'
import List from './List'
import MoviesProvider from './MoviesProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MoviesProvider>
    <Form />
    <br /><hr /><br />
    <List />
  </MoviesProvider>
)
