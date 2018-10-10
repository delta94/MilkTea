import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
    <div className="SubHeader">
        <div class="login">
            <div class="login_content">
                <h1 class="txt_login text-center mb-5">Đăng Nhập</h1>
                <form name="#" value="#" method="POST">
                    <div class="group_login">
                        <label class="text_login">Email/Số thẻ<span>(*)</span></label>
                        <input class="input_login"type="email" placeholder="Nhập Email/Số thẻ"/>
                    </div>
                    <div class="group_login">
                            <label class="text_login">Mật khẩu<span>(*)</span></label>
                            <input class="input_login" type="text"placeholder="Nhập mật khẩu"/>
                    </div>
                    <br />
                    <p>Quên mật khẩu? bấm <a href="">Vào đây</a></p>
                    <button class="btn btn_login btn-primary">ĐĂNG NHẬP</button>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

export default Login;