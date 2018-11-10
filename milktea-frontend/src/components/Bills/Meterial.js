import React, { Component } from 'react';
import * as actions from './../../actions/bills.action';
import {connect} from 'react-redux';

var findIndex = (tasks, id) =>{
  var result = -1;
  tasks.forEach((task,index)=>{
      if(task.ID.toString() === id){
          result = index;
      }
  });
  return result;
}

class Meterial extends Component {
  constructor(props){
    super(props);
    this.state = {
        meterial : {},
        haveData : false,
        Name: '',
        Price: '',
        Count: 0,
        idDelete: '',
        idselect: ''
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
      Price : value
    });
}
onChangeCount = (event) =>{
  var target = event.target;
  var value =  target.value;
  this.setState({
    Count : value
  });
}
onSelect = (event)=>{
    var target = event.target;
    var value =  target.value;
    let index = findIndex(this.state.meterial, value)
    this.setState({
      idselect : value,
      Name : this.state.meterial[index].Name,
      Price : this.state.meterial[index].Price,
      Count: this.state.meterial[index].Count,
    });
}
  componentWillMount(){
    this.props.getAllMeterial();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.meterial.code === 'ok'){
      this.setState({
        meterial: nextProps.meterial.data,
        haveData: true
      })
    }
  }
  Add_Material = () =>{
    this.props.Add_Material(this.state.Name, parseInt(this.state.Price), this.state.Count)
  }
  Delete_Material = (value) =>{
    this.setState({
      idDelete : value
    });
  }
  DeleteOK = () =>{
    this.props.Delete_Material(this.state.idDelete)
  }
  Update_Material = () =>{
    if(this.state.Name === '' && this.state.Price === '' && this.state.Count === '')
    this.props.Update_Material(this.state.idselect,this.state.Name, parseInt(this.state.Price), this.state.Count)
  }
  showMeterial = () =>{
    let resuilt;
    if(this.state.haveData === true){
      resuilt = this.state.meterial.map((item, index) => {
          return(
            <div className="material_content" key={index}>
              <p>Nguyên liệu: {item.Name}</p>
              <p>Số lượng: {item.Count}</p>
              <button className="btn btn-danger" data-toggle="modal" 
                data-target="#delete" onClick={()=>this.Delete_Material(item.ID)}>xóa</button>
            </div>
          )
        })
    }
    else{
      resuilt = <div>Không có dữ liệu</div>
    }
    return resuilt
  }
  selectMaterial = () =>{
    let resuilt;
    if(this.state.haveData === true){
      resuilt = this.state.meterial.map((item,index) => {
          return(
            <option key={index} value={item.ID}>{item.Name}</option>
          )
        })
    }
    else{
      resuilt = <option ></option>
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
        <select className="choice" onChange={this.onSelect}>
          {
            this.selectMaterial()
          }
        </select>
        <button type="button" className="btn_add btn btn-primary ml-3" data-toggle="modal" data-target="#myModal">
          <i className="icon_add_material fa fa-plus" />
        </button>
      </div>
      <div className="material_iteam mb-3">
        <label>Tên:   </label>
        <input type="text" value={this.state.Name} onChange={this.onChangeName} />
      </div>
      <div className="material_iteam mb-3">
        <label>Giá:   </label>
        <input type="text" value={this.state.Price} onChange={this.onChangePrice} />
      </div>
      <div className="material_iteam">
        <span>Số lượng:</span>
        <input className="txt_add" type="text" value={this.state.Count} onChange={this.onChangeCount} />
        <button className="btn_material btn-danger" type="button" data-toggle="modal" data-target="#myModal" onClick={this.Update_Material}>Sửa</button>
      </div>
    </form>
  </div>
</div>
      <div>
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
              <div className="add_footer modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.Add_Material}>Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form_add modal" id="delete">
          <div className=" modal-dialog">
            <div className="form_add_material modal-content">
              <h3>Bạn có chắc muốn xóa nguyên liệu này</h3>
              <div className="modal-footer">
                <div className="col-md-6">
                  <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() =>this.DeleteOK()}>Có</button>
                </div>
                <div className="col-md-6">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">Không</button>
                </div>
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
    },
    Delete_Material : (id)=>{
      dispatch(actions.actDeleteMeterial(id));
    },
    Update_Material : (id,name,price,count)=>{
      dispatch(actions.actUpdateMeterial(id,name,price,count));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Meterial);