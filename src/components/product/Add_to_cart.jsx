import QuantityController from "./QuantityController"

export default function Add_to_cart({product, set_QCV}){
    return(
        <button 
            className='add_to_cart'
            onClick={()=>{set_QCV(true)}}>
            Add to cart
        </button>
    )
}