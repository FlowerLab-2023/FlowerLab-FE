import React from 'react';
import styles from './LetterCard.module.css';
import Flower from '../../../assets/ResultPage/LetterCard/LetterCard-Flower.png'
import DownloadIcon from '../../../assets/ResultPage/LetterCard/LetterCard-DownloadIcon.png';
import ReloadIcon from '../../../assets/ResultPage/LetterCard/LetterCard-ReloadIcon.png';
import ShareIcon from '../../../assets/ResultPage/LetterCard/LetterCard-ShareIcon.png';


function LetterCard() {
    return (
        <div className={styles.container}>
            <div className={styles.receiverContainer}>
                <div className={styles.dear}>Dear.</div>
                <div className={styles.receiver}>가장 소중한 내 친구에게</div>
            </div>
            <div className={styles.cardMessage}>봄에 태어난 너를 위한 꽃이야.<br />새롭게 시작하는 너의 꿈을 응원할게!</div>
            <img src={Flower} alt='flower' className={styles.flowerImg}></img>
            <div className={styles.iconContainer}>
                <img src={DownloadIcon} alt='downloadIcon' className={styles.downloadIcon}></img>
                <img src={ReloadIcon} alt='reloadIcon' className={styles.reloadIcon}></img>
                <img src={ShareIcon} alt='shareIcon' className={styles.shareIcon}></img>
            </div>
        </div>
    );
}

export default LetterCard;