import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '../../assets/about/ServiceDescription-Img1.png';
import Img2 from '../../assets/about/ServiceDescription-Img2.png';
import Img3 from '../../assets/about/ServiceDescription-Img3.png';
import Img4 from '../../assets/about/ServiceDescription-Img4.png';

import Line1 from '../../assets/about/ServiceDescription-Line1.png';
import Line2 from '../../assets/about/ServiceDescription-Line2.png';
import Line3 from '../../assets/about/ServiceDescription-Line3.png';

import '../../styles/about/ServiceDescription.css'


function ServiceDescription() {

    return (

        <div id="about1" className="about-background-container">
            <div className="about-info">
                <div className="about-title">
                    ABOUT
                </div>
                <div className="about-content">
                    ; FLOWER LAB
                </div>

                <img
                    src={Line1}
                    alt={`about-line-1`}
                    className="about-line-1"
                />
                <img
                    src={Line2}
                    alt={`about-line-2`}
                    className="about-line-2"
                />
                <img
                    src={Line3}
                    alt={`about-line-3`}
                    className="about-line-3"
                />




                <div className="about-index-1">1</div>

                <div className="about-img-1-background">
                    <div className="about-img-text-1">
                        연인과의 특별한 기념일. 더 특별한 날을 <br />
                        만들기 위한 꽃다발을 선물하기 위해</div>

                </div>
                <img
                    src={Img1}
                    alt={`about-img-1`}
                    className="about-img-1"
                />

                <div className="about-index-2">2</div>
                <div className="about-img-2-background">
                    <div className="about-img-text-2">
                        혹은 친한 친구의 졸업식. 친구에게 잘 어울릴<br />
                        완벽한 꽃다발을 만들기 위해
                    </div>
                </div>
                <img
                    src={Img2}
                    alt={`about-img-2`}
                    className="about-img-2"
                />

                <div className="about-index-3">3</div>
                <div className="about-img-3-background">
                    <div className="about-img-text-3">
                        꽃집에 갔지만 막상 어떻게 꽃다발을<br />
                        만들어야 할지 매번 고민이 되시나요?
                    </div>
                </div>
                <img
                    src={Img3}
                    alt={`about-img-3`}
                    className="about-img-3"
                />


                <div className="about-index-4">4</div>
                <div className="about-img-4-background">
                    <div className="about-img-text-4">
                        플라워랩이 당신의 고민을 해결해 드릴게요.<br />
                        AI 추천 꽃다발 서비스를 이용해 보세요!
                    </div>

                    <Link to="/laboratory" className="about-next-btn">
                        →
                    </Link>

                </div>
                <img
                    src={Img4}
                    alt={`about-img-4`}
                    className="about-img-4"
                />

            </div>

        </div>

    );
}

export default ServiceDescription;