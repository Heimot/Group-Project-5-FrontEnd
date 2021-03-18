import React from "react";
import Card from 'react-bootstrap/Card'

export default function ProductItem() {
  return (
    <Card style={{ width: '13rem' }}>
    <Card.Img variant="top" src="https://bulma.io/images/placeholders/128x128.png" />
    <Card.Body>
      <Card.Text>
        Tuoteen nimi
      </Card.Text>
      <Card.Title>45€</Card.Title>
    </Card.Body>
  </Card>
  );
};
