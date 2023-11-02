import React from 'react';
import styles from './ResultFooter.module.css';
import DownloadIcon from '../../../assets/ResultPage/ResultFooter/ResultFooter-DownloadIcon.png';
import ReloadIcon from '../../../assets/ResultPage/ResultFooter/ResultFooter-ReloadIcon.png';
import ShareIcon from '../../../assets/ResultPage/ResultFooter/ResultFooter-ShareIcon.png';


function ResultFooter() {
    return (
        <div className={styles.container}>
            <div className={styles.reloadContainer}>
                <img src={ReloadIcon} alt='reloadIcon' className={styles.icon} />
                <div className={styles.text}>생성된 이미지가 맘에 들지 않으신가요?<br />AI에게 다시 한번 요청해 보세요!</div>
            </div>
            <div className={styles.downloadContainer}>
                <img src={DownloadIcon} alt='downloadIcon' className={styles.icon} />
                <div className={styles.text}>생성된 이미지가 맘에 드셨다면<br />사진을 저장해 보세요!</div>
            </div>
            <div className={styles.shareContainer}>
                <img src={ShareIcon} alt='shareIcon' className={styles.icon} />
                <div className={styles.text}>AI가 생성한 꽃다발 이미지를<br />자유롭게 공유해 보세요!</div>
            </div>
        </div>
    );
}

export default ResultFooter;