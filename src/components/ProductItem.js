import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./productItem.css";

export default function ProductItem(props) {
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState("");

  function addToCart(ids) {
    let id = ids.toString();
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
    let name = props.product.name;
    //kun kuva haetaan backendistä niin tämä pitää muuttaa :)
    let IMG = `http://localhost/Group-Project-5-BackEnd/images/${picture}`;
    props.isOpen2({ id, name, IMG });
  }

  useEffect(() => {
    if (props.product.picture === null) {
      setPicture("default.png");
    } else {
      setPicture(props.product.picture);
    }
  }, []);

  return (
    <Card
      className="productCard"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href={`/product?productid=${props.product.id}`}>
        <Card.Img
          variant="top"
          src={`http://localhost/Group-Project-5-BackEnd/images/${picture}`}
        />
      </a>
      <Card.Body className="productCardTitle">
        <Card.Text className="text productCardTitle">
          <a href={`/product?productid=${props.product.id}`}>
            {props.product.name}
          </a>
        </Card.Text>
        <Card.Title className="price">{props.product.price}</Card.Title>
      </Card.Body>
      {open ? (
        <Card className="moreData">
          <Button
            onClick={() => addToCart(props.product.id)}
            className="addToCart"
          >
            Lisää ostoskoriin
          </Button>
        </Card>
      ) : null}
    </Card>
  );
}
