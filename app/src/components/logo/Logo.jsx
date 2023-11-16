import React from 'react';
import classes from './Logo.module.css';


const Logo = () => {
    return (
        <div className={classes.logo}>
           <img  src='/img/logo.svg' alt="burrito"></img>
        </div>
    );
};



export default Logo;