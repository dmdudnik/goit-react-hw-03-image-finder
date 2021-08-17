import style from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={image}
        alt=""
        className={style.ImageGalleryItemImage}
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
