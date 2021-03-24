import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import './productItem.css';

export default function ProductItem(props) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="productCard" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    <a href={`/product?productid=${props.product.id}&product=${props.product.tuote}`}><Card.Img variant="top" src="https://bulma.io/images/placeholders/128x128.png" /></a>
    <Card.Body>
      <Card.Text>
        <a href={`/product?productid=${props.product.id}&product=${props.product.tuote}`}>
        {props.product.tuote}
        </a>
      </Card.Text>
      <Card.Title>{props.product.hinta}</Card.Title>
    </Card.Body>
    {open ? <Card className="moreData">
        <Button className="addToCart">Lisää ostoskoriin</Button>
        <Card.Text>
          U CAN ADD MORE TEXT HERE
        </Card.Text>
      </Card> : null}
  </Card>
  );
};
