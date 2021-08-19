import React, {  } from 'react';
import { Navbar, Nav, Button, Form, NavDropdown, FormControl, Container } from 'react-bootstrap';
import { IconBox } from '../../Styles';

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
        </Nav>
        <Form style={{marginLeft:"70px"}} className="d-flex w-100">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Ara</Button>
        </Form>
        <IconBox>
        <Nav.Link>
          Giriş yap
        </Nav.Link>
        <Nav.Item>
          |
        </Nav.Item>
        <Nav.Link>
          Kayıt ol
        </Nav.Link>
        </IconBox>
      </Navbar.Collapse>
    </Navbar>
    </Container>
    )
}
