import { useContext } from "react"
import { ProductContext } from "./Product"
export default function Stock(){
    const {product} = useContext(ProductContext)
    
    return(
        <span className='p_stock'>{product.quantity}</span>
    )
}