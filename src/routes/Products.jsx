import { useEffect, useState } from 'react'
import '../styles/App.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export default function Products() {
  const products = useLoaderData()
  
  return(
    <div className='products'>
      {products.map((product)=>{
          return(
            <div className='product' key={product.id}>
              <h3>{
                product.title.length >= 25 ? product.title.slice(0, 25) + '...' : product.title
                }</h3>
              <img src={product.image} alt="" />
              <button>Add to cart</button>
            </div>
          )
      })}
    </div>
  )
  

}

