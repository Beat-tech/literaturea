import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Lorcadrama.css";

class Lorcadrama extends Component {
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
        <ul>
          <li>
            <Link to="http://www.cervantesvirtual.com/obra-visor/la-casa-de-bernarda-alba-775125/html/6aef1659-90e7-443f-bd6c-a8fe62c4c04a_2.html#I_0_">
              La Casa de Bernarda Alba
            </Link>
          </li>
          <li>
            <Link to="http://www.cervantesvirtual.com/obra-visor/bodas-de-sangre-775113/html/e32c9cf0-6208-4769-8961-485fac1ebf7b_2.html#I_0_">
              Bodas de sangre
            </Link>
          </li>
          <li>
            <Link to="http://www.cervantesvirtual.com/obra-visor/yerma-775116/html/2adf6d89-47d4-48e3-a945-048c8fb78eae_2.html#I_0_">
              Yerma
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Lorcadrama;
