import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  Container,
  FormControl,
  ListGroup,
  Image,
} from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillLeftCircle } from "react-icons/ai";
import CartService from "../../services/CartService";
import { SearchButton, Buttonn } from "../../Styles";
import { Formik, useFormik } from "formik";
import { Offcanvas } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import Signedin from "./SignedIn";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";

export default function Navi() {
  const { addToast } = useToasts();
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let remove = (itemId) => {
    let cartService = new CartService();
    cartService.delete(56,itemId).then((result) => {
      addToast(result.data.message, {
        appearance: result.data.success ? "success" : "error",
        autoDismiss: true,
      });
    });
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useHistory();

  function handlerSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handlerSignIn() {
    setIsAuthenticated(true);
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
            
          {isAuthenticated ? (
                <SignedIn signOut={handlerSignOut} />
              ) : (
                <SignOut signIn={handlerSignIn} />
              )}

            <Nav.Item>
              <Button className="m-3" variant="light" onClick={handleShow}>
                <TiShoppingCart size="30px" color="#666666" />
                <span className="mx-2">
                  Sipariş Listesi
                  <span className="m-2" style={{color:"purple"}}><b>{cartItems.length}</b></span>
                  <AiFillLeftCircle className="ms-2" color="#666666" />
                </span>
              </Button>
              <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <TiShoppingCart
                      className="m-2"
                      size="40px"
                      color="#666666"
                    />
                    Sipariş Listem
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ListGroup>
                    {cartItems.map((item) => (
                      <ListGroup.Item action key={item.itemId}>
                        <div className="d-flex justify-content-end">
                          <Buttonn
                          onClick={() => remove(item.itemId)}
                          >x</Buttonn>
                        </div>
                        <div className="d-flex justify-content-center">
                          <Image
                            style={{ height: "50px" }}
                            variant="top"
                            src="https://davutsahin.net/wp-content/uploads/2020/10/gorsel-hazirlaniyor-600x400-1-375x195.png"
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          {item.itemName}
                        </div>
                        <div className="d-flex justify-content-center">
                          {item.unitPrice} ₺ x {item.totalCount}
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
                            <b> {item.unitPrice * item.totalCount} ₺ </b>
                          </span>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <div className="d-flex justify-content-center">
                    <span className="m-5">
                      Toplam : <span style={{ color: "blue" }}> 65 ₺ </span>
                    </span>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button>Alışverişi Tamamla</Button>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
