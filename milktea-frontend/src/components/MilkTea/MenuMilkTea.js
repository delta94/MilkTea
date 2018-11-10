import React, { Component } from 'react';
import MilkTea from './MilkTea';
import * as actions from './../../actions/milktea.actions';
import * as actionbill from './../../actions/bills.action';
import {connect} from 'react-redux';

var findIndex = (tasks, id) =>{
  var result = -1;
  tasks.forEach((task,index)=>{
      if(task.ID === id){
          result = index;
      }
  });
  return result;
}

class MenuMilkTea extends Component {
  constructor(props){
    super(props);
    this.state = {
      milktea:{},
      haveData:false,
      milkteaDelete: {ID:null, Name: null, Picture: null},
      name: '',
      price: '',
      picture: null,
      listmilktea: [],
      totalprice:0,
      date: null,
      address: null,
      phone:null
    }
  }
  componentWillMount(){
    this.props.getAllMilkTea();
  }
  onChangeName = (event) =>{
    var target = event.target;
    var value =  target.value;
    this.setState({
      name : value
    });
  }
  onChangePrice = (event) =>{
      var target = event.target;
      var value =  target.value;
      this.setState({
        price : value
      });
  }
  onChangePhone = (event) =>{
    var target = event.target;
    var value =  target.value;
    this.setState({
      phone : value
    });
}
  onChangeAddress = (event) =>{
    var target = event.target;
    var value =  target.value;
    this.setState({
      address : value
    });
  }
  handleFileUpload = (event) =>{
    const file = event.target.files[0]
    // let reader = new FileReader();
    // reader.readAsDataURL(file[0])
    this.setState({
      picture : file
    });
    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.milktea.code === 'ok'){
      this.setState({
        milktea: nextProps.milktea.data,
        haveData: true
      })
    }
  }
  selectMilkTea = (value) =>{
    let index = findIndex(this.state.listmilktea, value.ID)
    if(index === -1){
      this.setState({
        listmilktea: [...this.state.listmilktea, value],
        totalprice : parseInt(value.price) * parseInt(value.count) + this.state.totalprice
      })
    }
    else{
      let oldcount = this.state.listmilktea[index].count
      this.setState({
        listmilktea: [...this.state.listmilktea.slice(0, index),
            {
              ...this.state.listmilktea[index],
              ['count']: value.count
            },
            ...this.state.listmilktea.slice(index + 1)
          ],
        totalprice: this.state.totalprice + (parseInt(value.count) - oldcount)*parseInt(value.price)
      })
    }
    
    console.log(this.state.listmilktea)
  }
  showMilkTea = () =>{
    let resuilt;
    if(this.state.haveData === true){
      resuilt = this.state.milktea.map((item, index) => {
          return(
            <MilkTea info={item} getIDDelete={this.getIDDelete} key={index} selectMilkTea={this.selectMilkTea}/>
          )
        })
    }
    else{
      resuilt = <div>Không có dữ liệu</div>
    }
    return resuilt
  }
  getIDDelete = (value) =>{
    this.setState({milkteaDelete: value});
  }
  DeleteMilkTea = () =>{
    this.props.deleteMilkTea(this.state.milkteaDelete.ID)
  }
  insertMilkTea = () =>{
    this.props.insertMilkTea(this.state.name,this.state.price,this.state.picture)
  }
  order = ()=>{
    this.props.insertBill(this.state.totalprice, this.state.date, this.state.address,this.state.phone, this.state.listmilktea)
  }
  render() {
    return (
    <div className="list-milk-tea">
      <div className="row">
        {
          this.showMilkTea()
        }
        <div className="milktea text-center">
          <div className="add-milktea">
              <i className="fa fa-plus add-milktea" data-target="#insertMilktea" data-toggle="modal"></i>
          </div>
        </div>
        <div className="modal fade" id="deleteMilktea" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Bạn có chắc muốn xóa trà sữa này</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="card-milktea">
                  <img className="card_img card-img-top" src={this.state.milkteaDelete.Picture} alt="Card image cap" />
                  <div className="card_img card-body">
                      <h5 className="card-title">{this.state.milkteaDelete.Name}</h5>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal"
                   onClick={this.DeleteMilkTea}>Có</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="insertMilktea" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thêm trà sữa mới</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <input className="form-control"  onChange={this.onChangeName} />
                  <input className="form-control" onChange={this.onChangePrice} />
                  <input type="file" className="form-control" onChange={this.handleFileUpload}/>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal"
                   onClick={()=>this.insertMilkTea()}>Thêm</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        
      </div>
      <div className="Order container">
          <div>
              <h5>Tổng tiền hóa đơn của bạn là: {this.state.totalprice}</h5>
          </div>
          <div className="form-group">
            <label >Nhập địa chỉ giao hàng</label>
            <input className="form-control" onChange={this.onChangeAddress} />
          </div>
          <div className="form-group">
            <label >Nhập số điện thoại</label>
            <input className="form-control" onChange={this.onChangePhone} />
          </div>
          <button className="btn btn-primary" onClick={() => this.order()}>Đặt hàng</button>
      </div>
    </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    user : state.user,
    milktea : state.milktea
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return{
      getAllMilkTea : ()=>{
          dispatch(actions.actGetAllMilkTea());
      },
      insertMilkTea : (name,price,picture)=>{
          dispatch(actions.actInsertMilkTea(name,price,picture));
      },
      updateMilkTea : (id,name,price,picture)=>{
          dispatch(actions.actUpdateMilkTea(id,name,price,picture));
      },
      deleteMilkTea : (id)=>{
          dispatch(actions.actDeleteMilkTea(id));
      },
      insertBill : (total,date,address,phone,listmilktea)=>{
        dispatch(actionbill.actInsertBill(total,date,address,phone,listmilktea));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuMilkTea);