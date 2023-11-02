import React from 'react';
import styles from './LetterHeader.module.css';

function LetterHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>LETTERS</div>
            <div className={styles.description}>꽃다발과 함께 편지를 전하고 싶은신가요?<br />
                꽃다발을 바탕으로 AI가 작성해 드리는 카드 메세지를 참고해 보세요!</div>
        </div>
    );
}

export default LetterHeader;