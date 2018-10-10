import React, { Component } from 'react';
import ProductOrder from './ProductOrder';
import MilkTea from './../MilkTea/MilkTea';

class Order extends Component {
  render() {
    return (
      <div className="bill">
        <div className="row">
        <div className="col-md-5 bill-milk-tea">
          <h3>Đơn đặt hàng của bạn</h3>
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
        <div className="col-md-7">
          <h3>Có thể bạn sẽ thích</h3>
          <MilkTea />
        </div>
          
        </div>
      </div>

    );
  }
}

export default Order;