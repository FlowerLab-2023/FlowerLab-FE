import React from 'react';

import ServiceHeader from './ServiceHeader';
import ServiceDescription from './ServiceDescription';
import ServiceHighlight from './ServiceHighlight';
import ServiceOverview from './ServiceOverview';
import ServiceFeatures from './ServiceFeatures';
import CustomBouquetGuide from './CustomBouquetGuide';
import HowToUseGuide from './HowToUseGuide';
import FlowerLabHighlight from './FlowerLabHighlight';



function AboutPage() {

    return (

        <div>
            <ServiceHeader />
            <ServiceDescription />
            <ServiceHighlight />
            <ServiceOverview />
            <ServiceFeatures />
            <CustomBouquetGuide />
            <HowToUseGuide />
            <FlowerLabHighlight />
        </div>

    );
}

export default AboutPage;