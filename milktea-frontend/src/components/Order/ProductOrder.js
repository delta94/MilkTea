import React, { Component } from 'react';

class ProductOrder extends Component {
  render() {
    return (
      <div className="ProductOrder">
        <div className="bill_content">
            <div className="img">
              <img src="./img/m3.jpg" />
            </div>
            <div className="text_img text-left">
              <h5>Trà sữa nhà làm</h5>
              <p>Giá:25 000vnd</p>
              <p>Số lượng:5</p>
            </div>
          </div>
      </div>
    );
  }
}

export default ProductOrder;