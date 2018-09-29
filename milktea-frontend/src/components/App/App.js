import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import routes from "./../../routes";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Header />
            {this.showContentMenus(routes)}
          <Footer />
        </div>
      </Router>
    );
  }
  showContentMenus =  (routes) =>{
    var result = null;
    if(routes.length > 0)
      result = routes.map((route, index) => {
        return (
            <Route
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
          />
        );
      });
    return <Switch>{result}</Switch>;
  }
}

export default App;
