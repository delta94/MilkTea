import React, { Component } from 'react';
import ProductOrder from './ProductOrder';

class Order extends Component {
  render() {
    return (
      <div className="bill">
        <div className="content">
          <ProductOrder />
          <ProductOrder />
          <ProductOrder />
          <ProductOrder />
          <div className="col_total mt-4 ">
            <div className="text_content">
              <h3>Tổng tiền:</h3>
              <button className="btn btn-success mt-2" type="button">Giao hàng</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Order;