import { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import useFetch from "./hooks/fetch";
import Comments from "./Comments.js";
import { useHistory } from 'react-router-dom';

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productPage.css";

function ProductPage(props) {
  const [Rating, setRating] = useState(null);
  const [showComment, setShowComment] = useState(false);

  const history = useHistory();

  var productImageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
  };



  useEffect(() => {
     return history.listen(() => { 
        window.location.reload();
     }) 
  },[history]) 

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  let productData = useFetch(
    "http://localhost/Group-Project-5-BackEnd/id.php?id=" + myParam,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );

  function reviewStars() {
    // Rating is not yet implemented!
    let starAmount = [null];
    let i = null;
    for (i = 0; i < Rating; i++) {
      starAmount.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    if (Rating < 5) {
      for (i = i; i < 5; i++) {
        starAmount.push(<FontAwesomeIcon key={i} icon={emptyStar} />);
      }
    }
    return starAmount;
  }

  function addToCart() {
    let id = productData[0].id;
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    const found = cart.some((el) => el.id === id);
    if (found) {
      const allCartValues = cart.filter((item) => item.id !== id);
      const cartValue = cart.filter((item) => item.id === id);
      allCartValues.push({ id, amount: cartValue[0].amount + 1 });
      cart = allCartValues;
    } else {
      cart.push({ id, amount: 1 });
    }
    let stringCart = JSON.stringify(cart);
    localStorage.setItem("cart", stringCart);
    let name = productData[0].name;
    let IMG = "";
    if (productData[0].picture === null) {
      IMG = `http://localhost/Group-Project-5-BackEnd/images/default.png`;
    } else {
      IMG = `http://localhost/Group-Project-5-BackEnd/images/${productData[0].picture}`;
    }
    props.isOpen({ id, name, IMG });
  }

  return (
    <div className="container">
      {productData ? (
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <Slider className="productSlider" {...productImageSettings}>
              {productData.map((img) => {
                let url = img.picture;
                if (url === null) {
                  url = "default.png";
                }
                return (
                  <img
                    alt="rotating pictures"
                    src={`http://localhost/Group-Project-5-BackEnd/images/${url}`}
                    className="productPicture"
                  />
                );
              })}
            </Slider>
          </div>
          <div className="col-sm-12 col-lg-5">
            <Card.Title>{productData[0].name}</Card.Title>
            <Card.Text className="productCode">
              Tuotekoodi {productData[0].id}
            </Card.Text>
            <div>
              {reviewStars()}
              <Button onClick={() => setShowComment(true)} className="review">
                Reviews
              </Button>
            </div>
            <div className="col-sm-12 col-lg-5">
              <div className="productPrice">{productData[0].price}€</div>
              <div>
                <Button
                  onClick={() => addToCart()}
                  className="productPurchaseBtn"
                >
                  Lisää ostoskoriin
                </Button>
                <Button disabled={true} className="productPurchaseBtn">
                  Varaa ja nouda
                </Button>
              </div>
              <div className="productDescription">
                {productData[0].description}
              </div>
            </div>
            <div
              id="reviews"
              className="btn"
              style={{ display: showComment ? "inline" : "none" }}
            >
              <Comments />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading... (Development? Is XAMPP on?)</div>
      )}
    </div>
  );
}

export default ProductPage;
