import { Link } from 'react-router-dom';
import React from 'react';
import MenuIcon from '../assets/nav/Nav-MenuIcon.png';
import LoginIcon from '../assets/nav/Nav-LoginIcon.png';

import '../styles/Nav.css';


function Nav() {
    return (
        <div className="navbar">
            <img
                src={MenuIcon}
                alt="메뉴"
                className="menu-icon"
            />

            <div className="navbarMenu">
                <Link className="navbarMenuItem" to={'/laboratory'}>LABORATORY</Link>
                <Link className="navbarMenuItem" to={'/'}>ABOUT</Link>
                <Link className="navbarMenuItem" to={'/market'}>MARKET</Link>
            </div>

            <img
                src={LoginIcon}
                alt="로그인"
                className="login-icon"
            />

        </div>
    );
}

export default Nav;