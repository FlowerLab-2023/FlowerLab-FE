import React from 'react';

import Bouquet from '../../assets/AboutPage/ServiceHighlight-Bouquet.png';

import styles from './ServiceHighlight.module.css';

function ServiceHighlight() {

    return (
        <div className={styles.container}>
            <div className={styles.backgroundContainer}>
                <div></div>
                <div className={styles.gridItem2}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            ABOUT
                        </div>
                        <div className={styles.content}>
                            사용자가 제공한 상황을 바탕으로 AI가 상황에 <br />
                            어울리는 꽃다발을 만들어 드립니다.<br />
                            따로 고민할 걱정 없이 나만의 꽃다발을 완성해 보세요.
                        </div>
                        <img
                            src={Bouquet}
                            alt="bouquete"
                            className={styles.overlayImg}
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default ServiceHighlight;