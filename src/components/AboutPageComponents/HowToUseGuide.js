import React, { useState, useEffect } from 'react';

import Step1 from '../../assets/AboutPage/HowToUseGuide-Step1.png';
import Step2 from '../../assets/AboutPage/HowToUseGuide-Step2.png';
import Step3 from '../../assets/AboutPage/HowToUseGuide-Step3.png';

import styles from './HowToUseGuide.module.css'

function HowToUseGuide() {

    const [selectedStep, setSelectedStep] = useState(null);
    const handleStepSelect = (stepNumber) => {
        setSelectedStep(stepNumber);
    };

    useEffect(() => {
        setSelectedStep(1);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.backgroundContainer}>
                <div className={styles.header}>
                    <div></div>
                    <div className={styles.headerCenter}>
                        <div className={styles.headerCenterTitle}>
                            FLOWER  LAB 사용법
                        </div>
                        <div className={styles.headerCenterContent}>
                            안내된 3개의 STEP만 입력하면, AI가 상황과 취향을 분석하고 당신에게 딱 어울리는 꽃다발을 생성해드립니다.
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className={styles.body}>
                    <div className={styles.bodyLeft}>
                        <div
                            className={`${styles.step1} ${selectedStep === 1 ? styles.selected : ''}`}
                            onClick={() => handleStepSelect(1)}
                        >
                            STEP 1
                        </div>
                        <div
                            className={`${styles.step2} ${selectedStep === 2 ? styles.selected : ''}`}
                            onClick={() => handleStepSelect(2)}
                        >
                            STEP 2
                        </div>
                        <div
                            className={`${styles.step3} ${selectedStep === 3 ? styles.selected : ''}`}
                            onClick={() => handleStepSelect(3)}
                        >
                            STEP 3
                        </div>
                    </div>
                    <div className={styles.bodyRight}>
                        {selectedStep === 1 &&
                            <div className={styles.bodyImgContainer}>
                                <img src={Step1} alt="Step1" className={styles.bodyImg} />
                            </div>
                        }
                        {selectedStep === 2 && <img src={Step2} alt="Step2" className={styles.bodyImg} />}
                        {selectedStep === 3 && <img src={Step3} alt="Step3" className={styles.bodyImg} />}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HowToUseGuide;