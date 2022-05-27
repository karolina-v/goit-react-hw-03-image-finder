import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
// import Button from './Button';
import './App.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';


export class App extends Component {
  state = {
    inputValue: '',
    showModal: false,
    
  }

  componentDidMount() {
  }


  componentWillUnmount() {
  }

  handleSearchbarSubmit = inputValue => {
    this.setState({ inputValue });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }
  

  render() {
    const { inputValue, showModal } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        
        <ImageGallery inputTag={inputValue}/>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}

        <ToastContainer />
       
      </div>
  );
  }
  
};


