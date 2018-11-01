import React, { Component } from 'react';
import MilkTea from './MilkTea';
import {connect} from 'react-redux';
import * as actions from './../../actions/milktea.actions';

class MenuMilkTea extends Component {
  constructor(props){
    super(props);
    this.state = {
      milktea:{},
      haveData:false,
      milkteaDelete: {ID:null, Name: null, Picture: null},
      name: '',
      price: '',
      picture:''
    }
  }
  componentWillMount(){
    this.props.getAllMilkTea();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.milktea.code === 'ok'){
      this.setState({
        milktea: nextProps.milktea.data,
        haveData: true
      })
    }
  }
  showMilkTea = () =>{
    let resuilt;
    if(this.state.haveData === true){
      resuilt = this.state.milktea.map((item, index) => {
          return(
            <MilkTea info={item} getIDDelete={this.getIDDelete} key={index}/>
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
  render() {
    return (
      <div className="list-milk-tea row">
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
                  <input className="form-control" value={this.state.name} />
                  <input className="form-control" value={this.state.price} />
                  <input name="foo" type="file" />
                  <button className="btn btn-primary">Thêm</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal"
                   onClick={this.props.insertMilkTea(this.state.name,this.state.price,this.state.picture)}>Thêm</button>
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
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuMilkTea);