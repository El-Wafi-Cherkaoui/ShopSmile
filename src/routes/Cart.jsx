import { useContext, useEffect, useState } from 'react'
import '../styles/App.css'
import Product from '../components/product/Product'
import { AppContext } from './App'
import Order from '../components/product/Order'


export default function Cart() {
  const {myCart, setMyCart} = useContext(AppContext)

  console.log(myCart);
  

  return(
    <div className='orders_list'>
      {myCart.map((order)=>{
        return(
          <Order product={order.ordered_product} quantity={order.ordered_quantity} key={order.ordered_product.id}/>
        )
      })}
    </div>
  )
  

}

