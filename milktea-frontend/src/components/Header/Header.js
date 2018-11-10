import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './Header.css';

let menus = [
  {
    name : "Trang chủ",
    to : "/",
    exact : true
  },
  {
    name : "Thức uống",
    to : "/MilkTea",
    exact : false
  }
];

const MenuLink = ({label, to, active}) =>{
  return(
    <Route
      path = {to}
      exact = {active}
      children ={ ({match}) =>{
        let active = match ? "active" : "";
        return(
          <li className={`text-menu nav-item `}>
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
  constructor(props){
    super(props);
    this.state = {
        haveUser: false,
        user : {}
    }
  }
  addforManager = (menu) =>{
    if(this.props.user.code !== undefined){
      menu = [...menu, {
        name : "Quản lý",
        to : "/Manager",
        exact : false
      }]
    }
    return menu
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.user.code === 'ok'){
      this.setState({
        haveUser : true,
        user : nextProps.user
      })
    }
    
  }
  showUser = () =>{
    if(this.state.haveUser === true){
      return (
        <div>
          {this.state.user.data.Name}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div className="dropdown-menu login" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item"  href="">Đăng xuất</a>
            </div>
          </div>
        </div>
      )
    }
    else{
      return(
        <div>
          <button type="button" className="btn btn-white ml-20" id="Danhnhap" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login
            in</button>
          <div className="dropdown-menu login" aria-labelledby="Danhnhap" >
            <Link to="/Login" className="nav-link">Đăng nhập</Link>
            <Link to="/SignUp" className="nav-link">Đăng ký</Link>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <section className="head">
        <div className="menu">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="write navbar-brand" href="">Quán trà sữa Thành Nhi</a>
            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="txt navbar-nav ml-auto mt-2 mt-lg-0">
                {this.showMenu(menus)}
                <li className="text-menu ">
                  {this.showUser()}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        
      </section>

    );
  }
  showMenu = (menus)=>{
    var result = null;
    if(menus.length > 0){
      let menu = this.addforManager(menus)
      result = menu.map((menu, index)=>{
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
const mapStateToProps = (state) =>{
  return {
    user : state.user
  }
}


export default connect(mapStateToProps, null)(Header);
