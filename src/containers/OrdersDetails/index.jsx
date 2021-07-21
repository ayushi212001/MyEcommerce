import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import OrdersDetailsCard from './components/OrdersDetailsCard';

const OrdersDetails = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Order Details</h3>
        <h3 className="page-subhead subhead">choose payment method and complete your purchase
        </h3>
      </Col>
    </Row>
    <Row>
      <OrdersDetailsCard />
    </Row>
  </Container>
);

export default OrdersDetails;
