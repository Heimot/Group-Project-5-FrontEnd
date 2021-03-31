import React from "react";
import Slider from "react-slick";
import AD from '../img/tarjous.jpg';
import AD2 from '../img/gaming.jpg';
import AD3 from '../img/outeletpohja.jpg';
import AD4 from '../img/tarjouskevat.jpg';
import AD5 from '../img/toimisto.jpg';
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
        <div className="allADS container">
            <Slider className="adMargins" {...settings}>
                <div>
                    <img alt="ad" className="BIGAD" src={AD}></img>
                </div>
                <div>
                    <img alt="ad" className="BIGAD" src={AD2}></img>
                </div>
                <div>
                    <img alt="ad" className="BIGAD" src={AD3}></img>
                </div>
                <div>
                    <img alt="ad" className="BIGAD" src={AD4}></img>
                </div>
                <div>
                    <img alt="ad" className="BIGAD" src={AD5}></img>
                </div>
            </Slider>
            <Slider className="adMargins" {...settings2}>
                <div>
                    <img alt="ad" className="SMALLAD" src={AD2}></img>
                </div>
                <div>
                    <img alt="ad" className="SMALLAD" src={AD3}></img>
                </div>
                <div>
                    <img alt="ad" className="SMALLAD" src={AD5}></img>
                </div>
            </Slider>
        </div>
    );
}

export default AdSlider;
