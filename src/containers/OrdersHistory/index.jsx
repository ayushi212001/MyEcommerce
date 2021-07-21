import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import CreateTableData from './components/CreateTableData';
import OrdersHistoryReactTable from './components/OrdersHistoryReactTable';

const OrdersHistoryTable = () => {
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Orders History</h3>
          {/* <h3 className="page-subhead subhead">All the transactions will be reflected withing 3-4 working days
          </h3> */}
        </Col>
      </Row>
      <Row>
        <OrdersHistoryReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default OrdersHistoryTable;
