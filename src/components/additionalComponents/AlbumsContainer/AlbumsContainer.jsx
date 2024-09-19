import { useDispatch, useSelector } from "react-redux";
import AlbumItem from "../AlbumItem";
import { useEffect } from "react";
import { fetchAlbums } from "../../../store/slicers/albumsSlicer";
import Loader from "../Loader";

const AlbumsContainer = () => {
  const { loadedAlbums = [], isLoading } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div className="albums">
      {isLoading && <Loader />}

      {!isLoading &&
        loadedAlbums.map((albumInfo) => {
          return <AlbumItem key={albumInfo.id} albumInfo={albumInfo} />;
        })}
    </div>
  );
};

export default AlbumsContainer;
