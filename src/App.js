import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchApi from './services/searchApi';
import Searchbar from './component/Searchbar';
import ImageGallery from './component/ImageGallery';
import Loader from './component/Loader';
import Button from './component/Button';
import Modal from './component/Modal';
import style from './App.module.css';

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: '',
    originImage: '',
    imgTags: '',
    error: '',
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchPictures();
    }
    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  originImage = (originImage = '') => {
    this.setState({ originImage });

    this.toggleModal();
  };

  fetchPictures = () => {
    const { page, query } = this.state;

    const options = {
      page,
      query,
    };

    this.setState({ isLoading: true });

    searchApi(options)
      .then(pictures => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error: 'Picture not found' }))
      .finally(() => this.setState({ isLoading: false }));
  };
  onChangeQuery = query => {
    this.setState({ query: query, page: 1, pictures: [], error: null });
  };

  render() {
    const { pictures, isLoading, error, showModal, originImage, imgTags } =
      this.state;

    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h1>{error}</h1>}
        <ImageGallery pictures={pictures} originImage={this.originImage} />
        {isLoading && <Loader />}
        {pictures.length > 11 && !isLoading && (
          <Button
            onClick={this.fetchPictures}
            aria-label="Найти больше картинок"
          />
        )}
        {showModal && (
          <Modal showModal={this.originImage}>
            <img src={originImage} alt={imgTags} />
          </Modal>
        )}
      </div>
    );
  }
}
App.propTypes = {
  pictures: PropTypes.array,
  page: PropTypes.number,
  query: PropTypes.string,
  originImage: PropTypes.string,
  imgTags: PropTypes.string,
  error: PropTypes.string,
  showModal: PropTypes.bool,
  isLoading: PropTypes.bool,
  'aria-label': PropTypes.string.isRequired,
};

export default App;
