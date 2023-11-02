import React from 'react';
import styles from './FeaturedImage.module.css';
import BackgroundImg from '../../../assets/ResultPage/FeaturedImage/FeaturedImage-Background.jpeg';

function FeaturedImage(props) {
    return (
        <div className={styles.container}>
            <div className={styles.borderBottom}>
                <div className={styles.featuredImgContainer}>
                    <img src={BackgroundImg} alt="Featured" />
                </div>
            </div>
        </div>
    );
}

export default FeaturedImage;
