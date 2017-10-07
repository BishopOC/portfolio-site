import React, { Component } from 'react';
import './css/gallery.css';

class Gallery extends Component {

  render() {
    return (
      <div className='gallery'>
        <div className='gallery-items'>
          <a className='recipe-link' href='#'>
            <p> Recipe Book </p>
          </a>
          <a className='weather' href='#'>Weather Data App</a>
          <a className='fishhawk' href='#'>Fish Hawk Spirits</a>
        </div>
      </div>
    );
  }
}

export default Gallery;
