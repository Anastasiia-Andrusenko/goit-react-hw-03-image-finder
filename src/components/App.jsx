
import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Notification from "./Notification/Notification";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
// import Modal from "./Modal/Modal";




export class App  extends Component {
  state = {
    showModal: false,
    b: '',
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  
  render() {
    return <>
      <Searchbar></Searchbar>
      <Notification message='enter a keyword to start searching'/>
      <ImageGallery />
      {/* <Modal></Modal> */}
      <Loader/>
      <Button>Load more</Button>
    </>
  }
}