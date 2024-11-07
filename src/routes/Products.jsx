import { useContext, useEffect, useState } from 'react'
import '../styles/App.css'
import Product from '../components/product/Product'
import { AppContext } from './App'
import Loading from '../components/Loading'

export default function Products() {
  const {products, loading, search} = useContext(AppContext)

  if(loading){
    return <Loading />
  }
  return(
    <div className='products'>
      {products.map((product)=>{
        if(!product.title.toLowerCase().startsWith(search.toLowerCase())) return
        return(
          <Product product={product} key={product.id}/>
        )
      })}
    </div>
  )
  

}

