import React, { Component } from 'react';

class Menu extends Component {
constructor(props){
    super(props);
    this.state = {
        isSelect : false,
        count: 1
    }
}

selectMilkTea = (value) =>{
    this.setState({
        isSelect : value
    })
}
up = () =>{
    this.setState({
        count : this.state.count + 1
    })
}
down = () =>{
    if(this.state.count > 1)
    {
        this.setState({
            count : this.state.count - 1
        })
    }
}
showCount = () =>{
    if(this.state.isSelect === true){
        return (
        <div className="icon_card btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary"><i className="fas fa-minus" onClick={() => this.down()} /></button>
            <button type="button" className="btn btn-primary">{this.state.count}</button>
            <button type="button" className="btn btn-primary"><i className="fas fa-plus" onClick={() => this.up()} /></button>
            <button type="button" className="btn btn-danger" onClick={() => this.selectMilkTea(false)} >Hủy</button>
        </div>

        )
    }
    else{
        return (
            <button type="button" onClick={() => this.selectMilkTea(true)}
                className="text btn btn-primary mb-2">Chọn</button>
            )
    }
}
  render() {
    return (
      <div className="milk-tea">
        <div className="milktea text-center">
        <div className="card-milktea">
            <img className="card_img card-img-top" src="./img/m6.jpg" alt="Card image cap" />
            <div className="card_img card-body">
                <h5 className="card-title">Trà sữa đường đen</h5>
                <p className="card-text">Giá: 20 000vnd</p>
                {this.showCount()}
            </div>
        </div>
        </div>

      </div>
    );
  }
}

export default Menu;