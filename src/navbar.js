import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import './css/navbar.css';

let Link = Scroll.Link;

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className='navbar'>
          <li><button><Link activeClass="active" className="test1"
          to="Gallery" spy={true} smooth={true} duration={500} >Portfolio</Link></button></li>
          <li><button> Contact </button> </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
