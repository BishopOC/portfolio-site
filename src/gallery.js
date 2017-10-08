import React, { Component } from 'react';
import './css/gallery.css';
import Navbar from './navbar.js';

class Gallery extends Component {

  render() {
    return (
      <div className='gallery'>
        <div className='gallery-elements'>
        <p className='title'>My Projects</p>
        <div className='gallery-items'>
          <div>
            <a className='recipe-link' href='#'>Need a place to keep your recipes?
              Sign up and start filling your recipe book today!</a>
              <p>Recipe Book</p>
          </div>
          <div>
            <a className='weather' href='#'>Tired of doing a quick google
              search for weather? Click here to do the same thing!</a>
              <p>Weather App</p>

          </div>
          <div>
            <a className='fishhawk' href='#'>A Floridian distillery the produces
              the finest spirits</a>
              <p>Fish Hawk</p>

          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Gallery;
