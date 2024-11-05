import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../routes/App";

export function NavBar(){
    const {myCart, setMyCart} = useContext(AppContext)
    return(
        <div className='navBar'>
            <div className='logo_title'>
                <img src="https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png" alt="" id='logo' />
                <h5>ShopSmile</h5>
            </div>
                <input type="search" id="searchInput" placeholder="search"/>
            <ul className='navLinks'>
                <Link to={'/'} >Home</Link>
                <Link to={'cart'} >Cart({myCart.length})</Link>
                <Link to={'about'} >about</Link>
            </ul>
        </div>
    )
}