import React from 'react';
import Nav from '../../components/Nav';

import FlowerImg1 from '../../assets/lab/header/LabHeader-FlowerImg1.png';
import FlowerImg2 from '../../assets/lab/header/LabHeader-FlowerImg2.png';
import FlowerImg3 from '../../assets/lab/header/LabHeader-FlowerImg3.png';
import FlowerImg4 from '../../assets/lab/header/LabHeader-FlowerImg4.png';
import FlowerImg5 from '../../assets/lab/header/LabHeader-FlowerImg5.png';


import '../../styles/lab/LabHeader.css'

function LaboratoryHeader() {

    return (
        <div className="laboratory-header-background-container">
            <div className="laboratory-main-nav-bottom">
                <Nav />
            </div>

            <div className="laboratory-header-container">

                <img
                    src={FlowerImg1}
                    alt={`laboratory-flower-1`}
                    className="laboratory-flower-1"
                />
                <img
                    src={FlowerImg2}
                    alt={`laboratory-flower-2`}
                    className="laboratory-flower-2"
                />
                <img
                    src={FlowerImg3}
                    alt={`laboratory-flower-3`}
                    className="laboratory-flower-3"
                />
                <img
                    src={FlowerImg4}
                    alt={`laboratory-flower-4`}
                    className="laboratory-flower-4"
                />

                <img
                    src={FlowerImg5}
                    alt={`laboratory-flower-5`}
                    className="laboratory-flower-5"
                />

                <div className="laboratory-header-text-1">HI, We are Flower LAB</div>
                <div className="laboratory-header-text-2"> To get your personal bouquet</div>
                <div className="laboratory-header-text-3">Follow 3 steps below</div>
            </div>

        </div>
    );
}

export default LaboratoryHeader;