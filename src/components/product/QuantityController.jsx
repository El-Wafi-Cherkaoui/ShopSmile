import { useContext, useEffect, useState } from "react"
import { ProductContext } from "./Product"
export default function QuantityController(){
    const {product, q_controller_visible} = useContext(ProductContext)
    const [quantity, setQuantity] = useState(0)
    if(!q_controller_visible){
        return
    }

    function handleQuantity_inp(e){
        let quantity = e.target.value
        if(quantity > product.quantity || quantity < 1) return
        setQuantity(Number(quantity))
    }
    return(
        <div className="quantity_controller">
            <input className='quantity_inp' value={quantity} onChange={(e)=>{handleQuantity_inp(e)}}/>
            {
                quantity < product.quantity && 
                <span className='increase_btn' onClick={()=>{setQuantity(quantity+1)}}>+</span>
            }
            {
                quantity > 1 && 
                <span className='decrease_btn' onClick={()=>{setQuantity(quantity-1)}}>-</span>
            }
        </div>
    )
}