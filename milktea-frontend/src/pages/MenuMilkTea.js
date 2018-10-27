import React, { Component } from 'react';
import MilkTea from './../components/MilkTea/MilkTea';
import {connect} from 'react-redux';
import * as actions from './../actions/milktea.actions';

class MenuMilkTea extends Component {
  constructor(props){
    super(props);
    this.state = {
      milktea:{},
      haveData:false,
      idDelete: null
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
    this.setState({idDelete: value});
  }
  DeleteMilkTea = () =>{
    this.props.deleteMilkTea(this.state.idDelete)
  }
  render() {
    return (
      <div className="list-milk-tea row">
        {
          this.showMilkTea()
        }
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
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal"
                   onClick={this.DeleteMilkTea}>Có</button>
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