import React from "react";
import Navi from "./Navi";
import { Row, Col, Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { Route } from "react-router-dom";
import CategoryList from "./CategoryList";
import CarouselLayout from "./CarouselLayout";
import ItemSearchList from "./ItemSearchList";
import LoginRegister from "./login/LoginRegister";
import Background from "./Background";
import Footer from "./Footer";
import CartDetail from "./CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Route exact path="/login" component={LoginRegister} />
      <Route exact path="/cart" component={CartDetail} />
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
          <Route exact path="/search/:itemName" component={CategoryList} />
        </Col>
        <Col sm={8}>
          <Route exact path="/items/:id" component={ItemList} />
          <Route exact path="/search/:itemName" component={ItemSearchList} />
        </Col>
        <Col sm={1}>
          <Route exact path="/items/:id" />
          <Route exact path="/search/:itemName" />
        </Col>
      </Row>
      <Background/>
      <Footer/>
    </div>
  );
}
