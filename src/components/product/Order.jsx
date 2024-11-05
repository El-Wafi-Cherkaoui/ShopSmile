import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import Stock from './Stock'
import Add_to_cart from './Add_to_cart'
import QuantityController from './QuantityController'

export const ProductContext = React.createContext()

export default function Order({product, quantity}) {  

  return(
    <div className='order' key={product.id}>
      <h3>
        {
          product.title.length >= 25 ? product.title.slice(0, 25) + '...' : product.title
        }
      </h3>
      <img src={product.image} alt="" />
      <div className='p_footer'>
        <span>Quantity {quantity}</span>
      </div>

    </div>

  )
  

}

