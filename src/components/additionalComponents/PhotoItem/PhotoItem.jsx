const PhotoItem = ({ imageUrl }) => {
  return (
    <a className="photo-item" href={imageUrl} data-lightbox="portfolio">
      <img src={imageUrl} alt="portfolio work" loading="lazy" />
    </a>
  );
};

export default PhotoItem;
