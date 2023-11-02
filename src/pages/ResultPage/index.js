import React from 'react';

import FlowerResultContainer from '../../components/ResultPageComponent/FlowerResultContainer/FlowerResultContainer';
import FeaturedImage from '../../components/ResultPageComponent/FeaturedImage/FeaturedImage';
import FeatureDetail from '../../components/ResultPageComponent/FeatureDetail/FeatureDetail';
import FlowerList from '../../components/ResultPageComponent/FlowerList/FlowerList';
import LetterResultContainer from '../../components/ResultPageComponent/LetterResultContainer/LetterResultContainer';
import LetterHeader from '../../components/ResultPageComponent/LetterHeader/LetterHeader';
import LetterCard from '../../components/ResultPageComponent/LetterCard/LetterCard';
import FooterFlowerImages from '../../components/ResultPageComponent/FooterFlowerImages/FooterFlowerImages';
import ResultFooter from '../../components/ResultPageComponent/ResultFooter/ResultFooter';

function ResultPage() {

    return (
        <div>
            <FlowerResultContainer>
                <FeaturedImage />
                <FeatureDetail />
                <FlowerList />
            </FlowerResultContainer>
            <LetterResultContainer>
                <LetterHeader />
                <LetterCard />
                <FooterFlowerImages />
            </LetterResultContainer>
            <ResultFooter />
        </div>
    );
}

export default ResultPage;