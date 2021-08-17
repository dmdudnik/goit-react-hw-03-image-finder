import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ pictures, originImage }) => {
  return (
    <ul className={style.ImageGallery}>
      {pictures.map(({ id, webformatURL, largeImageURL }) => {
        const handleItemClick = () => originImage(largeImageURL);

        return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            onClick={handleItemClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array,
  originImage: PropTypes.func,
};

export default ImageGallery;
