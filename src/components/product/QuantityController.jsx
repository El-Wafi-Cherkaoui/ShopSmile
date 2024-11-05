import { useContext, useEffect, useState } from "react"
import { ProductContext } from "./Product"
import { AppContext } from "../../routes/App"
export default function QuantityController(){
    const {product, q_controller_visible, setQCV, add_to_cart_btn, setATC} = useContext(ProductContext)
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
        let found = myCart.find((order)=>order.ordered_product == product)
        if(!found){
            setMyCart((oldCart=>[
                ...oldCart,
                {
                    ordered_product:product,
                    ordered_quantity:quantity
                }
            ]))
            setQCV(false)
            if(product.quantity - quantity == 0) {
                setATC(false)
            }
            setQuantity(1)

            return
        }

        let rest = product.quantity - (found.ordered_quantity + quantity)
        if(rest > 0){
            found.ordered_quantity += quantity
        }
        else if (rest == 0){
            found.ordered_quantity += quantity
            setATC(false)
        }
        else{
            alert('out of stock')
        }
        
        
        setQCV(false)
        setQuantity(1)
        
        
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