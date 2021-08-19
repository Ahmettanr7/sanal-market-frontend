import React, { useState, useEffect } from "react";
import { Card, Button, Pagination } from "react-bootstrap";
import { useParams } from "react-router";
import ItemService from "../../services/ItemService";

export default function ItemList() {

  let { id } = useParams();


  const [items, setItems] = useState([]);
  const [totalItem, setTotalItem] = useState([]);

  useEffect(() => {
    let itemService = new ItemService();
    itemService
      .getByCategory(id, pageNo, pageSize)
      .then((result) => setItems(result.data.data));
  }, []);

  useEffect(() => {
    let itemService = new ItemService();
    itemService.getAllCategory1Id(id).then((result) => setTotalItem(result.data.data));
  }, []);



  const [pageNo, setActivePage] = useState(1);



  const [pageSize, setPageSize] = useState(63);
  const totalPages = Math.ceil(totalItem.length / pageSize);

  const first = () => setActivePage(1);
  const prev = () => setActivePage(pageNo - 1);
  const next = () => setActivePage(pageNo + 1);
  const last = () => setActivePage(totalPages);

  return (
    <div>
      {items.map((item) => (
        <Card
          key={item.id}
          style={{
            width: "18rem",
            display: "inline-block",
            margin: "20px",
            padding: "10px",
          }}
        >
          <Card.Img variant="top" src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.itemName}</Card.Title>
            <Button variant="primary">Sepete ekle</Button>
          </Card.Body>
        </Card>
      ))}
      <Pagination style={{marginLeft:"35%"}} size="lg">
        <Pagination.First onClick={first} disabled={pageNo === 1}/>
        <Pagination.Prev onClick={prev} disabled={pageNo === 1}/>
        <Pagination.Item>{pageNo} | {totalPages}</Pagination.Item>
        <Pagination.Next onClick={next} disabled={pageNo === totalPages}/>
        <Pagination.Last onClick={last} disabled={pageNo === totalPages}/>
      </Pagination>
    </div>
  );
}
