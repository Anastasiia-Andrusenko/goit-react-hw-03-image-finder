
import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Notification from "./Notification/Notification";

export class App  extends Component {
  state = {
  a: '',
  b: '',
  
  }
  
  render() {
    return <>
      <Searchbar></Searchbar>
      <Notification message='enter a keyword to start searching'/>
      <ImageGallery/>
    </>
  }
}