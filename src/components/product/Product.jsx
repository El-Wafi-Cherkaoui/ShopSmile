import React, { useContext, useEffect, useState } from 'react'
import '../../styles/App.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import Stock from './Stock'
import Add_to_cart from './Add_to_cart'
import QuantityController from './QuantityController'
import { AppContext } from '../../routes/App'
import PropTypes from 'prop-types'

export const ProductContext = React.createContext()

export default function Product({product}) {  
  if(product.quantity == 0) return 
  const [q_controller_visible, setQCV] = useState(false)
  const [add_to_cart_btn, setATC] = useState(true)
  const {myCart} = useContext(AppContext)
  
  function product_is_available() {
    let my_order = myCart.filter((order)=>order.ordered_product.id == product.id)[0]
    if (!my_order || my_order.ordered_quantity < product.quantity) return true
    else{
      return false
    }
  }
  return(

    <div className='product' key={product.id}>
      <h3>
        {
          product.title.length >= 25 ? product.title.slice(0, 25) + '...' : product.title
        }
      </h3>
      <img src={product.image} alt="" />
      <div className='p_footer'>
        <ProductContext.Provider value={{product, q_controller_visible, setQCV, add_to_cart_btn, setATC}} >
          <Stock />
          <QuantityController />
          {product_is_available() ? <Add_to_cart/> : ''}
        </ProductContext.Provider>
      </div>

    </div>

  )
}
Product.propTypes = {
  product: PropTypes.object
}

