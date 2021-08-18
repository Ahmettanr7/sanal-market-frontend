import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, NavDropdown, FormControl, Container } from 'react-bootstrap';

export default function Navi() {
    return (
      <Container>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" className="p-4">TANNET SANAL MARKET</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Ara</Button>
        </Form>
        <Nav.Item>
          
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
    </Container>
    )
}
