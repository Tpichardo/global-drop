import react from 'react';

import './NavBar.scss'

const NavBar = () =>{
    return (
        <div className='navigation'>
            <div className='navigation__logo'>
                ICON
            </div>
            <nav className='navigation__container'>
                <ul className='navigation__leftSide'>
                    <li className='navigation__item navigation__item--firstChild'>Why Water?</li>
                    <li className='navigation__item'>Our Impact</li>
                    <li className='navigation__item'>About Us</li>
                </ul>
                <ul className='navigation__rightSide'>
                    <button className='navigation__item navigation__item--giveButton'>Give</button>
                    <li className='navigation__item'>Sign In</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;