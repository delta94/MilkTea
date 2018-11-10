import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../../actions/milktea.actions';

class PrepareMilkTea extends Component {
constructor(props){
    super(props);
    
}
showPrepare = () =>{
    let resuilt;
    if(this.props.prepare.length > 0){
      resuilt = this.props.prepare.map((item, index) => {
          return(
                <tr key={index}>
                    <td>{index + 1}</td>
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
      console.log(this.props.prepare)
    return (
        <div className="container">
        <div className="row">
          <div className="col-10 mx-auto display:inline">
            <h1 className="text-center display-4 mb-4 ">Danh sách nguyên liệu</h1>
            <div className="row">
              <div className="img col-md-12">
                <img src="./img/img2.jpg" width="300px" />
              </div>
              <form className="form-group col-md-12">
                <div className="content">
                  <label style={{fontSize: 30}}>Tên trà sữa: </label>
                  <label style={{fontSize: 30}}>{this.props.milktea.Name}</label>
                </div> 
                <div className="content">
                  <label style={{fontSize: 30}}>Giá: </label>
                  <label style={{fontSize: 30}}>{this.props.milktea.Price}</label>
                </div> 
              </form>
            </div>
            <div className="material mt-4 p-2" style={{background: 'pink'}}>
              <table className="table" style={{color: 'black'}}>
                <thead> 
                  <tr><th>STT</th>
                    <th>Tên nguyên liệu</th>
                    <th>Số lượng</th>
                  </tr></thead>
                <tbody id="tbody">
                  {this.showPrepare()}
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
      prepare: state.prepare
    }
  }


export default connect(mapStateToProps, null)(PrepareMilkTea);