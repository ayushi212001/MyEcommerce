import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import CreateTableData from './components/CreateTableData';
import TransactionReactTable from './components/TransactionReactTable';

const TransactionTable = () => {
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Transactions</h3>
          <h3 className="page-subhead subhead">All the transactions will be reflected withing 3-4 working days
          </h3>
        </Col>
      </Row>
      <Row>
        <TransactionReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default TransactionTable;
