import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.module.css';


function ImageGalleryItem({ image: { id, webformatURL } }) {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="" id={id} />
    </li>
  )
}

export default ImageGalleryItem;