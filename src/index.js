import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import App from './App'
import ContactsPage from './pages/ContactsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)
