import React from 'react';

import ImageComponent from '../../components/GlobalComponents/ImageComponent/ImageComponent';
import LoadingPageContainer from '../../components/LoadingPageComponents/LoadingPageContainer/LoadingPageContainer';
import DotIndicator from '../../components/LoadingPageComponents/DotIndicator/DotIndicator';

import FlowerImg1 from '../../assets/LoadingPage/Loading-FlowerImg1.png';
import FlowerImg2 from '../../assets/LoadingPage/Loading-FlowerImg2.png';
import FlowerImg3 from '../../assets/LoadingPage/Loading-FlowerImg3.png';
import FlowerImg4 from '../../assets/LoadingPage/Loading-FlowerImg4.png';
import FlowerImg5 from '../../assets/LoadingPage/Loading-FlowerImg5.png';
import TextComponent from '../../components/GlobalComponents/TextComponent/TextComponent';

function LoadingPage() {

    return (
        <LoadingPageContainer>
            <ImageComponent src={FlowerImg1} className="flower1" />
            <ImageComponent src={FlowerImg2} className="flower2"/>
            <ImageComponent src={FlowerImg3} className="flower3" />
            <ImageComponent src={FlowerImg4} className="flower4" />
            <ImageComponent src={FlowerImg5} className="flower5" />
            <TextComponent text="조금만 기다려주세요." className="loadingText1"/>
            <TextComponent text="AI가 블룸파워님을 위한 꽃다발을 만들고 있어요." className="loadingText2"/>
            <DotIndicator />
        </LoadingPageContainer>
    );
}

export default LoadingPage;