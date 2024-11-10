import React, { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/App.css'
import { Link, Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

function add_quantities(products){
  products.map((product)=>{
    product.quantity = Math.floor(Math.random()*40)
  })
  return products
}
export const AppContext = React.createContext()

export default function App() {
  const [products, setProducts] = useState([])
  const [myCart, setMyCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    async function get_prods() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if(response.ok){
          const products = await response.json()
          setProducts(add_quantities(products))
        }
        else{
          throw new Error('Fetching data failed.')
        }
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false)
      }
    }
    get_prods()
    console.log('fetching data');
  }, [])
  const contextValue = useMemo(()=>{
    return {
      products, 
      loading,
      myCart, 
      setMyCart,
      search,
      setSearch
    }
  }, [
    products, 
    loading,
    myCart,
    search
  ])
  return(
    <>
      <AppContext.Provider value={contextValue}>
        <NavBar />
        <div className='content'>
          <Outlet />
        </div>
      </AppContext.Provider>
    </>
  )
  
  

}

