import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './Header.css';

const menus = [
  {
    name : "Trang chủ",
    to : "/",
    exact : true
  },
  {
    name : "Thức uống",
    to : "/MilkTea",
    exact : false
  },
  {
    name : "Tin tức",
    to : "/News",
    exact : false
  },
  {
    name : "Đặt hàng",
    to : "/Order",
    exact : false
  },
  {
    name : "Quản lý",
    to : "/Manager",
    exact : false
  }
];

const MenuLink = ({label, to, active}) =>{
  return(
    <Route
      path = {to}
      exact = {active}
      children ={ ({match}) =>{
        var active = match ? "active" : "";
        return(
          <li className={"text-menu nav-item active " + {active}}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
}


class Header extends Component {
  render() {
    return (
      <section className="head">
        <div className="menu">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="write navbar-brand" href="#">Thành Nhi</a>
            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="txt navbar-nav ml-auto mt-2 mt-lg-0">
                {this.showMenu(menus)}
                <li className="text-menu ">
                  <button type="button" className="btn btn-white ml-20" data-toggle="collapse" data-target="#demo">Login
                    in</button>
                  <div id="demo" className="collapse">
                    <a className="log" href>Đăng ký</a>
                    <a className="log" href>Đăng nhập</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="head_content">
          <div id="mycarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#mycarousel" data-slide-to={0} className="active" />
              <li data-target="#mycarousel" data-slide-to={1} />
              <li data-target="#mycarousel" data-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="image carousel-item active">
                <img src="./img/1-130.jpg" alt="First slide" className="img-carou" />
                <div className="caption">
                  <p>Chào mừng đến với quán trà sữa Thành Nhi</p>
                  <h6>Nơi mà bạn có thể thõa mãn đam mê</h6>
                  <div className="button input-group mb-3">
                    <input type="text" className="form-control" placeholder="Tên thức uống..." />
                    <div className="search input-group-append">
                      <button name className="btn bg-success">Search</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image carousel-item">
                <img src="./img/5.jpg" alt="Second slide" className="img-carou" />
                <div className="caption">
                  <p>Công thức mới lạ, đem đến những thức uống mới lạ nhất cho bạn</p>
                  <h6>Sự lựa chọn đúng đắn</h6>
                  <div className="button input-group mb-3">
                    <input type="text" className="form-control" placeholder="Tên thức uống..." />
                    <div className="search input-group-append">
                      <button name className="btn bg-success">Search</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image carousel-item">
                <img src="./img/service.jpg" alt="Third slide" className="img-carou" />
                <div className="caption">
                  <p>Nhiều loại trà sữa khác nhau cho bạn thõa sức lựa chọn</p>
                  <h6>Đa dạng phong phú</h6>
                  <div className="button input-group mb-3">
                    <input type="text" className="form-control" placeholder="Tên thức uống..." />
                    <div className="search input-group-append">
                      <button name className="btn bg-success">Tìm kiếm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">trước</span>
            </a>
            <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Sau</span>
            </a>
          </div>
        </div>
      </section>

    );
  }
  showMenu =(menus)=>{
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index)=>{
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            active={menu.exact}
          />
        );
      });
    }
    return result;
  }

}

export default Header;
