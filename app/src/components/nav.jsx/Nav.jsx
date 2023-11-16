import React from 'react';
import ButtonCart from '../cart/ButtonCart';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}><a href="#">main</a></li>
          <li className={classes.nav__item}><a href="#">about us</a></li>
          <li className={classes.nav__item}><a href="#">menu</a></li>
          <li className={classes.nav__item}><a href="#">reservation</a></li>
          </ul>
          <ButtonCart/>
   
    </nav>
    );
};



export default Nav;