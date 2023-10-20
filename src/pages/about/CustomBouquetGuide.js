import React from 'react';

import Flower1 from '../../assets/about/CustomBouquetGuide-Flower1.png'
import Flower2 from '../../assets/about/CustomBouquetGuide-Flower2.png'

import '../../styles/about/CustomBouquetGuide.css'

function CustomBouquetGuide() {

    return (
        <div className="about5-container">
            <div class="about5-background-container">
                <div class="left-images">
                    <img src={Flower1} alt="Flower1" />
                    <img src={Flower2} alt="Flower2" />
                </div>
                <div className="about5-info">
                    <div className="about5-text-1">
                        Tell me the situation, and get your personal BOUQUET
                    </div>
                    <div className="about5-text-2">
                        상황을 간단히 알려주세요. 어울리는 꽃다발을 만들어 드릴게요.
                    </div>

                </div>
                <div class="right-images">
                    <img src={Flower2} alt="Flower2" />
                    <img src={Flower1} alt="Flower1" />
                </div>
            </div>
        </div>

    );
}

export default CustomBouquetGuide;