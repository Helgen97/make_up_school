import { useIntl } from "react-intl";

const AlbumItem = ({ albumInfo }) => {
  const { locale } = useIntl();

  return (
    <div className="album-item">
      <a href={`album/${albumInfo.id}`}>
        <img src={albumInfo.imageUrl} alt={albumInfo[locale].albumTitle} />
        <h3>{albumInfo[locale].albumTitle}</h3>
        <p>{albumInfo[locale].albumDescription}</p>
      </a>
    </div>
  );
};

export default AlbumItem;
