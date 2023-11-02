import React from "react";
import FlowerCard from "./FlowerCard";
import FlowerImg1 from '../../../assets/ResultPage/FlowerCard/FlowerCard-FlowerImg1.png';
import FlowerImg2 from '../../../assets/ResultPage/FlowerCard/FlowerCard-FlowerImg2.png';
import FlowerImg3 from '../../../assets/ResultPage/FlowerCard/FlowerCard-FlowerImg3.png';
import FlowerImg4 from '../../../assets/ResultPage/FlowerCard/FlowerCard-FlowerImg4.png';
import FlowerImg5 from '../../../assets/ResultPage/FlowerCard/FlowerCard-FlowerImg5.png';

import styles from './FlowerList.module.css';

function FlowerList() {
    const flowers = [
        {
            flowerImg: FlowerImg1,
            flowerName: "튤립",
            flowerLanguage: "사랑의 고백, 매혹, 영원한 애정, 경솔",
            recommendDescription: "가장 친한 친구를 향한 깊은 애정과 마음을 봄을 닮은 분홍색 튤립으로 전할 수 있을 것 같아요."
        },
        {
            flowerImg: FlowerImg2,
            flowerName: "노란 작약",
            flowerLanguage: "질투, 영원한 사랑, 변치 않는 우정",
            recommendDescription: "멀리 떠나는 가장 친한 친구에게 블룸파워님의 변치 않을 우정과 사랑을 노란 장미로 전해 보아요."
        },
        {
            flowerImg: FlowerImg3,
            flowerName: "백장미",
            flowerLanguage: "순결, 청순, 존경",
            recommendDescription: "꿈을 위해 큰 도전을 하는 친구를 향한 존경의 의미를 담아 하얀색 장미를 선물하는 것을 추천해 드려요."
        },
        {
            flowerImg: FlowerImg4,
            flowerName: "분홍 장미",
            flowerLanguage: "평온, 순결, 은혜, 헌신, 침묵",
            recommendDescription: "가장 친한 친구를 향한 블룸파워님의 따뜻한 마음이 분홍 장미를 닮았어요. 평온하고 소중한 그 마음을 친구에게 전해보는게 어떨까요."
        },
        {
            flowerImg: FlowerImg5,
            flowerName: "붉은 장미",
            flowerLanguage: "사랑, 아름다움, 낭만적인",
            recommendDescription: "새로운 꿈을 위한 도전이라니 너무 낭만적이에요. 친구의 도전과 열정이 아름다운 붉은 장미와 닮아있어요."
        },
    ];

    return (
        <div className={styles.container}>
            {flowers.map((flower, index) => (
                <FlowerCard
                    key={index}
                    flowerImg={flower.flowerImg}
                    flowerName={flower.flowerName}
                    flowerLanguage={flower.flowerLanguage}
                    recommendDescription={flower.recommendDescription}
                />
            ))}
        </div>
    );

}

export default FlowerList;