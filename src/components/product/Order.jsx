import React, { useContext, useEffect, useState } from 'react'
import '../../styles/App.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import Stock from './Stock'
import Add_to_cart from './Add_to_cart'
import QuantityController from './QuantityController'
import { AppContext } from '../../routes/App'


export default function Order({product, quantity}) {  
  const {myCart, setMyCart} = useContext(AppContext)

  function modify_order_q(modified_q) {
    if(modified_q + quantity < 1 || modified_q + quantity > product.quantity || isNaN(modified_q)) return

    let modified_cart = myCart
    modified_cart = modified_cart.map((order)=>{      
      if(order.ordered_product.id != product.id){
        return order
      }
      else{
        return {...order, ordered_quantity: quantity + modified_q}        
      }
    })    
    setMyCart(modified_cart)
  }
  function remove_order(){
    console.log('a');
    
    setMyCart(
      old_cart=> old_cart.filter((order)=>order.ordered_product.id != product.id)
    )
  }

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
        <button onClick={()=>{modify_order_q(1)}}>+</button>
        <button onClick={()=>{modify_order_q(-1)}}>-</button>
        <button onClick={remove_order}>x</button>
      </div>

    </div>

  )
  

}

