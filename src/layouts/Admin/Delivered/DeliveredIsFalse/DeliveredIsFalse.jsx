import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import OrderService from '../../../../services/OrderService';
import { useToasts } from "react-toast-notifications";

export default function DeliveredIsFalse() {

    const { addToast } = useToasts();

    const [orders, setOrders] = useState([]);

    let orderService = new OrderService();

    useEffect(() => {
      orderService.getByIsDeliveredIsFalse().then((result) => setOrders(result.data.data));
    }, []);

    let wasDelivered = (id) => {
        orderService.wasDelivered(id).then((result) => {
          addToast(result.data.message, {
            appearance: result.data.success ? "success" : "error",
            autoDismiss: true,
          });
        });
      };

    return (
        <div
        style={{
          marginLeft:"-50px",
          marginTop:"25px"  
        }}
        >
            <Table
            striped  hover variant="dark">
  <thead>
    <tr>
      <th>Id</th>
      <th>Müşteri Id</th>
      <th>Müşteri Ad-Soyad</th>
      <th>Sipariş Tarihi</th>
      <th>Sipariş Tutarı</th>
      <th>Sipariş Adresi</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {orders.map((order, index) => (
    <tr key={index}>
      <td>{order.id}</td>
      <td>{order.user.id}</td>
      <td>{order.user.nameSurname}</td>
      <td>{order.date}</td>
      <td>{order.totalPrice} ₺ </td>
      <td>{order.address.addressText}</td>
      <td>
        <Button
        onClick={() => wasDelivered(order.id)}
        variant="success">Gönderildi</Button>
      </td>
    </tr>
    ))}
  </tbody>
</Table>
        </div>
    )
}
