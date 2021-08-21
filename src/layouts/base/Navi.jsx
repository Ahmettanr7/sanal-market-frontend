import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  Dropdown,
  FormControl,
  Container,
} from "react-bootstrap";
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import CartService from "../../services/CartService";
import { SearchButton } from "../../Styles";

export default function Navi() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let cartService = new CartService();
    cartService
      .getAllByUserId(56)
      .then((result) => setCartItems(result.data.data));
  }, []);

  return (
    <div
      style={{ boxShadow: "5px", backgroundColor: "rgba(192, 192, 192, 0.1)" }}
    >
      <Container>
        <Navbar expand="lg">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Navbar.Brand href="/" className="p-4">
            TANNET SANAL MARKET
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Form className="d-flex w-25 ms-5">
            <FormControl
              type="search"
              placeholder="Ne Aramıştınız ? "
              aria-label="Search"
            />
            <SearchButton>Ara</SearchButton>
          </Form>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav.Item>
              <Button variant="light">
                <FaUserCircle size="30px" color="purple" />
                <span className="ms-2">Giriş Yap</span>
              </Button>
            </Nav.Item>
            <Nav.Item>|</Nav.Item>
            <Nav.Item>
              <Button variant="light">
                <FaUserPlus size="30px" color="purple" />
                <span className="ms-2">Kayıt Ol</span>
              </Button>
            </Nav.Item>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <TiShoppingCart size="30px" color="#666666" />
                <span className="mx-2">Siparişlerim</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {cartItems.map((item) => (
                  <Dropdown.Item key={item.id} href="">
                    {item.item.itemName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
