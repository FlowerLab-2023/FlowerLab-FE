import React, { useState, useEffect } from 'react';
import styles from './DotIndicator.module.css';

function DotIndicator() {
    const [activeDot, setActiveDot] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDot((prev) => (prev + 1) % 3);
        }, 350);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.dotContainer}>
            <div className={styles.dot} style={{ backgroundColor: activeDot === 0 ? '#EBEBE2' : '#ADAE3D' }}></div>
            <div className={styles.dot} style={{ backgroundColor: activeDot === 1 ? '#EBEBE2' : '#ADAE3D' }}></div>
            <div className={styles.dot} style={{ backgroundColor: activeDot === 2 ? '#EBEBE2' : '#ADAE3D' }}></div>
        </div>
    );
}

export default DotIndicator;