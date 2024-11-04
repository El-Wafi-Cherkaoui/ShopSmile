import { useEffect, useState } from "react"

export default function QuantityController({visible, stock}){
    if(!visible){
        return
    }
    const [quantity, setQuantity] = useState(0)
    

    function handleQuantity_inp(e){
        let quantity = e.target.value
        if(quantity > stock || quantity < 1) return
        setQuantity(Number(quantity))
    }
    return(
        <div className="quantity_controller">
            <input className='quantity_inp' value={quantity} onChange={(e)=>{handleQuantity_inp(e)}}/>
            {
                quantity < stock && 
                <span className='increase_btn' onClick={()=>{setQuantity(quantity+1)}}>+</span>
            }
            {
                quantity > 1 && 
                <span className='decrease_btn' onClick={()=>{setQuantity(quantity-1)}}>-</span>
            }
        </div>
    )
}