import { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productPage.css";

// IMG
import IMG from '../img/localproduct.png';

function ProductPage() {
    const [Rating, setRating] = useState(null);
    const [price, setPrice] = useState(49.99);
    const [description, setDesc] = useState(null)

    var productImageSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true
    };

    const [ID, setID] = useState(null)
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('productid');
        setID(myParam);
        setDesc("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        // IDSTÄ LÖYTÄÄ IDN JOLLA TULLAAN HAKEMAAN YKSI PRODUCT!
        // vaihdetaan tämä kun saa ratingin itse backendistä
        setRating(3)
    }, []);

    function reviewStars() {
        let starAmount = [null];
        console.log(starAmount)
        let i = null;
        for (i = 0; i < Rating; i++) {
            starAmount.push(<FontAwesomeIcon icon={faStar} />)
        }
        if (Rating < 5) {
            for (i = i; i < 5; i++) {
                starAmount.push(<FontAwesomeIcon icon={emptyStar} />);
            }
        }
        return starAmount;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-5">
                    <Slider className="productSlider" {...productImageSettings}>
                        <img src={IMG} className="productPicture" />
                        <img src={IMG} className="productPicture" />
                        <img src={IMG} className="productPicture" />
                        <img src={IMG} className="productPicture" />
                    </Slider>
                </div>
                <div className="col-sm-12 col-lg-5">
                    <Card.Title>
                        PRODUCT NAME FROM GET HERE
                    </Card.Title>
                    <Card.Text className="productCode">Tuotekoodi {ID}</Card.Text>
                    <div>
                    {reviewStars()}
                    </div>
                    <div className="productPrice">
                        {price}€
                    </div>
                    <Button className="productPurchaseBtn">
                        Lisää ostoskoriin
                    </Button>
                    <Button disabled={true} className="productPurchaseBtn">
                        Varaa ja nouda
                    </Button>
                    <div className="productDescription">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;