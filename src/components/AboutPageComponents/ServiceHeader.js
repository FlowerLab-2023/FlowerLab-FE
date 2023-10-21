import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../GlobalComponents/Navigation/Navigation';
import FlowerIcon from '../../assets/AboutPage/ServiceHeader-FlowerIcon.png'

import styles from './ServiceHeader.module.css'

function ServiceHeader() {

  const handleNextClick = () => {
    const about1Element = document.getElementById('about1');
    if (about1Element) {
      about1Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.backgroundContainer}>

        <div className={styles.logo}>
          FLOWER<br />LAB
        </div>
        <div className={styles.content}>
          당신의 특별한 날을, 더 특별하게 만들어주기 위한<br />
          AI 꽃다발 추천 서비스 💐
        </div>

        <div className={styles.menu}>

          <div className={styles.menuItem1} onClick={handleNextClick}>
            <div className={styles.menuItemText}>플라워랩 서비스 더 알아보기</div>
            <img src={FlowerIcon} alt="꽃" className={styles.menuItemIcon} />
          </div>

          <Link to={'/lab'} className={styles.noTextDecoration}>
            <div className={styles.menuItem2}>
              <div className={styles.menuItemText}>AI 꽃다발 추천받으러 가기</div>
              <img src={FlowerIcon} alt="꽃" className={styles.menuItemIcon} />
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default ServiceHeader;