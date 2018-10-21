import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './../../actions/info.action';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pass: '',
            isWrong: false,
            redirect : false
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.code === 'err'){
            this.setState({
                isWrong : true
            })
        }
        else{
            this.setState({
                isWrong : false,
                redirect : true
            })
        }
        //console.log(nextProps.user)
    }
    log_in = () => {
        //console.log(this.state.user, this.state.pass)
        this.props.login(this.state.user, this.state.pass)
    }
    onChangeUser = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
          user : value
        });
    }
    onChangePass = (event) =>{
        var target = event.target;
        var value =  target.value;
        this.setState({
          pass : value
        });
    }
    showWrongPass = () =>{
        if(this.state.isWrong === true){
            return(
                <div>
                    <p className="Danger">Mật Khẩu hoặc tên đăng nhập sai</p>
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
                <h1 className="txt_login text-center mb-5">Đăng Nhập</h1>
                    <div className="group_login">
                        <label className="text_login">Email/Số thẻ<span>(*)</span></label>
                        <input className="input_login" type="text" onChange={this.onChangeUser} placeholder="Nhập Email/Số thẻ"/>
                    </div>
                    <div className="group_login">
                        <label className="text_login">Mật khẩu<span>(*)</span></label>
                        <input className="input_login" type="password" onChange={this.onChangePass} placeholder="Nhập mật khẩu"/>
                    </div>
                    <br />
                    {this.showWrongPass()}
                    {/* <p>Quên mật khẩu? bấm <a href="">Vào đây</a></p> */}
                    <button className="btn btn_login btn-primary" onClick={this.log_in}>ĐĂNG NHẬP</button>
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
      login : (user, pass) =>{
        dispatch(actions.actLoginRequest(user, pass));
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Login);