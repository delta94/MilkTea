import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions/milktea.actions';

class Menu extends Component {
constructor(props){
    super(props);
    this.state = {
        isSelect : false,
        count: 1,
        idmilktea: ''
    }
}

selectMilkTea = (value) =>{
    this.setState({
        isSelect : value
    })
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
getPrepare= (id) =>{
    this.props.getAllPrepareMilkTea(this.props.info.ID)
    this.props.getID(this.props.info)
}
buy = (id,price)=>{
    this.props.selectMilkTea({
        ID: id,
        count: this.state.count,
        price: price
    })
}
showCount = (id,price) =>{
    if(this.state.isSelect === true){
        return (
        <div className="icon_card btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary"><i className="fas fa-minus" onClick={() => this.down()} /></button>
            <button type="button" className="btn btn-primary">{this.state.count}</button>
            <button type="button" className="btn btn-primary"><i className="fas fa-plus" onClick={() => this.up()} /></button>
            <button type="button" className="btn btn-danger" onClick={() => this.buy(id,price)} >OK</button>
        </div>

        )
    }
    else{
        return (
            <button type="button" onClick={() => this.selectMilkTea(true)}
                className="text btn btn-primary mb-2">Chọn</button>
            )
    }
}
getIDDelete = () =>{
    this.props.getIDDelete(this.props.info)
}
showEdit = () =>{
    if(this.props.user.code === undefined){
        return <div></div>
    }
    else{
        return (
            <div className="row">
                <div className="col-md-4">
                    <button className="btn btn-warning">sửa</button>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-danger" data-toggle="modal" onClick={() =>this.getIDDelete()} data-target="#deleteMilktea">xóa</button>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-danger" data-toggle="modal" onClick={() =>this.getPrepare()} data-target="#prepare">Chi tiết</button>
                </div>
            </div>
        )
    }
}

  render() {
    return (
      <div className="milk-tea">
        <div className="milktea text-center">
        <div className="card-milktea">
            <img className="card_img card-img-top" src={this.props.info.Picture} alt="Card image cap" />
            <div className="card_img card-body">
                <h5 className="card-title">{this.props.info.Name}</h5>
                <p className="card-text">Giá: {this.props.info.Price}</p>
                {this.showCount(this.props.info.ID, this.props.info.Price)}
                {this.showEdit()}
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
        insertMilkTea : (name,price,picture)=>{
            dispatch(actions.actInsertMilkTea(name,price,picture));
        },
        updateMilkTea : (id,name,price,picture)=>{
            dispatch(actions.actUpdateMilkTea(id,name,price,picture));
        },
        getAllPrepareMilkTea : (id)=>{
          dispatch(actions.getAllPrepareMilkTea(id));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Menu);