import React, { Component } from 'react';
import './css/gallery.css';

class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <div className='gallery-items'>
          <img src='http://via.placeholder.com/250x250'/>
          <img src='http://via.placeholder.com/250x250'/>
          <img src='http://via.placeholder.com/250x250'/>
          <img src='http://via.placeholder.com/250x250'/>
          <img src='http://via.placeholder.com/250x250'/>
        </div>
      </div>
    );
  }
}

export default Gallery;
