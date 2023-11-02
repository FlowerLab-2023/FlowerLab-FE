import React from 'react';
import styles from './LetterResultContainer.module.css';

function LetterResultContainer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.resultContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default LetterResultContainer;