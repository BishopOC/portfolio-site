import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import Gallery from './gallery.js';
import Navbar from './navbar.js';
import cloud from './images/Cloud-PNG-9.png';
import './css/App.css';

let Link       = Scroll.Link;
let Element    = Scroll.Element;

class App extends Component {

  render() {
    return (
      <div className="App">
        <img src={cloud} className="cloud" alt="logo" />
        <div className="App-header">
          <div className="header-title">
            <p className='myName'>Bishop O'Connell</p>
            <div className='underline'></div>
            <p className='myTitle'>Full-Stack Developer</p>
          </div>
          <div className='navbar'>
            <Navbar />
          </div>
        </div>
        <Element name="Gallery" className="element" >
          <Gallery />
        </Element>
      </div>
    );
  }
}

export default App;
