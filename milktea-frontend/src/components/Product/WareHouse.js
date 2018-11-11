import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/product.action';
import * as actionmaterial from '../../actions/bills.action';

class WareHouse extends Component {
    constructor(props){
        super(props);
        this.state = {
            IDMaterial: '',
            count:'',
            price: null
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
     
    onChangeIDMaterial = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
            IDMaterial : value
        });
    }
    onChangecount = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
            count : value
        });
      }
    onChangeprice = (event) =>{
      var target = event.target;
      var value =  target.value;
      this.setState({
        price : value
      });
    }
      
    insertWareHouse = () =>{
        this.props.insertWareHouse(this.props.idproduct, this.state.IDMaterial, this.state.count, this.state.price)
    }
    componentWillMount(){
        this.props.getAllMeterial()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.meterial.code === 'ok'){
          this.setState({
            meterial: nextProps.meterial.data,
            haveData: true
          })
        }
      }

    showOption = () =>{
        let resuilt;
        if(this.state.haveData === true){
        resuilt = this.state.meterial.map((item, index) => {
            return(
                <option key={index} value={item.ID}>{item.Name}</option>
            )
            })
        }
        else{
        resuilt = <option></option>
        }
        return resuilt
    }
      
  render() {
    return (
      <div className="warehouse">
        <form>
            <div className="form-group">
                <label >Tên</label>
                <select className="form-control" onChange={this.onChangeIDMaterial}>
                    {this.showOption()}
                </select>
            </div>
            <div className="form-group">
                <label >Số lượng</label>
                <input type="text" className="form-control" onChange={this.onChangecount}  />
            </div>
            <div className="form-group">
                <label >Giá</label>
                <input type="text" className="form-control" onChange={this.onChangeprice}  />
            </div>
            <button className="btn btn-primary" onClick={()=>this.insertWareHouse()}>thêm</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
    return {
      meterial : state.meterial
    }
  }
  const mapDispatchToProps = (dispatch, props) =>{
    return{
        insertWareHouse : (idproduct, idmaterial, count, price)=>{
            dispatch(actions.actInsertWareHouse(idproduct, idmaterial, count, price));
        },
        getAllMeterial : () =>{
            dispatch(actionmaterial.actGetAllMeterial());
        },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(WareHouse);