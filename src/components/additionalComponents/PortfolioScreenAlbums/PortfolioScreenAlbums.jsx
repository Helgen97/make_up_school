import { useIntl } from "react-intl";
import PortfolioScreenAlbumItem from "../PortfolioScreenAlbumItem/PortfolioScreenAlbumItem";

const PortfolioScreenAlbums = () => {
  const { formatMessage } = useIntl();

  const MAIN_SCREEN_IMAGES = {
    hrefLink: "/albums",
    images: [
      "./images/album1.jpg",
      "./images/album2.jpg",
      "./images/album3.jpg",
      "./images/album4.jpg",
      "./images/album5.jpg",
      "./images/album6.jpg",
      "./images/album7.jpg",
    ],
  };

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
        <a href="/albums" className="default-btn">
          {formatMessage({ id: "explore" })}
        </a>
      </div>
    </div>
  );
};

export default PortfolioScreenAlbums;
