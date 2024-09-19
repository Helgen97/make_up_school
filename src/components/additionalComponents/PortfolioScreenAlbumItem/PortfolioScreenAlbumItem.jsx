import React from "react";

const PortfolioScreenAlbumItem = ({ hrefLink, imageUrl }) => {
  return (
    <div className="album-item">
      <a href={hrefLink}>
        <img src={imageUrl} alt="one of our portfolio work" loading="lazy" />
      </a>
    </div>
  );
};

export default PortfolioScreenAlbumItem;
