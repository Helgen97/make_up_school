import { useParams } from "react-router-dom";
import PhotoBox from "../../additionalComponents/PhotoBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { fetchAlbum } from "../../../store/slicers/albumSlicer";
import Loader from "../../additionalComponents/Loader";

const AlbumScreen = () => {
  const { locale } = useIntl();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loadedAlbum, isLoading } = useSelector((state) => state.album);

  useEffect(() => {
    dispatch(fetchAlbum(id));
  }, []);

  return (
    <main className="albums-page">
      <div className="albums-screen grid-area">
        {isLoading && <Loader />}

        {!isLoading && (
          <>
            <h1>{loadedAlbum[locale].albumTitle}</h1>
            <h2>{loadedAlbum[locale].albumDescription}</h2>
            <PhotoBox photoUrls={loadedAlbum.photoUrls} />
          </>
        )}
      </div>
    </main>
  );
};

export default AlbumScreen;
