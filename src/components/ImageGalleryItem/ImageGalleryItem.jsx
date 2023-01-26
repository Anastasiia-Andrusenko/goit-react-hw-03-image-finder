import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({src, tags, onClick}) => {
  return <li className={css.item}>
    <img src={src} alt={tags} className={css.image} onClick={() => onClick(src)} />
</li>
}


export default ImageGalleryItem;