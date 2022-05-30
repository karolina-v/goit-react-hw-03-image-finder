import React, {Component} from 'react';
import imagesAPI from '../../services/images-api';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Modal from '../Modal';


class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.inputValue;
    const nextValue = this.props.inputValue;

    if (prevValue !== nextValue) {
      this.setState({ status: 'pending', page: 1 });

      imagesAPI
        .fetchImage(nextValue, this.state.page)
        .then(images => {
          if (images.total === 0) {
            this.setState({
              error: 'По вашему запросу ничего не найдено!',
              status: 'rejected',
            });
          } else {
            this.setState(prevState => ({
              images: images.hits,
              status: 'resolved',
            }));
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (this.state.page !== 1) {
      imagesAPI
        .fetchImage(this.props.inputValue, this.state.page)
        .then(images =>
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
            status: 'resolved',
          })),
        )
        .then(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  
  openModal = (largeImageUR, alt) => {
    this.setState({
      largeImageURL: largeImageUR,
      alt: alt,
    });
  };
 
  closeModal = () => {
    this.setState({
      largeImageURL: '',
      alt: '',
    });
  };

  render() {
    const { error, status, largeImageURL, alt } = this.state;
    const images = this.state.images;


    // if (status === 'pending') {
    //   return <Loader />;
    // }


    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          {images.map(img => {
            return (
              <ImageGalleryItem
                key={img.id}
                alt={img.tags}
                webformatURL={img.webformatURL}
                largeImageURL={img.largeImageURL}
                onOpenModal={this.openModal}
              />
            );
          })}

          <Button LoadMore={this.loadMore} />
    
          {largeImageURL && (
            <Modal
              largeImageURL={largeImageURL}
              alt={alt}
              onClose={this.closeModal}
            />
          )}
        </ul>
      );
    }

    if (status === 'rejected') {
      return (
        <div>
          <p>{error.message}</p>
        </div>
      )
    }
  }
}

export default ImageGallery;