import React, { Component } from 'react';
import './css/gallery.css';

class Gallery extends Component {

  render() {
    return (
      <div className='gallery'>
        <div className='gallery-items'>
          <ul className='gallery-titles'>
            <li>Recipe Book</li>
            <li>Weather App</li>
            <li className='fishhawk-title'>Fish Hawk Spirits</li>
          </ul>
          <a className='recipe-link' href='#'>Need a place to keep your recipes?
          Sign up and start filling your recipe book today!
          </a>
          <a className='weather' href='#'><p>Tired of doing a quick google
          search for weather? Click here to do the same thing!</p></a>
          <a className='fishhawk' href='#'><p>A Floridian distillery the produces
          the finest spirits.</p></a>
        </div>
      </div>
    );
  }
}

export default Gallery;
