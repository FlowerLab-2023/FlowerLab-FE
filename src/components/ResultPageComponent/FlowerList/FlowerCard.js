import React from 'react';
import styles from './FlowerCard.module.css';

import FlowerImg1 from '../../../assets/ResultPage/FlowerCard/FlowerCard-FlowerImg1.png';

function FlowerCard() {
    return (
        <div className={styles.container}>
            <div className={styles.flowerImgContainer}>
                <img src={FlowerImg1} className={styles.flowerImg}></img>
            </div>
            <div className={styles.flowerName}>튤립</div>
            <div className={styles.flowerLanguage}>사랑의 고백, 매혹, 영원한 애정, 경솔</div>
            <div className={styles.recommend}>
                <div className={styles.recommendTitle}>추천 이유</div>
                <div className={styles.recommendDescription}>
                    가장 친한 친구를 향한 깊은 애정과
                    마음을 봄을 닮은 분홍색 튤립으로
                    전할 수 있을 것 같아요.
                </div>
            </div>
        </div>
    );
}

export default FlowerCard;