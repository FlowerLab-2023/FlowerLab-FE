import React from 'react';
import styles from './FlowerResultContainer.module.css';

import Nav from '../../GlobalComponents/Navigation/Navigation';

function FlowerResultContainer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.navBottom}>
                <Nav className="dark"/>
            </div>
            <div className={styles.resultContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default FlowerResultContainer;