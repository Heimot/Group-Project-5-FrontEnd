import React from "react";
import Card from 'react-bootstrap/Card'

export default function ProductItem(props) {
  return (
    <Card style={{ width: '13rem' }}>
    <Card.Img variant="top" src="https://bulma.io/images/placeholders/128x128.png" />
    <Card.Body>
      <Card.Text>
        {props.product.tuote}
      </Card.Text>
      <Card.Title>{props.product.hinta}</Card.Title>
    </Card.Body>
  </Card>
  );
};
