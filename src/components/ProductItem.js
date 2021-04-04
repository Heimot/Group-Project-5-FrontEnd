import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import './productItem.css';

export default function ProductItem(props) {
  const [open, setOpen] = useState(false);

  function addToCart(ids) {
    let id = ids.toString();
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
}

  return (
    <Card className="productCard" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    <a href={`/product?productid=${props.product.id}&product=${props.product.tuote}`}><Card.Img variant="top" src="https://bulma.io/images/placeholders/128x128.png" /></a>
    <Card.Body>
      <Card.Text className="text">
        <a href={`/product?productid=${props.product.id}&product=${props.product.tuote}`}>
        {props.product.tuote}
        </a>
      </Card.Text>
      <Card.Title className="price">{props.product.hinta}</Card.Title>
    </Card.Body>
    {open ? <Card className="moreData">
        <Button onClick={() => addToCart(props.product.id)} className="addToCart">Lisää ostoskoriin</Button>
        <Card.Text className="productCardMoreData">
          U CAN ADD MORE TEXT HERE
        </Card.Text>
      </Card> : null}
  </Card>
  );
};
