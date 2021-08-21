import React from "react";
import Navi from "./Navi";
import { Row, Col, Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { Route } from "react-router-dom";
import CategoryList from "./CategoryList";
import CarouselLayout from "./CarouselLayout";
import Footer from "./Footer";

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Row>
        <Col sm={1}></Col>
        <Col sm={2}>
          <Route exact path="/" component={CategoryList} />
        </Col>
        <Col sm={8}>
          <Container>
            <Route exact path="/" component={CarouselLayout} />
          </Container>
        </Col>
        <Col sm={1}></Col>
      </Row>

      <Row>
        <Col sm={1}></Col>
        <Col sm={2}>
          <Route exact path="/items/:id" component={CategoryList} />
        </Col>
        <Col sm={8}>
          <Route exact path="/items/:id" component={ItemList} />
        </Col>
        <Col sm={1}>
          <Route exact path="/items/:id" />
        </Col>
      </Row>
    </div>
  );
}
