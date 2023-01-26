import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = () => {
  return <ul className={css.gallery}>
    <ImageGalleryItem/>
</ul>
}

export default ImageGallery;