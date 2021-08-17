import { Component } from 'react';
import { createPortal } from 'react-dom';
import style from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.handleBackdropClick}>
        <div className={style.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
