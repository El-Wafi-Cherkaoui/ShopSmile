import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <div className='navBar'>
            <div className='logo_title'>
                <img src="https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png" alt="" id='logo' />
                <h5>ShopSmile</h5>
            </div>
                <input type="search" id="searchInput" placeholder="search"/>
            <ul className='navLinks'>
                <Link to={'/'} >Home</Link>
                <Link to={'products'} >products</Link>
                <Link to={'about'} >about</Link>
            </ul>
        </div>
    )
}