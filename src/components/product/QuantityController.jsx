import { useContext, useEffect, useState } from "react"
import { ProductContext } from "./Product"
import { AppContext } from "../../routes/App"
export default function QuantityController(){
    const {product, q_controller_visible, setQCV} = useContext(ProductContext)
    const {myCart, setMyCart} = useContext(AppContext)
    const [quantity, setQuantity] = useState(1)

    if(!q_controller_visible){
        return
    }

    function handleQuantity_inp(e){
        let quantity = e.target.value
        if(quantity > product.quantity || quantity < 1) return
        setQuantity(Number(quantity))
    }

    function add_to_cart(){
        if(!quantity) return
        let found = myCart.find((order)=>order.product == product)
        
        if (found && found.quantity+quantity <= product.quantity){
            found.quantity += quantity
        }
        else if (found && found.quantity+quantity > product.quantity){
            alert('out of stock')
        }
        else{            
            setMyCart((oldCart=>[
                ...oldCart,
                {
                    product:product,
                    quantity:quantity
                }
            ]))
        }
        
        
        
    }
    return(
        <>
        <div className="quantity_controller">
            {
                quantity > 1 && 
                <span className='decrease_btn' onClick={()=>{setQuantity(quantity-1)}}>-</span>
            }
            <input className='quantity_inp' value={quantity} onChange={(e)=>{handleQuantity_inp(e)}}/>
            {
                quantity < product.quantity && 
                <span className='increase_btn' onClick={()=>{setQuantity(quantity+1)}}>+</span>
            }
        <button className="validate_quantity" onClick={()=>{add_to_cart()}}>
            Validate
        </button>
        </div>
        </>
    )
}