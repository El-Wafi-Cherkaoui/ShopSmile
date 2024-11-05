import QuantityController from "./QuantityController"
import { ProductContext } from "./Product"
import { useContext } from "react"
export default function Add_to_cart(){
    const {setQCV, add_to_cart_btn} = useContext(ProductContext)
    if(!add_to_cart_btn) return
    return(
        <button 
            className='add_to_cart'
            onClick={()=>{setQCV(true)}}>
            Add to cart
        </button>
    )
}