import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  Dropdown,
  Container,
  FormControl,
} from "react-bootstrap";
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import CartService from "../../services/CartService";
import { SearchButton, Buttonn } from "../../Styles";
import { Formik, useFormik } from "formik";

export default function Navi() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let cartService = new CartService();
    cartService
      .getActiveCartItems(56)
      .then((result) => setCartItems(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      itemName: "",
    },
    onSubmit: (values) => {
      window.location.href = `/search/${values.itemName}`;
    },
  });

  let total = 0;

  function totall(count, price) {
    total = count * price;
  }

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
          <Formik>
            <Form onSubmit={formik.handleSubmit} className="d-flex w-25 ms-5">
              <FormControl
                type="search"
                name="itemName"
                placeholder="Ne Aramıştınız ? "
                aria-label="Search"
                normalize={(value) => (value || "").toLocaleLowerCase()}
                value={formik.values.itemName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <SearchButton type="submit">Ara</SearchButton>
            </Form>
          </Formik>

          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav.Item>
              <Button variant="light">
                <FaUserCircle size="30px" color="purple" />
                <span className="ms-2">Giriş Yap</span>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="light">
                <FaUserPlus size="30px" color="purple" />
                <span className="ms-2">Kayıt Ol</span>
              </Button>
            </Nav.Item>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <TiShoppingCart size="30px" color="#666666" />
                <span className="mx-2">Siparişlerim {cartItems.length}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {cartItems.map((item) => (
                  <Dropdown.Item key={item.id} href="">
                    {item.itemName}
                    <div className="divider" />
                    {item.unitPrice} TL x {item.totalCount}
                    {item.category1 === 2 ||
                    item.category1 === 6 ||
                    item.category1 === 12 ||
                    item.category1 === 18 ? (
                      <Buttonn>Kg.</Buttonn>
                    ) : (
                      <Buttonn>Ad.</Buttonn>
                    )}
                    =
                    <span className="ms-1">
                       {item.unitPrice * item.totalCount} TL
                    </span>
                   <Button variant="secondary" className="sm lg">-1</Button>
                   <Button  variant="danger">X</Button>
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider/>
                <Dropdown.Item>Sepet Toplamı = {total}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
