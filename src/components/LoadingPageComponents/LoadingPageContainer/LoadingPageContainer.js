import React, { useState, useEffect } from 'react';
import styles from './LoadingPageContainer.module.css';

function LoadingPageContainer(props) {
    const [activeDot, setActiveDot] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDot((prev) => (prev + 1) % 3);
        }, 350);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.loadingContainer}>
                {props.children}
                <div className={styles.dot} style={{ backgroundColor: activeDot === 0 ? '#EBEBE2' : '#ADAE3D' }}></div>
                <div className={styles.dot} style={{ backgroundColor: activeDot === 1 ? '#EBEBE2' : '#ADAE3D' }}></div>
                <div className={styles.dot} style={{ backgroundColor: activeDot === 2 ? '#EBEBE2' : '#ADAE3D' }}></div>
            </div>
        </div>
    );
}

export default LoadingPageContainer;
