import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../Active Link/ActiveLink';
const Header = () => {
    return (
        <nav>
            <ActiveLink to="/" className="">Home</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about" className="">About</ActiveLink>  
            <ActiveLink to="/contact" className="">Contact</ActiveLink>
        </nav>
    );
};

export default Header;