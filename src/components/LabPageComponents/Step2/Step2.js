import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';


import styles from './Step2.module.css';

const Step2 = ({ setClickedItem }) => {

  const handleNextClick = () => {
    const step3Element = document.getElementById('step3');
    if (step3Element) {
      step3Element.scrollIntoView({ behavior: 'smooth' });
    }
    setClickedItem(/* 클릭된 항목의 인덱스 */);
  };
  
  return (
    <div id="step2" className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem1}></div>
        <div className={styles.gridItem2}>
          <div className={styles.title}>STEP 2</div>
          <div className={styles.content}>
            원하시는 꽃다발 분위기가 있다면 <br />
            아래 사진들 중 한가지를 골라 주세요!
          </div>

          <div className={styles.number}>02</div>
          <ImageSlider setClickedItem={setClickedItem} />
          <div class={styles.nextBtn} onClick={handleNextClick}>
            →
          </div>
        </div>
        <div className={styles.gridItem3}></div>
      </div>
    </div>
  );
};

export default Step2;
