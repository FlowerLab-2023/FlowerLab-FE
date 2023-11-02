import { Link } from 'react-router-dom';
import React from 'react';
import MenuIcon from '../../../assets/Navigation/Navigation-MenuIcon.png'
import LoginIcon from '../../../assets/Navigation/Navigation-LoginIcon.png'
import MenuIconDark from '../../../assets/Navigation/Navigation-MenuIcon-dark.png'
import LoginIconDark from '../../../assets/Navigation/Navigation-LoginIcon-dark.png'


import styles from './Navigation.module.css';

function Nav({ className }) {
    return (
        <div className={styles.nav}>
            <img
                src={className === 'dark' ? MenuIconDark : MenuIcon}
                alt="메뉴"
                className={styles.menuIcon}
            />

            <div className={styles.menu}>
                <Link className={`${styles.menuItem} ${styles[className]}`} to={'/lab'}>LABORATORY</Link>
                <Link className={`${styles.menuItem} ${styles[className]}`} to={'/'}>ABOUT</Link>
                <Link className={`${styles.menuItem} ${styles[className]}`} to={'/market'}>MARKET</Link>
            </div>

            <img
                src={className === 'dark' ? LoginIconDark : LoginIcon}
                alt="로그인"
                className={styles.loginIcon}
            />
        </div>
    );
}

export default Nav;