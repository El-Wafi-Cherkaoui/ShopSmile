import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App, { loader as appLoader } from './routes/App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error_page from './components/Error_page.jsx'
import Products from './routes/Products.jsx'


const my_router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    errorElement: <Error_page />, 
    loader: appLoader,
    children:[
      {
        index: true,
        element: <Products />,
        loader: appLoader,

      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={my_router} />
  </StrictMode>,
)
