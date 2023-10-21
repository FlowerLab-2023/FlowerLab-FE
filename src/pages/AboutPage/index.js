import React from 'react';

import ServiceHeader from '../../components/AboutPageComponents/ServiceHeader';
import ServiceDescription from '../../components/AboutPageComponents/ServiceDescription';
import ServiceHighlight from '../../components/AboutPageComponents/ServiceHighlight';
import ServiceOverview from '../../components/AboutPageComponents/ServiceOverview';
import ServiceFeatures from '../../components/AboutPageComponents/ServiceFeatures';
import CustomBouquetGuide from '../../components/AboutPageComponents/CustomBouquetGuide';
import HowToUseGuide from '../../components/AboutPageComponents/HowToUseGuide';
import FlowerLabHighlight from '../../components/GlobalComponents/FlowerLabHighlight/FlowerLabHighlight';



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