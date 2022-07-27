import React from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";
import { GiMagnifyingGlass } from "react-icons/gi";

const UserOrders = () => {
  const { orders } = useSelector((state) => state.users.currentUser);

  return (
    <Container>
      <Row>
        <h4>User Orders</h4>
        {!orders?.length && <h5>No orders created yet.</h5>}
      </Row>
      <Row>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Order ID</th>
              <th className="d-none d-lg-table-cell">Date</th>
              <th>Check Order</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order.id}>
                <td>{order._id}</td>
                <td className="d-none d-lg-table-cell">
                  {formatDate(order.createdAt)}
                </td>
                <td className="d-flex justify-content-around align-items-center">
                  <Button
                    className="w-100"
                    size="sm"
                    variant="warning"
                    as={Link}
                    to={`/orders/${order._id}`}
                  >
                    <GiMagnifyingGlass />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default UserOrders;
