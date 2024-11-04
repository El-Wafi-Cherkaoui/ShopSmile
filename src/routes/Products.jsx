import { useContext, useEffect, useState } from 'react'
import '../styles/App.css'
import Product from '../components/product/Product'
import { AppContext } from './App'


export default function Products() {
  const {products, loading} = useContext(AppContext)
  
  if(loading){
    return 'loading'
  }
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

