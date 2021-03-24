import { Button } from "react-bootstrap";
import React from "react";
import Card from 'react-bootstrap/Card'
import "./productItem.css";

export default function ProductItem(props) {
  return (
    <Card style={{ width: '13rem'}}>
    <Card.Img variant="top" src="https://bulma.io/images/placeholders/128x128.png" />
    <Card.Body>
      <Card.Text class="text">
        {props.product.tuote}
      </Card.Text>
      <Card.Title class="price">{props.product.hinta}</Card.Title>
      <Button variant="primary" size="sm">Lisää ostoskoriin</Button>{' '}
    </Card.Body>
  </Card>
  );
};
