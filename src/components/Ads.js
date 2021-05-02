import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import AD from "../img/tarjous.jpg";
import AD2 from "../img/gaming.jpg";
import AD3 from "../img/outeletpohja.jpg";
import AD4 from "../img/tarjouskevat.jpg";
import AD5 from "../img/toimisto.jpg";
import "./ads.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AdSlider() {
  var pathArray = window.location.pathname.split("/");
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="allADS container">
      <Slider className="adMargins" {...settings}>
        <div>
        <Link to="/product?productid=15">
          <img alt="ad" className="BIGAD" src={AD}>
          </img>
          </Link>
        </div>
        <div>
        <Link to="/catalog/Pelit">
          <img alt="ad" className="BIGAD" src={AD2}></img>
          </Link>
        </div>
        <div>
        <Link to="catalog/Alelaari">
          <img alt="ad" className="BIGAD" src={AD3}></img>
          </Link>
        </div>
        <div>
        <Link to="/product?productid=15">
          <img alt="ad" className="BIGAD" src={AD4}></img>
          </Link>
        </div>
        <div>
        <Link to="/catalog/Tietokoneet/Työtietokoneet">
          <img alt="ad" className="BIGAD" src={AD5}></img>
          </Link>
        </div>
      </Slider>
      {pathArray[1] === "" ? (
        <Slider className="adMargins" {...settings2}>
          <div>
          <Link to="/catalog/Pelit">
            <img alt="ad" className="SMALLAD" src={AD2}></img>
            </Link>
          </div>
          <div>
          <Link to="catalog/Alelaari">
            <img alt="ad" className="SMALLAD" src={AD3}></img>
            </Link>
          </div>
          <div>
          <Link to="/catalog/Tietokoneet/Työtietokoneet">
            <img alt="ad" className="SMALLAD" src={AD5}></img>
            </Link>
          </div>
        </Slider>
      ) : null}
    </div>
  );
}

export default AdSlider;
