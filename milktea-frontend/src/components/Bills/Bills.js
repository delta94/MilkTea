import React, { Component } from 'react';
import * as actionbill from './../../actions/bills.action';
import {connect} from 'react-redux';
import DetailBill from './DetailBill';

class Bills extends Component {
  constructor(props){
    super(props);
    this.state = {
      bill:{},
      haveData:false,
      infobill: {}
    }
  }
  componentWillMount(){
    this.props.getBill();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.bill.code === 'ok'){
      this.setState({
        bill: nextProps.bill.data,
        haveData: true
      })
    }
  }
  getDetail = (item) =>{
    this.props.actGetDetailBill(item.ID)
    this.setState({
      infobill : item,
    })
  }
  showBill = () =>{
    let resuilt;
    console.log()
    if(this.state.haveData === true){
      resuilt = this.state.bill.map((item, index) => {
          return(
            <div key={index}>
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="./img/bill.png" alt="Hóa đơn" />
                <div className="card-body">
                  <h5 className="card-title">Hóa đơn số {item.ID}</h5>
                  <p className="card-text">Tổng tiền: {item.Price_total}</p>
                  <button data-toggle="modal" data-target="#detailbill" onClick={() => this.getDetail(item)} className="btn btn-primary">Xem chi tiết</button>
                </div>
              </div>
            </div>
          )
        })
    }
    else{
      resuilt = <div>Không có dữ liệu</div>
    }
    return resuilt
  }
  render() {
    return (
      <div className="Bill">
        <div className="row">
        {
          this.showBill()
        }
        </div>
        <div className="modal fade" id="detailbill" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Chi tiết hóa đơn</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <DetailBill data={this.state.infobill} />
              </div>
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
    bill : state.bill
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return{
    getBill : ()=>{
      dispatch(actionbill.actGetBill());
    },
    actGetDetailBill : (id)=>{
      dispatch(actionbill.actGetDetailBill(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bills);