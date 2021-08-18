import React, { useState, useEffect } from "react";
import { CardBox, IconBox } from "../../Styles";
import CategoryService from "../../services/CategoryService";
import { Container } from "../../Styles";
import { ReactComponent as AddIcon } from "../../assets/eye.svg";
import { Button, Offcanvas } from "react-bootstrap";

export default function Card() {
  const icon = [<AddIcon />];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAll().then((result) => setCategories(result.data.data));
  }, []);

  const CardVariants = {
    beforeHover: {},
    onHover: {
      scale: 1.1,
    },
  };

  const IconVariants = {
    beforeHover: {
      opacity: 0,
      y: -50,
    },
    onHover: {
      opacity: 1,
      y: 0,
      scale: 1.5,
      transition: {
        type: "tween",
      },
    },
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ width: "100%", marginTop: "25px" }}
        variant="primary"
        onClick={handleShow}
      >
        KATEGORİLERİ GÖSTER
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>KATEGORİLER</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ border: "2px solid #f5f5f5", borderRadius: "10px" }}>
            <a
              href="#"
              style={{ textDecorationLine: "none", textDecoration: "none" }}
            >
              <Container initial={{ x: -1000 }} animate={{ x: 0 }}>
                {categories.map((category) => (
                  <CardBox
                    key={category.id}
                    style={{ backgroundImage: `url("${category.imageUrl}")` }}
                    variants={CardVariants}
                    initial="beforeHover"
                    whileHover="onHover"
                  >
                    <h5
                      className="text-center bg-dark"
                      style={{ color: "white", bottom: "0" }}
                    >
                      {category.categoryName}
                    </h5>
                    <IconBox variants={IconVariants}>{icon}</IconBox>
                  </CardBox>
                ))}
              </Container>
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
