import React, { useState, useEffect } from 'react';

import Step1 from '../../assets/about/HowToUseGuide-Step1.png';
import Step2 from '../../assets/about/HowToUseGuide-Step2.png';
import Step3 from '../../assets/about/HowToUseGuide-Step3.png';

import '../../styles/about/HowToUseGuide.css'

function HowToUseGuide() {

    const [selectedStep, setSelectedStep] = useState(null);
    const handleStepSelect = (stepNumber) => {
        setSelectedStep(stepNumber);
    };

    useEffect(() => {
        setSelectedStep(1);
    }, []);

    return (
        <div className="about6-container">
            <div className="about6-background-container">
                <div className="about6-header">
                    <div className="about6-header-left"></div>
                    <div className="about6-header-center">
                        <div className="about6-header-center-title">
                            FLOWER  LAB 사용법
                        </div>
                        <div className="about6-header-center-content">
                            안내된 3개의 STEP만 입력하면, AI가 상황과 취향을 분석하고 당신에게 딱 어울리는 꽃다발을 생성해드립니다.
                        </div>

                    </div>
                    <div className="about6-header-right"></div>
                </div>
                <div className="about6-body">
                    <div className="about6-body-left">
                        <div
                            className={`about6-step1 ${selectedStep === 1 ? 'selected' : ''}`}
                            onClick={() => handleStepSelect(1)}
                        >
                            STEP 1
                        </div>
                        <div
                            className={`about6-step2 ${selectedStep === 2 ? 'selected' : ''}`}
                            onClick={() => handleStepSelect(2)}
                        >
                            STEP 2
                        </div>
                        <div
                            className={`about6-step3 ${selectedStep === 3 ? 'selected' : ''}`}
                            onClick={() => handleStepSelect(3)}
                        >
                            STEP 3
                        </div>
                    </div>
                    <div className="about6-body-right">
                        {selectedStep === 1 &&
                            <div className="about6-body-img-container">
                                <img src={Step1} alt="Step1" className="about6-body-img" />
                            </div>
                        }
                        {selectedStep === 2 && <img src={Step2} alt="Step2" className="about6-body-img" />}
                        {selectedStep === 3 && <img src={Step3} alt="Step3" className="about6-body-img" />}

                    </div>
                </div>
            </div>
        </div>

    );
}

export default HowToUseGuide;