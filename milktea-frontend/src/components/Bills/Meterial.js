import React, { Component } from 'react';
import * as actions from './../../actions/bills.action';
import {connect} from 'react-redux';

class Meterial extends Component {
  constructor(props){
    super(props);
    this.state = {
        meterial : {},
        haveData : false,
        Name: '',
        Price: '',
        Count: 0
    }
  }
  onChangeName = (event) =>{
    var target = event.target;
    var value =  target.value;
    this.setState({
      Name : value
    });
}
onChangePrice = (event) =>{
    var target = event.target;
    var value =  target.value;
    this.setState({
      paPricess : value
    });
}
  componentWillMount(){
    this.props.getAllMeterial();
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if(nextProps.meterial.code === 'ok'){
      this.setState({
        meterial: nextProps.meterial.data,
        haveData: true
      })
    }
    this.showMeterial()
  }
  Add_Material = () =>{
    this.props.Add_Material(this.state.Name, parseInt(this.state.Price), this.state.Count)
  }
  showMeterial = () =>{
    let resuilt;
    console.log(this.state.meterial)
    if(this.state.haveData === true){
      resuilt = this.state.meterial.map((item, index) => {
          return(
            <div className="material_content" key={index}>
              <p>Nguyên liệu: {item.Name}</p>
              <p>Số lượng: {item.Count}</p>
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
      <div className="SubHeader">
        <div className="material">
  <div className="group_material container">
    <div className="group row">
    {
        this.showMeterial()
    }
    </div>
  </div>
  <div className="detail_material mt-5">
    <form name="#" value="#" method="POST">
      <div className="material_iteam mb-3">
        <label className="txt">Tên nguyên liệu:</label>
        <select className="choice">
          <option />
          <option>Trân châu đen</option>
          <option>Trân châu trắng</option>
          <option>Thạch củ năng</option>
          <option>Thạch bảy màu</option>
          <option>Thạch phô mai</option>
          <option>Đường đen</option>
        </select>
        <button type="button" className="btn_add btn btn-primary ml-3" data-toggle="modal" data-target="#myModal">
          <i className="icon_add_material fa fa-plus" />
        </button>
        {/* The Modal */}
        <div className="form_add modal" id="myModal">
          <div className="add_iteam modal-dialog">
            <div className="form_add_material modal-content">
              <h6>Thêm nguyên liệu</h6>
              <div className="add_content">
                <label className="txt">Tên nguyên liệu:</label>
                <input type="text" name="#" onChange={this.onChangeName} />
              </div>
              <div className="add_content">
                <label className="txt">Giá:</label>
                <input className="price_content" type="text" name="#" onChange={this.onChangePrice} />
              </div>
              {/* Modal footer */}
              <div className="add_footer modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.Add_Material}>Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="material_iteam mb-3">
        <label>Tên nhà cung cấp: </label>
        <select className="choice">
          <option />
          <option>Thảo Nguyên</option>
          <option>BoBapop</option>
          <option>Phúc Long </option>
          <option>Royal</option>
          <option>ShareTea</option>
        </select>
      </div>
      <div className="material_iteam">
        <span>Số lượng:</span>
        <input className="txt_add" type="text" name="#" defaultValue />
        <button className="btn_material btn-danger" type="button">Thêm</button>
      </div>
    </form>
  </div>
</div>

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
    getAllMeterial : () =>{
      dispatch(actions.actGetAllMeterial());
    },
    Add_Material : (name,price,count) =>{
      dispatch(actions.actInsertMeterial(name,price,count));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Meterial);