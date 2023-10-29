import React from 'react';

import FlowerResultContainer from '../../components/ResultPageComponent/FlowerResultContainer/FlowerResultContainer';
import FeaturedImage from '../../components/ResultPageComponent/FeaturedImage/FeaturedImage';
import FeatureDetail from '../../components/ResultPageComponent/FeatureDetail/FeatureDetail';

function ResultPage() {

    return (
        <FlowerResultContainer>
            <FeaturedImage />
            <FeatureDetail />
        </FlowerResultContainer>
    );
}

export default ResultPage;