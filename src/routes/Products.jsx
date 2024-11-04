import { useEffect, useState } from 'react'
import '../styles/App.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import Stock from '../components/product/Stock'
import Add_to_cart from '../components/product/Add_to_cart'
import QuantityController from '../components/product/QuantityController'
import Product from '../components/product/Product'

function add_quantities(products){
  products.map((product)=>{
    product.quantity = Math.floor(Math.random()*40)
  })
  return products
}
export default function Products() {
  const [products, setProducts] = useState(add_quantities(useLoaderData()))
  console.log(products);
  
  
  return(
    <div className='products'>
      {products.map((product)=>{
          return(
            <Product product={product} key={product.id}/>
          )
      })}
    </div>
  )
  

}

