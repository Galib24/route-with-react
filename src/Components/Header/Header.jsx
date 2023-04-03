import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to="/" className="">Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about" className="">About</Link>  
            <Link to="/contact" className="">Contact</Link>
        </nav>
    );
};

export default Header;