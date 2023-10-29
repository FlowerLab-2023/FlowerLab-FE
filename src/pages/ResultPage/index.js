import React from 'react';

import FlowerResultContainer from '../../components/ResultPageComponent/FlowerResultContainer/FlowerResultContainer';
import FeaturedImage from '../../components/ResultPageComponent/FeaturedImage/FeaturedImage';
import FeatureDetail from '../../components/ResultPageComponent/FeatureDetail/FeatureDetail';
import FlowerCard from '../../components/ResultPageComponent/FlowerList/FlowerCard';

function ResultPage() {

    return (
        <FlowerResultContainer>
            <FeaturedImage />
            <FeatureDetail />
            <FlowerCard />
        </FlowerResultContainer>
    );
}

export default ResultPage;