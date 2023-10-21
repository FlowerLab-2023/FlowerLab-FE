import React from 'react';

import styles from './SubmitButton.module.css'

function SubmitButton({onClick}) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.button}>
                <div className={styles.text}>
                    AI 꽃다발 추천받기
                </div>
                <div className={styles.nextBtn}>
                    →
                </div>
            </div>
        </div>
    );
}

export default SubmitButton;