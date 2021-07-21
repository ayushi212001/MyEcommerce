import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import CreateTableData from './components/CreateTableData';
import ReturnsReactTable from './components/ReturnsReactTable';

const ReturnsTable = () => {
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Returns</h3>
          {/* <h3 className="page-subhead subhead">All the transactions will be reflected withing 3-4 working days
          </h3> */}
        </Col>
      </Row>
      <Row>
        <ReturnsReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default ReturnsTable;
