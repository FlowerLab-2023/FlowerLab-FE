import React, { useState } from 'react';

import styles from './Step1.module.css'

function Step1({ setStep1Text }) {
    const [textValue, setTextValue] = useState('');


    const handleNextClick = () => {
        const step2Element = document.getElementById('step2');
        if (step2Element) {
            step2Element.scrollIntoView({ behavior: 'smooth' });
        }
        setStep1Text(textValue);
    };

    const handleTextareaChange = (event) => {
        setTextValue(event.target.value);
        setStep1Text(textValue);
      };

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div class={styles.gridItem1}></div>
                <div class={styles.gridItem2}></div>
                <div class={styles.gridItem3}></div>
                <div class={styles.gridItem4}></div>
                <div class={styles.gridItem5}>
                    <div className={styles.title}>
                        STEP 1
                    </div>
                    <div className={styles.description}>
                        누구에게 꽃다발을 선물하고 싶은신가요?<br />
                        말씀해주신 이야기를 바탕으로 저희가 꽃다발을 만들어 드릴게요!
                    </div>
                </div>
                <div class={styles.gridItem6}></div>
                <div class={styles.gridItem7}></div>
                <div class={styles.gridItem8}>
                    <div className={styles.number}>
                        01
                    </div>
                    <div className={styles.textTitle}>
                        CONTENTS
                    </div>
                    <textarea className={styles.content} value={textValue} onChange={handleTextareaChange} placeholder="Ex) 가장 친한 친구가 이번 봄에 자신의 꿈에 조금 더 가까워지기 위해 미국으로 유학을 가게 되었어. 사랑과 존경의 마음을 담아 친구의 꿈을 응원하고 우리의 변치 않을 우정을 담은 꽃다발을 선물하고 싶어."></textarea>
                    <div className={styles.nextBtn} onClick={handleNextClick}>
                        →
                    </div>
                </div>
                <div class={styles.gridItem9}></div>
                <div class={styles.gridItem10}></div>
                <div class={styles.gridItem11}></div>
                <div class={styles.gridItem12}></div>
            </div>
        </div>
    );
}

export default Step1;