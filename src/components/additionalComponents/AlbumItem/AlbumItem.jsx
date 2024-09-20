import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const AlbumItem = ({ albumInfo }) => {
  const { locale } = useIntl();

  return (
    <div className="album-item">
      <Link to={`../album/${albumInfo.id}`} onClick={window.scrollTo(0, -1)}>
        <img src={albumInfo.imageUrl} alt={albumInfo[locale].albumTitle} />
        <h3>{albumInfo[locale].albumTitle}</h3>
        <p>{albumInfo[locale].albumDescription}</p>
      </Link>
    </div>
  );
};

export default AlbumItem;
