import React from 'react';
import styles from './FooterFlowerImages.module.css';
import FlowerImg1 from '../../../assets/ResultPage/FooterFlowerImages/FooterFlowerImages-FlowerImg1.png';
import FlowerImg2 from '../../../assets/ResultPage/FooterFlowerImages/FooterFlowerImages-FlowerImg2.png';
import FlowerImg3 from '../../../assets/ResultPage/FooterFlowerImages/FooterFlowerImages-FlowerImg3.png';
import FlowerImg4 from '../../../assets/ResultPage/FooterFlowerImages/FooterFlowerImages-FlowerImg4.png';


function FooterFlowerImages() {
    return (
        <div className={styles.container}>
            <img src={FlowerImg1} alt="Flower 1" />
            <img src={FlowerImg2} alt="Flower 2" />
            <img src={FlowerImg3} alt="Flower 3" />
            <img src={FlowerImg4} alt="Flower 4" />

            <img src={FlowerImg1} alt="Flower 1" />
            <img src={FlowerImg2} alt="Flower 2" />
            <img src={FlowerImg3} alt="Flower 3" />
            <img src={FlowerImg4} alt="Flower 4" />

            <img src={FlowerImg1} alt="Flower 1" />
            <img src={FlowerImg2} alt="Flower 2" />
            <img src={FlowerImg3} alt="Flower 3" />
            <img src={FlowerImg4} alt="Flower 4" />
        </div>
    );
}

export default FooterFlowerImages;