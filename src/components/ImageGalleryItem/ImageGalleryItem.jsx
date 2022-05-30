import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  openModal,
}) => {
  return (
    <li className={s.ImageGalleryItem}
      onClick={() => {
        openModal(largeImageURL, tags);
      }}
    >
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.string.isRequired,
};

export default ImageGalleryItem;