import React from 'react';
import { Link } from 'react-router-dom';
import b1 from './chatbot/images/b.jpeg';
const Header = () => (
    <nav className="nav-wrapper">
    <Link to={'/'} className='brand-logo'>Products</Link>
         <ul id="nav-mobile" className="right hide-on-med-and-down">

            <li><Link to={'/shop'} >Shop</Link></li>
            <li><Link to={'/about'}>About us</Link></li>
           
        </ul>
       
        r
    </nav>
)

export default Header;