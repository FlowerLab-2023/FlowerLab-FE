import React from 'react';

import FlowerResultContainer from '../../components/ResultPageComponent/FlowerResultContainer/FlowerResultContainer';
import FeaturedImage from '../../components/ResultPageComponent/FeaturedImage/FeaturedImage';
import FeatureDetail from '../../components/ResultPageComponent/FeatureDetail/FeatureDetail';
import FlowerList from '../../components/ResultPageComponent/FlowerList/FlowerList';

function ResultPage() {

    return (
        <FlowerResultContainer>
            <FeaturedImage />
            <FeatureDetail />
            <FlowerList />
        </FlowerResultContainer>
    );
}

export default ResultPage;