import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
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
      <div>
        <ul className="ulnav">
          <li>
            <Link to="/home ">
              INICIO
              {/* <img src="../../public/logo.svg" alt="" /> */}
            </Link>
          </li>
          <li>
            <Link to="/perfil">
              PERFIL
              {/* <img src="../../public/lectoro.svg" alt="" /> */}
            </Link>
          </li>

          {/* 
          <li>
            <Link to="/home ">
              {/* <img
                src={process.env.PUBLIC_URL + "/flecha-izquierda.svg"}
                alt="flecha"
              /> 
              <img src="/flecha-izquierda.svg" alt="asdasdasd" />
            </Link>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Nav;
