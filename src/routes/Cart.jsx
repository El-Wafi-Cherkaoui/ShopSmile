import { useContext, useEffect, useState } from 'react'
import '../styles/App.css'
import Product from '../components/product/Product'
import { AppContext } from './App'
import Order from '../components/product/Order'


export default function Cart() {
  const {myCart, setMyCart} = useContext(AppContext)
  const [cartCost, setCartCost] = useState(0)

  console.log(myCart);
  useEffect(()=>{
    let total_cost = 0
    myCart.map((order)=>{
      total_cost += (order.ordered_quantity * order.ordered_product.price)
    })
    setCartCost(total_cost)
    
  }, [myCart])

  return(
    <div className='my_cart'>
      <div className='orders_list'>
        {myCart.map((order)=>{
          return(
            <Order product={order.ordered_product} quantity={order.ordered_quantity} key={order.ordered_product.id}/>
          )
        })}
      </div>
      <div className='side_cart_details'>
        <h3>
            Total cost : {cartCost} $
        </h3>
        {
          myCart.map((order)=>{
            return(
              <>
              <div className='total_price'>
              </div>
              <div className='order_details'>
                <h4>Details :</h4>
                <h5>{order.ordered_product.title}</h5>
                <span>price per unite : {order.ordered_product.price} $</span>
                <span>Quantity : {order.ordered_quantity}</span>
                <span>Total price : {order.ordered_quantity * order.ordered_product.price} $</span>
              </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
  

}

