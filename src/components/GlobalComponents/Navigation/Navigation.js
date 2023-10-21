import { Link } from 'react-router-dom';
import React from 'react';
import MenuIcon from '../../../assets/Navigation/Navigation-MenuIcon.png'
import LoginIcon from '../../../assets/Navigation/Navigation-LoginIcon.png'

import styles from './Navigation.module.css';

function Nav() {
    return (
        <div className={styles.nav}>
            <img
                src={MenuIcon}
                alt="메뉴"
                className={styles.menuIcon}
            />

            <div className={styles.menu}>
                <Link className={styles.menuItem} to={'/lab'}>LABORATORY</Link>
                <Link className={styles.menuItem} to={'/'}>ABOUT</Link>
                <Link className={styles.menuItem} to={'/market'}>MARKET</Link>
            </div>

            <img
                src={LoginIcon}
                alt="로그인"
                className={styles.loginIcon}
            />
        </div>
    );
}

export default Nav;