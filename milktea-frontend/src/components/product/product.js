import React, { Component } from 'react';
import {connect} from 'react-redux';
import WareHouse from './WareHouse'
import * as actions from '../../actions/product.action';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            product : {},
            haveData: false,
            isAdd:false,
            Name: '',
            Address: '',
            Phone:'',
            ID: null,
            idproduct: null
        }
    }
    componentWillMount(){
        this.props.getAllProduct();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.product.code === 'ok'){
          this.setState({
            product: nextProps.product.data,
            haveData: true
          })
        }
      }
      onChangeName = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
          Name : value
        });
    }
    onChangePhone = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
            Phone : value
        });
    }
    onChangeAddress = (event) =>{
      var target = event.target;
      var value =  target.value;
      this.setState({
        Address : value
      });
    }
      showProduct = () =>{
        let resuilt;
        if(this.state.haveData === true){
          resuilt = this.state.product.map((item, index) => {
              return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{item.Name}</td>
                    <td>{item.Phone}</td>
                    <td>{item.Address}</td>
                    <td>
                        <button className="btn btn-warning" onClick={()=>this.edit(item)}>Sửa</button>
                        <button className="btn btn-danger" data-target="#deleteProduct" data-toggle="modal"
                         onClick={()=>this.setState({ID : item.ID})}>xóa</button>
                         <button className="btn btn-danger" data-target="#insertWarehouse" data-toggle="modal"
                         onClick={()=>this.setState({idproduct : item.ID})}>Nhập hàng</button>
                    </td>
                </tr>
              )
            })
        }
        else{
          resuilt = <tr></tr>
        }
        return resuilt
      }
      edit = (item) =>{
        this.setState({
            isAdd : true,
            ID : item.ID,
            Name : item.Name,
            Phone : item.Phone,
            Address : item.Address
        })
      }
      classTable = () =>{
          if(this.state.isAdd === true){
                return 'table table-striped col-md-8'
          }
          else{
                return 'table table-striped col-md-12'
          }
      }
      showForm = () =>{
          if(this.state.isAdd === true){
              return (
                  <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <label >Tên</label>
                            <input type="text" className="form-control" value={this.state.Name} onChange={this.onChangeName} />
                        </div>
                        <div className="form-group">
                            <label >Số điện thoại</label>
                            <input type="text" className="form-control" value={this.state.Phone} onChange={this.onChangePhone}  />
                        </div>
                        <div className="form-group">
                            <label >Địa chỉ</label>
                            <input type="text" className="form-control" value={this.state.Address} onChange={this.onChangeAddress}  />
                        </div>
                        <button className="btn btn-primary" onClick={()=>this.insertProduct()}>thêm</button>
                    </form>

                  </div>
              )
          }
          else{
              <div></div>
          }
      }
      insertProduct = () =>{
          if(this.state.ID === null){
            this.props.insertProduct(this.state.Name, this.state.Address, this.state.Phone)
          }
          else{
            this.props.updateProduct(this.state.ID,this.state.Name, this.state.Address, this.state.Phone)
          }
      }
      deleteProduct = () =>{
        this.props.deleteProduct(this.state.ID)
    }
  render() {
    return (
      <div className="product">
        <div className="row">
            <table className={this.classTable()}>
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên nhà cung cấp</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Địa chỉ</th>
                        <th><button className="btn btn-success" onClick={()=>this.setState({isAdd : !this.state.isAdd, ID : null})}>Thêm</button></th>
                    </tr>
                </thead>
                <tbody>
                    {this.showProduct()}
                </tbody>
            </table>
            {this.showForm()}
        </div>
        <div className="modal fade" id="deleteProduct" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Bạn có chắc muốn xóa nhà cung cấp này</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal"
                   onClick={this.deleteProduct}>Có</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="insertWarehouse" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thêm nguyên liệu</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <WareHouse idproduct={this.state.idproduct} ></WareHouse>
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
      product : state.product
    }
  }
  const mapDispatchToProps = (dispatch, props) =>{
    return{
        getAllProduct : ()=>{
            dispatch(actions.actGetAllProduct());
        },
        insertProduct : (name, address, phone)=>{
            dispatch(actions.actInsertProduct(name, address, phone));
        },
        deleteProduct : (id)=>{
            dispatch(actions.actDeleteProduct(id));
        },
        updateProduct : (id,name,price,count)=>{
            dispatch(actions.actUpdateProduct(id,name,price,count));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Product);