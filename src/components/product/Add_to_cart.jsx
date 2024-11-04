import QuantityController from "./QuantityController"
import { ProductContext } from "./Product"
import { useContext } from "react"
export default function Add_to_cart(){
    const {setQCV} = useContext(ProductContext)
    
    return(
        <button 
            className='add_to_cart'
            onClick={()=>{setQCV(true)}}>
            Add to cart
        </button>
    )
}