import React from 'react';
import styles from './FlowerCard.module.css';

function FlowerCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.flowerImgContainer}>
                <img src={props.flowerImg} alt={props.flowerName} className={styles.flowerImg}></img>
            </div>
            <div className={styles.flowerName}>{props.flowerName}</div>
            <div className={styles.flowerLanguage}>{props.flowerLanguage}</div>
            <div className={styles.recommend}>
                <div className={styles.recommendTitle}>추천 이유</div>
                <div className={styles.recommendDescription}>
                    {props.recommendDescription}
                </div>
            </div>
        </div>
    );
}

export default FlowerCard;