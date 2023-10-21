import React from 'react';

import Flower1 from '../../assets/AboutPage/CustomBouquetGuide-Flower1.png'
import Flower2 from '../../assets/AboutPage/CustomBouquetGuide-Flower2.png'

import styles from './CustomBouquetGuide.module.css'

function CustomBouquetGuide() {

    return (
        <div className={styles.container}>
            <div class={styles.backgroundContainer}>
                <div class={styles.leftImgs}>
                    <img src={Flower1} alt="Flower1" />
                    <img src={Flower2} alt="Flower2" />
                </div>
                <div className={styles.info}>
                    <div className={styles.text1}>
                        Tell me the situation, and get your personal BOUQUET
                    </div>
                    <div className={styles.text2}>
                        상황을 간단히 알려주세요. 어울리는 꽃다발을 만들어 드릴게요.
                    </div>

                </div>
                <div class={styles.rightImgs}>
                    <img src={Flower2} alt="Flower2" />
                    <img src={Flower1} alt="Flower1" />
                </div>
            </div>
        </div>
    );
}

export default CustomBouquetGuide;