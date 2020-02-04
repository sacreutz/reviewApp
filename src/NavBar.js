import './Navbar.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
  render() {
      return (
          <div>
            <ul id="nav">
              <li><NavLink to={'/reviews'}>Reviews</NavLink></li>

            </ul>
          </div>
      );
  }
}

export default Navbar;





