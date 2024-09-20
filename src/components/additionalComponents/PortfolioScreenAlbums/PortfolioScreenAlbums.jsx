import { useIntl } from "react-intl";
import PortfolioScreenAlbumItem from "../PortfolioScreenAlbumItem/PortfolioScreenAlbumItem";
import { Link } from "react-router-dom";
import { MAIN_SCREEN_IMAGES } from "../../../constants/content";

const PortfolioScreenAlbums = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="albums">
      {MAIN_SCREEN_IMAGES.images.map((image) => {
        return (
          <PortfolioScreenAlbumItem
            key={image}
            imageUrl={image}
            hrefLink={MAIN_SCREEN_IMAGES.hrefLink}
          />
        );
      })}
      <div className="album-item albums-description">
        <p>{formatMessage({ id: "portfolio_first_text" })}</p>
        <p>{formatMessage({ id: "portfolio_second_text" })}</p>
        <Link to="/albums" className="default-btn">
          {formatMessage({ id: "explore" })}
        </Link>
      </div>
    </div>
  );
};

export default PortfolioScreenAlbums;
