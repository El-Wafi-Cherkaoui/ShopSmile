import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './routes/App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error_page from './components/Error_page.jsx'
import Products from './routes/Products.jsx'
import Cart from './routes/Cart.jsx'
import Loading from './components/Loading.jsx'


const my_router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    errorElement: <Error_page />, 
    children:[
      {
        index: true,
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={my_router} />
  </StrictMode>,
)
