import React, { Component } from "react";
import "./Lorcainicio.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

class Lorcainicio extends Component {
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
        <p className="piniciolorca">
          Bienvenido/a al fascinante mundo de Lorca
        </p>
        <ul className="uliniciolorca">
          <li>
            <Link to="/lorcabio">Biografía</Link>
            <img
              id="lorcabiopic"
              src="https://i.pinimg.com/originals/31/72/ca/3172ca057bfef23d31228dd383ce00aa.jpg"
              alt=""
            />
          </li>
          <li>
            <Link to="/lorcapoet">Poesía</Link>
            <img
              id="romancero"
              // src="https://i.pinimg.com/originals/8e/ac/6c/8eac6cfba80955bc63c8e739ee55dca7.jpg"
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Poeta_NY_2.jpg"
              alt=""
            />
          </li>
          <li>
            <Link to="/lorcadrama">Teatro</Link>
            <img
              id="barraca"
              src="https://lacasadebernardaalbalorca.files.wordpress.com/2012/04/disegnofgl07.jpg"
              alt=""
            />
          </li>
          <li>
            <Link to="/lorcatest">Test</Link>
            <img
              id="manos"
              src="https://i.pinimg.com/236x/3d/9f/95/3d9f958ecf3afbb4e64f2afe786b4899--hand-drawings-art-sketchbook.jpg"
              alt=""
            />
          </li>
        </ul>
        <Nav />
      </div>
    );
  }
}

export default Lorcainicio;
