import React, { Component } from 'react';
import './css/gallery.css';

class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <div className='gallery-items'>
          <a href='#'>Recipe Keeper</a>
          <a href='#'>Weather Data App</a>
          <a href='#'>Fish Hawk Spirits</a>
          <a href='#'>Youtube Mimic</a>
          <a href='#'>Calculator</a>
        </div>
      </div>
    );
  }
}

export default Gallery;
