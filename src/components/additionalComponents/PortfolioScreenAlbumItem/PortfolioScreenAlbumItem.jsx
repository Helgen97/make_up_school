import React from "react";
import { Link } from "react-router-dom";

const PortfolioScreenAlbumItem = ({ hrefLink, imageUrl }) => {
  return (
    <div className="album-item">
      <Link to={hrefLink} onClick={window.scrollTo(0, -1)}>
        <img src={imageUrl} alt="one of our portfolio work" loading="lazy" />
      </Link>
    </div>
  );
};

export default PortfolioScreenAlbumItem;
