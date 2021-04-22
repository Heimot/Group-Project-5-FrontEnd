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
import Comments from './Comments.js'

function ProductPage(props) {
    const [Rating, setRating] = useState(null);
    const [price, setPrice] = useState(49.99);
<<<<<<< HEAD
    const [description, setDesc] = useState(null)
    const [showComment, setShowComment] = useState(false)
=======
    const [description, setDesc] = useState(null);
    const [name, setName] = useState("GET NAME FROM FETCH");
    const [ID, setID] = useState(null);
>>>>>>> b275508f0668acb1ec49f963fb35b68af3453829

    var productImageSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true
    };

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
        let i = null;
        for (i = 0; i < Rating; i++) {
            starAmount.push(<FontAwesomeIcon key={i} icon={faStar} />)
        }
        if (Rating < 5) {
            for (i = i; i < 5; i++) {
                starAmount.push(<FontAwesomeIcon key={i} icon={emptyStar} />);
            }
        }
        return starAmount;
    }

    function addToCart() {
        let id = ID.toString();
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        const found = cart.some(el => el.id === id)
        if (found) {
            const allCartValues = cart.filter(item => item.id !== id)
            const cartValue = cart.filter(item => item.id === id)
            allCartValues.push({id, amount: cartValue[0].amount + 1 })
            cart = allCartValues;
        } else {
            cart.push({ id, amount: 1 })
        }
        let stringCart = JSON.stringify(cart);
        localStorage.setItem("cart", stringCart);
        props.isOpen({ID, name, IMG});
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-5">
                    <Slider className="productSlider" {...productImageSettings}>
                        <img alt="rotating pictures" src={IMG} className="productPicture" />
                        <img alt="rotating pictures" src={IMG} className="productPicture" />
                        <img alt="rotating pictures" src={IMG} className="productPicture" />
                        <img alt="rotating pictures" src={IMG} className="productPicture" />
                    </Slider>
                </div>
                <div className="col-sm-12 col-lg-5">
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text className="productCode">Tuotekoodi {ID}</Card.Text>
                    <div>
                        {reviewStars()}
                        <Button onClick={() => setShowComment(true)} className="review">Reviews</Button>
                    </div>
                    <div className="productPrice">
                        {price}€
                    </div>
                    <Button onClick={() => addToCart()} className="productPurchaseBtn">
                        Lisää ostoskoriin
                    </Button>
                    <Button disabled={true} className="productPurchaseBtn">
                        Varaa ja nouda
                    </Button>
                    <div className="productDescription">
                        {description}
                    </div>
                    <div id="reviews" className="btn" style={{display: showComment ? 'inline' : 'none'}}>
                        <Comments />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;
