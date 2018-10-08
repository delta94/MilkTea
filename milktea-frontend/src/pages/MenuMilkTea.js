import React, { Component } from 'react';
import Menu from './../components/Menu/Menu';

class MenuMilkTea extends Component {
  render() {
    return (
      <div className="Menu row">
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </div>
    );
  }
}

export default MenuMilkTea;