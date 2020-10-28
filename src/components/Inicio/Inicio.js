import React, { Component } from "react";
import "./Inicio.css";
import { Link, withRouter } from "react-router-dom";
import Nav from "../Nav/Nav";

class Inicio extends Component {
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
     

        <ul className="ulinicio">
          <li>
            <Link to="">Literatura Medieval</Link>
          </li>
          <li>
            <Link to="">La Celestina</Link>
          </li>
          <li>
            <Link to="">Renacimiento</Link>
          </li>
          <li>
            <Link to="">Siglo de Oro y Barroco</Link>
          </li>
          <li>
            <Link to="">Siglo XVIII</Link>
          </li>
          <li>
            <Link to="">Movimiento Romántico</Link>
          </li>
          <li>
            <Link to="">Realismo y Naturalismo</Link>
          </li>
          <li>
            <Link to="">Modernismo y Generación del 98</Link>
          </li>
          <li>
            <Link to="/generacion">Grupo poético del 27</Link>
          </li>
          <li>
            <Link to="">Novela primera mitad Siglo XX</Link>
          </li>
          <li>
            <Link to="">Teatro primera mitad Siglo XX</Link>
          </li>
          <li>
            <Link to="">Narrativa Hispanoamericana Siglo XX</Link>
          </li>
          <li>
            <Link to="">A partir de 1940</Link>
          </li>
        </ul>

        <Nav />
      </div>
    );
  }
}

export default withRouter(Inicio);
