import React, { useState, useRef, useEffect } from 'react';

import styles from './ImageSlider.module.css';


const ImageSlider = ({ setClickedItem }) => {
    const totalDesigns = 6;
    const itemsPerPage = 4;
    const slideItemWidth = 760;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [clickedItem, setLocalClickedItem] = useState(null);

    const commentData = [
        {
            index: 1,
            comment: "#청량한 #파랑이돋보이는 #신비로운",
        },
        {
            index: 2,
            comment: "#우아한 #모던한 #주황포인트",
        },
        {
            index: 3,
            comment: "#포근한 #자연주의 #하양초록",
        },
        {
            index: 4,
            comment: "#로맨틱 #화려 #핑크빛 #세련된",
        },
        {
            index: 5,
            comment: "#분홍빛의 #로맨틱 #세련된",
        },
        {
            index: 6,
            comment: "#모던한 #시크 #깔끔한 #유럽풍",
        },
    ];

    const sliderTrackRef = useRef(null);


    useEffect(() => {
        const sliderTrack = sliderTrackRef.current;
        if (sliderTrack) {
            sliderTrack.style.transform = `translateX(-${currentSlide * slideItemWidth}px)`;
        }
    }, [currentSlide, slideItemWidth]);

    const handleItemClick = (index) => {
        if (clickedItem === index) {
            setLocalClickedItem(null);
            setClickedItem(null);
        } else {
            setLocalClickedItem(index);
            setClickedItem(index);
        }
    };

    const nextSlide = () => {
        const maxSlide = totalDesigns - itemsPerPage;
        if (currentSlide < maxSlide - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const isAtFirstSlide = currentSlide === 0;
    const isAtLastSlide = currentSlide === totalDesigns - itemsPerPage - 1;

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slider} style={{ width: `${itemsPerPage * slideItemWidth}px` }}>
                <div className={styles.sliderTrack} ref={sliderTrackRef}>
                    <div className={styles.gridContainer}>
                        {[1, 2, 3, 4, 5, 6].map((itemIndex) => (
                            <div key={itemIndex} className={styles.gridItem}>
                                <div
                                    className={`${styles[`gridItem${itemIndex}`]} ${clickedItem === itemIndex ? styles.clicked : ''}`}
                                    onClick={() => handleItemClick(itemIndex)}
                                >
                                    <div className={`${styles['flowerGroup']} ${clickedItem === itemIndex ? styles.visible : ''}`}>
                                        <div className={`${styles.flowerIcon} ${styles.flowerIcon1}`}></div>
                                        <div className={`${styles.flowerIcon} ${styles.flowerIcon2}`}></div>
                                        <div className={`${styles.flowerIcon} ${styles.flowerIcon3}`}></div>
                                    </div>
                                    <img
                                        src={require(`../../../../assets/LabPage/Step2/Step2-FlowerImg${itemIndex}.png`)}
                                        alt={`Flower ${itemIndex}`}
                                        style={{
                                            opacity: clickedItem === null ? 1 : clickedItem === itemIndex ? 1 : 0.4,
                                        }}
                                    />
                                    {clickedItem === itemIndex && (
                                        <div>
                                            <div className={styles.blurOverlay}></div>
                                            <div className={styles.commentContainer}>
                                                <div className={`${styles.comment} ${clickedItem === itemIndex ? styles.visible : ''} `}>
                                                    {commentData.find((data) => data.index === itemIndex)?.comment}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            {
                !isAtFirstSlide && (
                    <div className={styles.prevBtn} onClick={prevSlide}>
                        ‹
                    </div>
                )
            }
            {
                !isAtLastSlide && (
                    <div className={styles.nextBtn} onClick={nextSlide}>
                        ›
                    </div>
                )
            }
        </div >
    );
};

export default ImageSlider;