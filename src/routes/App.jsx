import { useEffect, useState } from 'react'
import '../styles/App.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export async function loader() {
  let products = await fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())
  return products
}
export default function App() {
  const products = useLoaderData()
  return(
    <>
      <NavBar />
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
  

}

