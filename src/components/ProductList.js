import React from "react";
import ProductItem from "./ProductItem";
import "./productList.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ProductList() {
  return (
    <>
      <Container>
      <Row className="productRow">
          <Col><ProductItem/></Col>
          <Col><ProductItem/></Col>
          <Col><ProductItem/></Col>
      </Row>
      <Row className="productRow">
          <Col><ProductItem/></Col>
          <Col><ProductItem/></Col>
          <Col><ProductItem/></Col>
      </Row>
      <Row className="productRow">
          <Col><ProductItem/></Col>
          <Col><ProductItem/></Col>
          <Col><ProductItem/></Col>
      </Row>
      </Container>
      </>
  );
};
