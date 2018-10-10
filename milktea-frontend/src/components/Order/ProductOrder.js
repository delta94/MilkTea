import React, { Component } from 'react';

class ProductOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
        isSelect : false,
        count: 1
    }
  }
  up = () =>{
    this.setState({
        count : this.state.count + 1
    })
}
down = () =>{
    if(this.state.count > 1)
    {
        this.setState({
            count : this.state.count - 1
        })
    }
}
  render() {
    return (
      <div className="ProductOrder ">
        <div className="bill_content row">
          <div className="col-md-10 row">
            <div className="img col-md-5">
              <img src="./img/m3.jpg" />
            </div>
            <div className="text_img text-left col-md-7">
              <h5>Trà sữa nhà làm</h5>
              <p>Giá:  25 000 VNĐ</p>
              <p>Số lượng:  5</p>
            </div>
          </div>
          <div className="col-md-2">
          <div className="icon_card btn-group-vertical" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary"><i className="fas fa-minus" onClick={() => this.down()} /></button>
              <button type="button" className="btn btn-primary">{this.state.count}</button>
              <button type="button" className="btn btn-primary"><i className="fas fa-plus" onClick={() => this.up()} /></button>
              <button type="button" className="btn btn-danger" >Hủy</button>
          </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default ProductOrder;