import React from 'react';
import {
  Card, CardBody, Col, Table,
} from 'reactstrap';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import OrdersPurchase from './OrdersPurchase';

import ordersList from './orders_list';

const OrdersDetailsCard = () => (
  <Col md={12} lg={12}>
    <Card className="cart">
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Details</h5>
        </div>
        <Table className="table--bordered cart__table" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Order Id</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Total</th>
              <th aria-label="cart table" />
            </tr>
          </thead>
          <tbody>
            {ordersList.map((ct, i) => (
              <tr key={`index_${ct.title}`}>
                <td>{i + 1}</td>
                <td>
                  <span className="cart__preview-img">
                    <img src={ct.img} alt="product_preview" />
                  </span>
                  <span style={{ marginLeft: '4rem' }}>{ct.title}</span>
                </td>
                <td>{ct.order_id}</td>
                <td>{ct.date}</td>
                <td>{ct.quantity}</td>
                <td>{ct.price.toFixed(2)}</td>
                <td>{ct.total.toFixed(2)}</td>
                <td>
                  <button className="cart__table-btn" type="button">
                    <DeleteForeverIcon />&nbsp;&nbsp;&nbsp;&nbsp;Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h5 className="cart__sub-total">Sub-total: ₹328.00</h5>
        <OrdersPurchase onSubmit />
      </CardBody>
    </Card>
  </Col>
);

export default OrdersDetailsCard;
