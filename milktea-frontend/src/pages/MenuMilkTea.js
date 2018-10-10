import React, { Component } from 'react';
import MilkTea from './../components/MilkTea/MilkTea';

class MenuMilkTea extends Component {
  render() {
    return (
      <div className="list-milk-tea row">
        <MilkTea />
        <MilkTea />
        <MilkTea />
        <MilkTea />
        <MilkTea />
        <MilkTea />
      </div>
    );
  }
}

export default MenuMilkTea;