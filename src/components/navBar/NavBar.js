import React from 'react';

import logo from '../../assets/logo.svg';
import './NavBar.scss'

const NavBar = () =>{
    return (
        <nav className='nav'>
            <div className='nav__leftSide'>
                <div className='nav__logoContainer'>
                    <ul>
                        <li className='nav__logo'>
                            <img src={logo} alt="drop of water with the words global drop" />
                        </li>
                    </ul>
                </div>
                <ul className='nav__items'>
                    <li className='nav__item nav__item--firstChild'>Why Water?</li>
                    <li className='nav__item'>Our Impact</li>
                    <li className='nav__item'>About Us</li>
                </ul>
            </div>
            <div className='nav__rightSide'>
                <ul className='nav__items'>
                    <button className='nav__donateButton'>Give</button>
                    <li className='nav__signIn'>Sign In</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;