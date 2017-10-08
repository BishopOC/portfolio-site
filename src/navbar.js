import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';

let Link = Scroll.Link;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };
    this.getNavbar = this.getNavbar.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 300 });
    });
  }

  getNavbar() {
    if (this.state.isTop) {
      return (
        <ul className='navbar'>
          <li><button><Link activeClass="active" className="test1"
          to="Gallery" spy={true} smooth={true} duration={500} >Portfolio</Link></button></li>
          <li><button><Link activeClass="active" className="test1"
          to="About" spy={true} smooth={true} duration={500} >About</Link></button> </li>
        </ul>
      );
    }

    return (
      <ul className='top-page'>
        <li><button><Link activeClass="active" className="test1"
        to="Home" spy={true} smooth={true} duration={500} >Home</Link></button></li>
        <li><button><Link activeClass="active" className="test1"
        to="Gallery" spy={true} smooth={true} duration={500} >Portfolio</Link></button></li>
        <li><button><Link activeClass="active" className="test1"
        to="About" spy={true} smooth={true} duration={500} >About</Link></button> </li>
      </ul>
    );
  };

  render() {
    return (
      <div style={{ ...this.props.style, height: 80, overflow: 'auto', transition: '1s', }}>
        {this.getNavbar()}
      </div>
    );
  }
}

export default Navbar;
