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
          <li className={"text-menu nav-item " + {active}}>
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
