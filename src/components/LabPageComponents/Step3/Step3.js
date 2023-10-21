import React, { useState } from 'react';

import styles from './Step3.module.css';

const Step3 = ({ setSelectedItem }) => {
  const [selectedItem, setLocalSelectedItem] = useState(-1);

  const handleItemClick = (index) => {
    if (selectedItem === index) {
      setLocalSelectedItem(-1);
      setSelectedItem(-1);
    } else {
      setLocalSelectedItem(index);
      setSelectedItem(index);
    }
  };

  const colorItems = [
    '회색',
    '진한 파란색',
    '하얀색',
    '연한 노란색',
    '진한 노란색',
    '진한 청색',
    '검은색',
    '어두운 연두색',
    '어두운 빨간색',
    '연한 보라색',
    '연한 빨간색',
    '어두운 초록색',
    '연한 청색',
    '진한 분홍색',
    '연한 주황색',
    '밝은 하늘색'
  ];

  return (
    <div id="step3" className={styles.container}>
      <div className={styles.gridContainer}>
        <div class={styles.gridItem1}></div>
        <div class={styles.gridItem2}>
          <div className={styles.title}>
            STEP 3
          </div>
          <div className={styles.content}>
            원하시는 꽃다발 색상이 있으신가요? <br />
            AI가 참고할 수 있도록 아래 중 한가지를 골라주세요!
          </div>

          <div className={styles.number}>
            03
          </div>

          <div className={styles.colorGridContainer}>
            {colorItems.map((color, index) => (
              <div
                key={index}
                className={`${styles[`colorGridItem${index + 1}`]} ${selectedItem === index ? styles.selected : ''}`}
                onClick={() => handleItemClick(index)}
                style={{ opacity: selectedItem === -1 || selectedItem === index ? 1 : index === 2 ? 0.4 : 0.7, }}
              >
                {selectedItem === index && (

                  <div className={styles.flowerIconContainer}>
                    <img
                      src={require(`../../../assets/LabPage/Step3/Step3-FlowerIcon${index + 1}.png`)}
                      alt={`${color}에 대한 꽃 이미지`}
                    />
                  </div>
                )}
                {color}
              </div>
            ))}
          </div>
        </div>
        <div class={styles.gridItem3}></div>
      </div>
    </div>
  );
};

export default Step3;