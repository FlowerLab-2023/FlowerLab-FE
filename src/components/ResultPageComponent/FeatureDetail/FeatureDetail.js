import React from 'react';
import styles from './FeatureDetail.module.css';

function FeatureDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.borderBottom}>
            <div className={styles.banner}>블룸파워님을 위한 꽃다발이 완성됐어요!</div>
            <div className={styles.title}>“ 봄과 새로운 시작 “</div>
            <div className={styles.description}>: 산뜻한 컬러의 꽃과 짙은 초록의 조합</div>
            </div>
        </div>
    );
}

export default FeatureDetail;
