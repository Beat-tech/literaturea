import React, { Component } from "react";
import "./Autoresgeneracion.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
class Autoresgeneracion extends Component {
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
        <p className="pautoresg">¿A qué autor quieres conocer?</p>
        <ul className="ulautoresg">
          <li>
            <Link to="">Luis Cernuda</Link>
            <img
              src="https://static3.abc.es/Media/201311/17/64407263--644x645.jpg"
              alt=""
            />
          </li>
          <li>
            <Link to="/lorca">Federico García Lorca</Link>
            <img
              src="https://i2.wp.com/www.revistalatinanc.com/wp-content/uploads/2020/04/federico-garcia-lorca.jpg"
              alt=""
            />
          </li>
          <li>
            <Link to="">Pedro Salinas</Link>
            <img
              src="https://static3planetadelibroscom.cdnstatics.com/usuaris/autores/fotos/13/tam_1/000012811_1_PSalinas_big.jpg"
              alt=""
            />
          </li>
          <li>
            <Link to="">Gerardo Diego</Link>
            <img
              src="https://cdn.zendalibros.com/wp-content/uploads/2018/04/gerardo_diego.png"
              alt=""
            />
          </li>
          <li>
            <Link to="">Vicente Aleixandre</Link>
            <img
              src="https://cvc.cervantes.es/img/aleixandre/al_madrid55_1024.jpg"
              alt=""
            />
          </li>
          <li>
            <Link to="">Dámaso Alonso</Link>
            <img
              src="https://somosdel27.files.wordpress.com/2018/03/da.jpg?w=361&h=362"
              alt=""
            />
          </li>
          <li>
            <Link to="">Rafael Alberti</Link>
            <img
              src="https://www.isliada.org/static/images/2019/06/Rafael-Alberti-200x300.jpg"
              alt=""
            />
          </li>
          <li>
            <Link to="">Jorge Guillén</Link>
            <img
              src="https://i.pinimg.com/474x/ea/2a/80/ea2a802087b1ae68cccc0fb6cf531b6d.jpg"
              alt=""
            />
          </li>
        </ul>
        <Nav />
      </div>
    );
  }
}

export default Autoresgeneracion;
