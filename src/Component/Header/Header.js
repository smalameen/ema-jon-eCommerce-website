import React from 'react';
import logo from '../../images/logo.png';
import '../Header/Header.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';



const Header = () => {
    const [ userLoggedIn, setUserLoggedIn] = useContext(UserContext);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                <span>Welcome to Ema-john!!</span>
                <button onClick = {()=> setUserLoggedIn({})}>Sign out</button>
            </nav>
        </div>
    );
};

export default Header;