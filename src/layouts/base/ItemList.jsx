import React, { useState, useEffect } from "react";
import { Card, Button, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemService from "../../services/ItemService";

export default function ItemList() {
  let cat1Id = 2;

  const [items, setItems] = useState([]);
  const [totalItem, setTotalItem] = useState([]);

  useEffect(() => {
    let itemService = new ItemService();
    itemService
      .getByCategory(cat1Id, pageNo, pageSize)
      .then((result) => setItems(result.data.data));
  }, []);

  useEffect(() => {
    let itemService = new ItemService();
    itemService.getAll().then((result) => setTotalItem(result.data.data));
  }, []);

  const [pageNo, setActivePage] = useState(1);
  const handlePaginationChange = (e, { activePage }) =>
    setActivePage(activePage);

  const [pageSize, setPageSize] = useState(33);
  const totalPages = Math.ceil(totalItem.length / pageSize);

  let FirstPage = (pageNo) => {
    pageNo=1
  }
  let PrevPage = (pageNo) => {
    pageNo=pageNo-1
  }
  let NextPage = (pageNo) => {
    pageNo++
  }
  let LastPage = (pageNo) => {
    pageNo=totalPages
  }

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
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{item.itemName}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}

      <Pagination style={{marginLeft:"35%"}} size="lg">
        <Pagination.First onClick={FirstPage} />
        <Pagination.Prev onClick={PrevPage}/>
        <Pagination.Item>{pageNo}</Pagination.Item>
        <Pagination.Next onClick={NextPage}/>
        <Pagination.Last onClick={LastPage}/>
      </Pagination>

      {/* <Pagination
        className="mt-4"
        activePage={pageNo}
        onPageChange={handlePaginationChange}
        totalPages={totalPages}
        ellipsisItem={null}
        pointing
        secondary
      /> */}
    </div>
  );
}
