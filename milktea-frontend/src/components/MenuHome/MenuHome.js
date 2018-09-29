import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './MenuHome.css';
import {connect} from 'react-redux';
class MenuHome extends Component {

  render() {
    return (
      <div>
  <section className="product">
    <div className="product_content container">
      <h1>Thức uống mới</h1>
      <div className="line" />
      <div className="row">
        <div className="img-product col-md-4">
          <img src="./img/img1.jpg" className="image" />
          <div className="cont">
            <div className="text-pro">
              <p>Trà sữa sủi bọt</p>
              <h4>Giá 35000 vnd</h4>
              <div className="overlay">
              </div>
            </div>
            <div className="button">
              <button name className="btn btn-success">ReadMore</button>
            </div>
          </div>
        </div>
        <div className="img-product col-md-4">
          <img src="./img/m6.jpg" className="image" />
          <div className="cont">
            <div className="text-pro">
              <p>Trà sữa thạch phô mai</p>
              <h4>Giá:45000 vnd</h4>
              <div className="overlay">
              </div>
            </div>
            <div className="button">
              <button name className="btn btn-success">ReadMore</button>
            </div>
          </div>
        </div>
        <div className="img-product col-md-4">
          <img src="./img/tss.jpg" className="image" />
          <div className="cont">
            <div className="text-pro">
              <p>Trà sữa kem tuyết</p>
              <h4>Giá:39000 vnd</h4>
              <div className="overlay">
              </div>
            </div>
            <div className="button">
              <button name className="btn btn-success">ReadMore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="make">
    <div className="make_content">
      <div className="row">
        <div className="img col-md-6">
          <img src="./img/img5.jpg" className="img-make" />
        </div>
        <div className="text col-md-6">
          <p>Cách thức pha chế</p>
          <div className="line" />
          <h5>Trải qua gần 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà phê thượng
            hạng
            cùng mong muốn mang lại cho khách hàng những trải nghiệm giá trị nhất khi thưởng
            thức, Phúc Long liên
            tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu trong ngành trà và cà
            phê</h5>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/M0zUukzYVwg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
          <div className="button">
            <button name className="btn btn-success">ReadMore</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="team container">
    <div className="team_content">
      <h1>Đội ngũ </h1>
      <div className="line" />
      <div className="row">
        <div className="image col-md-3">
          <img src="./img/p1.jpg" className="img-team" />
          <div className="overlay">
            <p>Mr John Park</p>
            <span>Bartender </span>
            <div className="icon">
              <div className="icon-one">
                <i className="fa fa-facebook" />
              </div>
              <div className="icon-one">
                <i className="fa fa-twitter" />
              </div>
              <div className="icon-one">
                <i className="fa fa-instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="image col-md-3">
          <img src="./img/p30.jpg" className="img-team" />
          <div className="overlay">
            <p>Phạm Yến Vy</p>
            <span>Bartender </span>
            <div className="icon">
              <div className="icon-one">
                <i className="fa fa-facebook" />
              </div>
              <div className="icon-one">
                <i className="fa fa-twitter" />
              </div>
              <div className="icon-one">
                <i className="fa fa-instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="image col-md-3">
          <img src="./img/p0.jpg" className="img-team" />
          <div className="overlay">
            <p>Đỗ Hải Nam</p>
            <span>Bartender </span>
            <div className="icon">
              <div className="icon-one">
                <i className="fa fa-facebook" />
              </div>
              <div className="icon-one">
                <i className="fa fa-twitter" />
              </div>
              <div className="icon-one">
                <i className="fa fa-instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="image col-md-3">
          <img src="./img/p4.jpg" className="img-team" />
          <div className="overlay">
            <p>Mai Lan Châu</p>
            <span>Bartender </span>
            <div className="icon">
              <div className="icon-one">
                <i className="fa fa-facebook" />
              </div>
              <div className="icon-one">
                <i className="fa fa-twitter" />
              </div>
              <div className="icon-one">
                <i className="fa fa-instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="service">
    <div className="service">
      <h1>Danh sách Menu</h1>
      <div className="line" />
      <div className="row">
        <div className="img-service col-md-3">
          <img src="./img/m1.jpg" className="image" />
          <div className="over">
            <p>Trà olong kem</p>
            <div className="cline" />
            <h5>Giá:35 000 đồng</h5>
          </div>
        </div>
        <div className="img-service col-md-3">
          <img src="./img/m2.jpg" className="image" />
          <div className="over">
            <p>Trà thạch nhân </p>
            <div className="cline" />
            <h5>Giá:30 000 đồng</h5>
          </div>
        </div>
        <div className="img-service col-md-3">
          <img src="./img/m3.jpg" className="image" />
          <div className="over">
            <p>Trà sữa bọt tuyết</p>
            <div className="cline" />
            <h5>Giá:39 000 đồng</h5>
          </div>
        </div>
        <div className="img-service col-md-3">
          <img src="./img/m4.jpg" className="image" />
          <div className="over">
            <p>Trà sữa thái xanh</p>
            <div className="cline" />
            <h5>Giá:35 000 đồng</h5>
          </div>
        </div>
        <div className="img-service col-md-3">
          <img src="./img/m5.jpg" className="image" />
          <div className="over">
            <p>Trà thái xanh</p>
            <div className="cline" />
            <h5>Giá:30 000 đồng</h5>
          </div>
        </div>
        <div className="img-service col-md-3">
          <img src="./img/m6.jpg" className="image" />
          <div className="over">
            <p>Trà đường đen</p>
            <div className="cline" />
            <h5>Giá:39 000 đồng</h5>
          </div>
        </div>
        <div className="img-service col-md-3">
          <img src="./img/ts.jpg" className="image" />
          <div className="over">
            <p>Trà dâu kem</p>
            <div className="cline" />
            <h5>Giá:35 000 đồng</h5>
          </div>
        </div>
        <div className="img-service col-md-3">
          <img src="./img/m8.jpg" className="image" />
          <div className="over">
            <p>Trà đường đen</p>
            <div className="cline" />
            <h5>Giá:39 000 đồng</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="order">
    <div className="order_content container">
      <h1>Đặt hàng</h1>
      <div className="line" />
      <div className="row">
        <div className="col col-md-6">
          <form name="#" method="POST" value>
            <input className="text-order" type="text" name="#" placeholder="Họ tên" />
            <input className="text-order" type="number" name="#" placeholder="Số ĐT" />
            <input className="text-order" type="text" name="#" placeholder="Địa chỉ" />
            <select className="order-txt" name="#">
              <option>Chọn loại trà</option>
              <option>Trà sữa nhà làm</option>
              <option>Trà thạch</option>
              <option>Trà sữa bọt tuyết </option>
              <option>Trà sữa bánh plan</option>
              <option>Trà sữa thái xanh</option>
              <option>Trà sữa đường đen</option>
              <option>Trà sữa kem tuyết</option>
              <option>Trà sữa củ năng</option>
              <option>Trà sữa gạo nâu</option>
              <option>Trà sữa hoa lục trà</option>
            </select>
            <select className="order-txt" name="#">
              <option>Kích cỡ</option>
              <option>Lớn</option>
              <option>Nhỏ</option>
              <option>Vừa</option>
            </select>
          </form>
        </div>
        <div className="col col-md-6">
          <img src="./img/p5.jpg" />
        </div>
      </div>
    </div>
  </section>
  <section className="event">
    <div className="event_content">
      <h1>Khách hàng thân thiết</h1>
      <div className="line" />
      <div id="eventcarou" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#eventcarou" data-slide-to={0} className="active" />
          <li data-target="#eventcarou" data-slide-to={1} />
        </ol>
        <div className="img-cus carousel-inner" role="listbox">
          <div className="customer carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <img src="./img/l1.jpg" className="img" alt="First slide" />
              </div>
              <div className="col-md-4">
                <img src="./img/l7.jpg" className="img" alt="First slide" />
              </div>
              <div className="col-md-4">
                <img src="./img/l6.jpg" className="img" alt="First slide" />
              </div>
            </div>
          </div>
          <div className="customer carousel-item">
            <div className="row">
              <div className="col-md-4">
                <img src="./img/l2.jpn.jpg" className="img" alt="First slide" />
              </div>
              <div className="col-md-4">
                <img src="./img/l3.jpg" className="img" alt="First slide" />
              </div>
              <div className="col-md-4">
                <img src="./img/l4.jpg" className="img" alt="First slide" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact">
    <div className="contact_content">
      <div className="row">
        <div className="colx col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.141188016388!2d106.65848241526523!3d10.800496661701183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752930edb5b707%3A0xa554620f19813c8f!2sPhuc+Long+Cafe!5e0!3m2!1sen!2s!4v1538103631808" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
        </div>
        <div className="colx col-md-6">
          <h1>Liên hệ</h1>
          <div className="line" />
          <form name="#">
            <div className="input">
              <input className="txt" name="$" type="text" placeholder="Name" /><br />
            </div>
            <div className="input">
              <input className="txt" name="$" type="email" placeholder="Email" /><br />
            </div>
            <div className="input">
              <textarea className="txt textar" placeholder="Message..." defaultValue={""} />
            </div>
            <div className="button">
              <button name="#" className="btn btn-danger">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>


    );
  }
}


export default connect(null, null)(MenuHome);
