import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
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
      <p className="pinicio">{this.props.titulo}</p>
      </div>
    );
  }
}

export default Header;