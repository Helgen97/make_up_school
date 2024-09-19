import { useIntl } from "react-intl";
import AlbumsContainer from "../../additionalComponents/AlbumsContainer";

const AlbumsScreen = () => {
  const { formatMessage } = useIntl();

  return (
    <main className="albums-page">
      <div className="albums-screen grid-area">
        <h1>{formatMessage({ id: "portfolio" })}</h1>
        <AlbumsContainer />
      </div>
    </main>
  );
};

export default AlbumsScreen;
