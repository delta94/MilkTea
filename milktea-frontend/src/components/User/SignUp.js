import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './../../actions/info.action';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            address: '',
            user : '',
            pass1: '',
            pass2: '', 
            isWrong: false
        }
    }
    
    log_in = () => {
        this.props.signup(this.state.name,this.state.phone,this.state.address,this.state.user, this.state.pass1)
    }
    onChangeUser = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
          user : value
        });
    }
    onChangePass1 = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
          pass1 : value
        });
    }
    onChangeName = (event) =>{
      var target = event.target;
      var value =  target.value;
      this.setState({
        name : value
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
    onChangePass2 = (event) =>{
      var target = event.target;
      var value =  target.value;
      if(this.state.pass1 !== value){
        this.setState({
          isWrong : true
        });
      }
      else{
        this.setState({
          pass2 : value
        });
      }
    }

    showWrongPass = () =>{
        if(this.state.isWrong === true){
            return(
                <div>
                    <p className="Danger">Mật Khẩu không khớp</p>
                </div>
            )
        }
    }
    haveRedirect = () =>{
      if(this.state.redirect === true){
          return <Redirect to="/" />
      }
    }
  render() {
    return (
    <div className="SubHeader">
        <div className="login">
            <div className="login_content">
                <h1 className="txt_login text-center mb-5">Đăng Ký</h1>
                    <div className="group_login">
                        <label className="text_login">Tên</label>
                        <input className="input_login" type="text" onChange={this.onChangeName} />
                    </div>
                    <div className="group_login">
                        <label className="text_login">Số điện thoại</label>
                        <input className="input_login" type="text" onChange={this.onChangePhone} />
                    </div>
                    <div className="group_login">
                        <label className="text_login">Địa chỉ</label>
                        <input className="input_login" type="text" onChange={this.onChangeAddress} />
                    </div>
                    <div className="group_login">
                        <label className="text_login">tên user</label>
                        <input className="input_login" type="text" onChange={this.onChangeUser} />
                    </div>
                    <div className="group_login">
                        <label className="text_login">pass</label>
                        <input className="input_login" type="password" onChange={this.onChangePass1} />
                    </div>
                    <div className="group_login">
                        <label className="text_login">nhập lại pass</label>
                        <input className="input_login" type="password" onChange={this.onChangePass2} />
                    </div>
                    <br />
                    {this.showWrongPass()}
                    {/* <p>Quên mật khẩu? bấm <a href="">Vào đây</a></p> */}
                    <button className="btn btn_login btn-primary" onClick={this.log_in}>ĐĂNG KÝ</button>
                    {this.haveRedirect()}
            </div>
        </div>
    </div>
    );
  }
}
const mapStateToProps = (state) =>{
    return {
      user : state.user
    }
  }
  const mapDispatchToProps = (dispatch, props) =>{
    return{
      signup : (name, phone,address,user, password) =>{
        dispatch(actions.actSignUp(name, phone,address,user, password));
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Signup);