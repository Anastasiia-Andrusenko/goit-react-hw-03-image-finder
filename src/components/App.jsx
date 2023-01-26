
import { Component } from "react";


import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Notification from "./Notification/Notification";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import fetchImg from "../api/fetch";


export class App  extends Component {
  state = {
    imgArray: [],
    largeImage: "",
    isLoading: false,
    keyWord: '',
    page: 1,
  };


  componentDidUpdate(prevProps, prevState) {
    const prevKeyWord = prevState.keyWord;
    const currentKeyWord = this.state.keyWord;

    if (prevKeyWord !== currentKeyWord) {
      const { keyWord, page } = this.state;
      this.setState({ isLoading: true });
      fetchImg(keyWord, page).then(response => {
        console.log(response.hits);
        this.setState({ imgArray: response.hits});
      }).finally(() => this.setState({isLoading: false}));
    }

  }

  handleFormSubmit = value => {
    console.log(value);
    this.setState({keyWord: value})
  }

  onImgClick = (imgURL) => {
    this.setState({ largeImage: imgURL });
  };

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  fetchImgMoreImg = () => {
    const { keyWord, page } = this.state;

    fetchImg(keyWord, page)
      .then(response => {
        this.setState(prevState => ({
          imgArray: [...prevState.imgArray, ...response.hits],
        }))
      })
  };

  onClose = () => {
    this.setState({ largeImage: '' })
  }

  //   loadMoreBtn = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));

  //   const { keyWord, page } = this.state;

  //   fetchImg(keyWord, page)
  //     .then(response => {
  //       this.setState(prevState => ({
  //         imgArray: [...prevState.imgArray, ...response.hits],
  //       }))
  //     })
  // };
  
  render() {
    const { isLoading, imgArray, largeImage } = this.state;

    return <>
      <Searchbar onSubmit={this.handleFormSubmit} />
      {isLoading &&  <Loader/>}
      {imgArray.length > 0 ? <ImageGallery imgArray={imgArray} onClick={this.onImgClick} /> : <Notification message='enter a keyword to start searching'/>} 
      {largeImage.length > 0 && <Modal url={largeImage} onClose={this.onClose}></Modal>}
      {imgArray.length > 0 && <Button loadMoreBtn={() => { this.loadMoreBtn();  this.fetchImgMoreImg()}}>Load more</Button>}
    </>
  }
}
