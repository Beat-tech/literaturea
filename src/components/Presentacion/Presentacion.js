import React, { Component } from "react";
import logo from "./logo.svg";
import "./Presentacion.css";
import { Link } from "react-router-dom";

class Presentacion extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>¡Has llegado a Literaturea!</p>
          <Link className="App-link" to="/home">
            Empezamos
          </Link>
        </header>
      </div>
    );
  }
}

export default Presentacion;
