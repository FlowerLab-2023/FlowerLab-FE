import React from 'react';

import Icon1 from '../../assets/AboutPage/ServiceFeatures-Icon1.png'
import Icon2 from '../../assets/AboutPage/ServiceFeatures-Icon2.png'
import Icon3 from '../../assets/AboutPage/ServiceFeatures-Icon3.png'

import styles from './ServiceFeatures.module.css'

function ServiceFeatures() {

    return (
        <div className={styles.container}>
            <div className={styles.backgroundContainer}>
                <div className={styles.title}>FLOWER LAB 서비스</div>
                <div className={styles.itemsContainer}>
                    <div className={styles.item}>
                        <div className={styles.quote}>“</div>
                        <img src={Icon1} alt="서비스 1" className={styles.img} />
                        <div className={styles.featureTitle}>편리함과 효율성</div>
                        <div className={styles.content}>원하는 꽃다발을 따로 알아볼 필요 없이 <br />
                            빠르고 간편하게 상상해 보세요.</div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.quote}>“</div>
                        <img src={Icon2} alt="서비스 2" className={styles.img} />
                        <div className={styles.featureTitle}>맞춤형 제작</div>
                        <div className={styles.content}>자신의 개인 상황에 어울리는<br />
                            나만의 꽃다발을 만나볼 수 있어요.</div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.quote}>“</div>
                        <img src={Icon3} alt="서비스 3" className={styles.img} />
                        <div className={styles.featureTitle}>카드 제작</div>
                        <div className={styles.content}>꽃다발과 함께 건넬, 마음을 담은<br />
                            간단한 카드 문구를 추천해 드려요.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceFeatures;