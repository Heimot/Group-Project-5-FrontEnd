import React from "react";
import Slider from "react-slick";
import AD from '../img/ad.png';
import './ads.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AdSlider() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    var settings2 = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div>
            <Slider className="adMargins" {...settings}>
                <div>
                    <img alt="ad" className="bigad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="bigad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="bigad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="bigad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="bigad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="bigad" src={AD}></img>
                </div>
            </Slider>
            <Slider className="marginTest" {...settings2}>
                <div>
                    <img alt="ad" className="smallad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="smallad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="smallad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="smallad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="smallad" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="smallad" src={AD}></img>
                </div>
            </Slider>
        </div>
    );
}

export default AdSlider;