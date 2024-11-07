import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../routes/App";
import logo from '../images/logo.svg'

export function NavBar(){
    const {myCart, setMyCart, search, setSearch} = useContext(AppContext)
    return(
        <div className='navBar'>
            <div className='logo_title'>
                <img src={logo} alt="" id='logo' />
                <h5>ShopSmile</h5>
            </div>
                <input type="search" id="searchInput" placeholder="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <ul className='navLinks'>
                <NavLink activeClassName='active'  to={'/'} >Home</NavLink>
                <NavLink activeClassName='active' to={'cart'} >Cart: <span id="cart_counter">{myCart.length}</span></NavLink>
                <NavLink activeClassName='active' to={'about'} >about</NavLink>
            </ul>
        </div>
    )
}