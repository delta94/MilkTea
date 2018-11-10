import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions/milktea.actions';

class DetailBill extends Component {
constructor(props){
    super(props);
    this.state = {

    }
}
showOrder = () =>{
    let resuilt;
    if(this.props.detailbill.data !== undefined){
      resuilt = this.props.detailbill.data.map((item, index) => {
          return(
            <tr key={index}>
                <td>1</td>
                <td><img src={item.Picture} style={{width: 100}} /></td>
                <td>{item.Name}</td>
                <td>{item.Count}</td>
            </tr>
          )
        })
    }
    else{
      resuilt = <tr></tr>
    }
    return resuilt
}
  render() {
      console.log(this.props.detailbill)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mx-auto display:inline">
                <h1 className="text-center mb-4">Danh sách chi tiết hóa đơn </h1>
                <form className="form-group col-md-12 mt-5">
                    <h2 style={{color: 'coral'}}>Danh sách hóa đơn</h2>
                    <div className="all">
                    <div className="content">
                        <label style={{fontSize: 25}}>Tổng giá: </label>
                        <label style={{fontSize: 25}}>{this.props.data.Price_total}</label>
                    </div> 
                    <div className="content">
                        <label style={{fontSize: 25}}>Ngày: </label>
                        <label style={{fontSize: 25}}>{this.props.data.Date}</label>
                    </div> 
                    <div className="content">
                        <label style={{fontSize: 25}}>Địa chỉ: </label>
                        <label style={{fontSize: 25}}>{this.props.data.Address}</label>
                    </div> 
                    <div className="content">
                        <label style={{fontSize: 25}}>Số ĐT: </label>
                        <label style={{fontSize: 25}}>{this.props.data.Phone}</label>
                    </div> 
                    </div>
                </form>
                <h2 style={{color: 'coral'}}>Danh sách trà sữa</h2>
                <div className="material mt-4 p-2" style={{color: 'black', background: 'coral'}}>
                    <table className="table">
                    <thead> 
                        <tr><th>STT</th>
                        <th>Hình ảnh</th>
                        <th>Tên trà sữa</th>
                        <th>Số lượng</th>
                        </tr></thead>
                    <tbody id="tbody">
                        {this.showOrder()}
                    </tbody>
                    </table> 
                </div>
                </div>
            </div>
            </div>


    );
  }
}
const mapStateToProps = (state) =>{
    return {
      user : state.user,
      detailbill : state.detailbill
    }
  }

export default connect(mapStateToProps, null)(DetailBill);