import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="row">
          <div className="text col-md-3">
            <h1>Thành Nhi Tea</h1>
            <p>Mong muốn đem lại thức uống thơm ngon nhất.</p>
            <p />
          </div>
          <div className="text col-md-3">
            <h1>Nagivation</h1>
            <ul>
              <li><a href>Trang chủ</a></li>
              <li><a href>Thức uống</a></li>
              <li><a href>Tin tức</a></li>
              <li><a href>Đặt hàng</a></li>
            </ul>
          </div>
          <div className="text col-md-3">
            <h1>Connect with us</h1>
            <ul>
              <div className="icon">
                <li><a href><i className="circle fa fa-facebook" />Follow us on Twitter</a></li>
              </div>
              <div className="icon">
                <li><a href><i className="circle fa fa-twitter" />Follow us on Twitter</a></li>
              </div>
              <div className="icon">
                <li><a href><i className="circle fa fa-google-plus" />Add us on Google plus </a></li>
              </div>
              <div className="icon">
                <li><a href><i className="circle fa fa-instagram" />Follow us on Instagram</a></li>
              </div>
            </ul>
          </div>
          <div className="text col-md-3">
            <h1>Address</h1>
            <ul>
              <li><a href><i className="fa fa-map-marker" />Thành Nhi, Số 1 Võ văn ngân, thủ đức</a></li>
              <li><a href><i className="fa fa-phone" /> 01253771565</a></li>
              <li><a href><i className="fa fa-envelope-o" />ThanhNhi@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div style={{textAlign: 'center', fontSize: 30}}><a href="#" title="Back to top"><i className=" arrow fa fa-arrow-up" /></a></div>
      </section>

    );
  }
}

export default Footer;
