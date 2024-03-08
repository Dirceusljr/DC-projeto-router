import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Insert from './pages/Insert'
import List from './pages/List'
import './global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
      path: '/insert',
      element: <Insert />
      },
      {
        path: '/list',
        element: <List />
      }      
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
