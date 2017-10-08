import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import Gallery from './gallery.js';
import About from './about.js';
import Navbar from './navbar.js';
import cloud from './images/Cloud-PNG-9.png';
import './css/App.css';
import { StickyContainer, Sticky } from 'react-sticky';

let Link       = Scroll.Link;
let Element    = Scroll.Element;

class Home extends Component {
  render() {
    return (
      <div>
      <img src={cloud} className="cloud" alt="logo" />
      <div className="App-header">
        <div className="header-title">
          <p className='myName'>Bishop O'Connell</p>
          <div className='underline'></div>
          <p className='myTitle'>Full-Stack Developer</p>
        </div>
        <StickyContainer style={{ height: 1700, padding: '0' }}>
        <Sticky>
          {
            ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {

              return <Navbar style={style} />;
            }
          }
        </Sticky>
      </StickyContainer>
        <div className='navbar'>
          {/* <Navbar /> */}
        </div>
      </div>
    </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Element name="Home" className="element" >
          <Home />
        </Element>
        <Element name="Gallery" className="element" >
          <Gallery />
        </Element>
        <Element name="About" className="element">
          <About />
        </Element>
      </div>
    );
  }
}

export default App;
