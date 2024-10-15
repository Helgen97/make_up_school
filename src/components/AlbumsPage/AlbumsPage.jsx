import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAlbumById,
  fetchAlbums,
  resetChosenAlbum,
  findAlbumById,
} from "../../store/slices/albumsSlice";
import Grid from "../Grid";
import H3 from "../H3";
import CardWithAddButton from "../CardWithAddButton";
import CustomCard from "../CustomCard";
import AlbumModal from "../AlbumModal/AlbumModal";
import CenteredLoader from "../CenteredLoader";

const AlbumsPage = () => {
  const [{ isOpen, isEdit }, setVars] = useState({
    isOpen: false,
    isEdit: false,
  });

  const { albums, isAlbumsLoading, isAlbumsFetchError } = useSelector(
    (state) => state.albums
  );

  const dispatch = useDispatch();

  const addAlbumButtonHandler = () => {
    dispatch(resetChosenAlbum());
    setVars({
      isOpen: true,
      isEdit: false,
    });
  };

  const editAlbum = (id) => {
    dispatch(findAlbumById(id));
    setVars({ isOpen: true, isEdit: true });
  };

  const deleteAlbum = (id) => {
    dispatch(deleteAlbumById(id));
  };

  const closeModal = () => {
    setVars({
      isOpen: false,
      isEdit: false,
    });
  };

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <div>
      <H3 content="Список альбомів" />
      {isAlbumsLoading && <CenteredLoader />}

      {!isAlbumsFetchError && !isAlbumsLoading && (
        <>
          <Grid container size={12} spacing={3} className="my-3">
            <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
              <CardWithAddButton onClick={addAlbumButtonHandler} />
            </Grid>

            {albums.map((album) => (
              <Grid key={album.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <CustomCard
                  cardTitle={album.ukr.albumTitle}
                  editHandle={() => editAlbum(album.id)}
                  deleteHandle={() => deleteAlbum(album.id)}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <AlbumModal open={isOpen} onClose={closeModal} edit={isEdit} />
    </div>
  );
};

export default AlbumsPage;
