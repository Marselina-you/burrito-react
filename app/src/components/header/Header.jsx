import React from 'react';
import Logo from '../logo/Logo';
import Nav from '../nav.jsx/Nav';
import classes from './Header.module.css';


const Header = () => {
    return (
        <div>
 <Logo/>
        <Nav/>
        </div>
       
       
    );
};



export default Header;