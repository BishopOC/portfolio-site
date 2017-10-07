import React, { Component } from 'react';
import Gallery from './gallery.js';
import cloud from './images/Cloud-PNG-9.png';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-title">
            <img src={cloud} className="cloud" alt="logo" />
            <p className='myName'>Bishop O'Connell</p>
            <p className='myTitle'>Full-Stack Developer</p>
          </div>
        </div>
        <Gallery />
      </div>
    );
  }
}

export default App;
