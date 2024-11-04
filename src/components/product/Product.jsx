import { useEffect, useState } from 'react'
import '../../styles/App.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import Stock from './Stock'
import Add_to_cart from './Add_to_cart'
import QuantityController from './QuantityController'


export default function Product({product}) {
  const [q_controller_visible, setQCV] = useState(false)
  return(

    <div className='product' key={product.id}>
      <h3>
        {
          product.title.length >= 25 ? product.title.slice(0, 25) + '...' : product.title
        }
      </h3>
      <img src={product.image} alt="" />
      <div className='p_footer'>
        <Stock stock={product.quantity} />
        <QuantityController stock={product.quantity} visible={q_controller_visible}/>
        <Add_to_cart product={product} set_QCV={setQCV}/>
      </div>

    </div>

  )
  

}

