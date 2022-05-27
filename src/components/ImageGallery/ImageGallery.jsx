import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from "../Loader";
import imagesAPI from '../../services/images-api'; 


class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  }

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.inputTag;
    const newValue = this.props.inputTag;

    if (prevValue !== newValue) {
      this.setState({ status: 'pending' });

      // fetch(searchURL)
        // .then(res => res.json())
        // .then(data => this.setState({ image: data.hits }))
        // .then(console.log(this.state.images));
      imagesAPI.fetchImages(newValue)
        .then(image => this.setState({ image, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }))

    }
  }

  render() {
    const { image, error, status } = this.state;

    // if (status === 'idle') {
      
    // }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <ul className="gallery">
          <ImageGalleryItem image={image}/>
        </ul>
      )
    }
  }
}

export default ImageGallery;