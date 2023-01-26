import { createPortal } from 'react-dom';
import { Component } from 'react';
import { SlClose } from "react-icons/sl";
import css from '../Modal/Modal.module.css';



const modalRoot = document.querySelector('#modal-root')


export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = evt => {
    if (evt.code === 'Escape') {
      // console.log('esc');
      this.props.onClose();
    }
  }

  handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.url} alt='' />
        </div>
        <SlClose className={css.icon} onClick={this.props.onClose} />
      </div>, modalRoot);
  }
}
