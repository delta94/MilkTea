import React, { Component } from 'react';
import TypesCV from './../TypesCV/TypesCV';
import './ShowCV.css';
import {connect} from 'react-redux';
import * as actions from './../../actions/info.action';

class ShowCV extends Component {
  select = (data)=>{
    this.props.getIDCV(data)
  }
  render() {
    return (
      <div className="showCV container-fluid">
        <div className="row">
          <TypesCV id={1} selected={this.select}/>
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return{
    getIDCV : (id) =>{
      dispatch(actions.getIDCV(id));
    }
  }
}

export default connect(null,mapDispatchToProps)(ShowCV);
