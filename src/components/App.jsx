import React, { Component } from 'react';
// import shortid from 'shortid';
import Modal from './Modal';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';


export class App extends Component {
  state = {
    showModal: false,
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }
  

  render() {
    const { showModal } = this.state;

    return (
      <div>

        <ImageGalleryItem />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
       
      </div>
  );
  }
  
};


