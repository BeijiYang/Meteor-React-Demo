import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/signup'>SignUp</Link>
        <Link to='/login'>LogIn</Link>
      </div>
      );
  }
}

export default NavBar;