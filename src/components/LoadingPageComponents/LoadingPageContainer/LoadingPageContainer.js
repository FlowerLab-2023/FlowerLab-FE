import React from 'react';
import styles from './LoadingPageContainer.module.css';

function LoadingPageContainer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.loadingContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default LoadingPageContainer;
