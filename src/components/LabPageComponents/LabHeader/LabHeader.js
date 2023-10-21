import React from 'react';
import Nav from '../../GlobalComponents/Navigation/Navigation';

import FlowerImg1 from '../../../assets/LabPage/LabHeader/LabHeader-FlowerImg1.png';
import FlowerImg2 from '../../../assets/LabPage/LabHeader/LabHeader-FlowerImg2.png';
import FlowerImg3 from '../../../assets/LabPage/LabHeader/LabHeader-FlowerImg3.png';
import FlowerImg4 from '../../../assets/LabPage/LabHeader/LabHeader-FlowerImg4.png';
import FlowerImg5 from '../../../assets/LabPage/LabHeader/LabHeader-FlowerImg5.png';

import styles from './LabHeader.module.css'

function LaboratoryHeader() {

    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.navBottom}>
                <Nav />
            </div>

            <div className={styles.container}>

                <img
                    src={FlowerImg1}
                    alt={`laboratory-flower-1`}
                    className={styles.flowerImg1}
                />
                <img
                    src={FlowerImg2}
                    alt={`laboratory-flower-2`}
                    className={styles.flowerImg2}
                />
                <img
                    src={FlowerImg3}
                    alt={`laboratory-flower-3`}
                    className={styles.flowerImg3}
                />
                <img
                    src={FlowerImg4}
                    alt={`laboratory-flower-4`}
                    className={styles.flowerImg4}
                />
                <img
                    src={FlowerImg5}
                    alt={`laboratory-flower-5`}
                    className={styles.flowerImg5}
                />

                <div className={styles.text1}>HI, We are Flower LAB</div>
                <div className={styles.text2}> To get your personal bouquet</div>
                <div className={styles.text3}>Follow 3 steps below</div>
            </div>
        </div>
    );
}

export default LaboratoryHeader;