import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="SubHeader">
            <div className="register">
  <div className="register_content">
    <h1 className="txt_register text-center mb-4 "> Đăng Ký</h1>
    <form name="dangky" value="#" method="POST">
      <div className="register_iteam">
        <label className="register_iteam">Họ tên<span>(*)</span></label>
        <input className="input_register" type="text" name="#" />
      </div>
      <div className="register_iteam">
        <label className="register_iteam">Số điện thoại<span>(*)</span></label>
        <input className="input_register" type="number" name="#" />
      </div>
      <div className="register_iteam">
        <label className="register_iteam">Email<span>(*)</span></label>
        <input className="input_register" type="email" name="#" />
      </div>
      <div className="register_iteam">
        <label className="register_iteam">Mật khẩu<span>(*)</span></label>
        <input className="input_register" type="text" name="#" />
      </div>
      <div className="register_iteam">
        <label className="register_iteam">Nhập lại mật khẩu<span>(*)</span></label>
        <input className="input_register" type="text" name="#" />
      </div>
      <div className="register_iteam">
        <label className="register_iteam">Địa chỉ<span>(*)</span></label>
        <input className="input_register" type="text" name="#" />
      </div>
      <button className="btn_register btn btn-primary" type="button">Đăng Ký</button>
    </form>
  </div>
</div>

      </div>
    );
  }
}

export default SignUp;