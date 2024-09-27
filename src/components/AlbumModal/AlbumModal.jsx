import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createAlbum, updateAlbumById } from "../../store/slices/albumsSlice";
import ModalWrapper from "../ModalWrapper";
import ModalPaperWrapper from "../ModalPaperWrapper";
import TextFieldImpl from "../TextFieldImpl";
import CenteredButton from "../CenteredButton";
import CenteredLoader from "../CenteredLoader";

const AlbumModal = ({ open, onClose, edit = false }) => {
  const [album, setAlbum] = useState({
    id: 0,
    imageUrl: "",
    ukr: {
      albumTitle: "",
      albumDescription: "",
    },
    en: {
      albumTitle: "",
      albumDescription: "",
    },
    photoUrls: [""],
  });

  const {
    chosenAlbum,
    isAlbumCreatingLoading,
    isAlbumCreatingError,
    isAlbumUpdatingLoading,
    isAlbumUpdatingError,
  } = useSelector((state) => state.albums);

  const dispatch = useDispatch();

  useEffect(() => {
    setAlbum(chosenAlbum);
  }, [chosenAlbum]);

  const clickHandler = () => {
    if (edit) {
      dispatch(updateAlbumById({ albumId: album.id, updatedAlbum: album }));
    } else {
      dispatch(createAlbum(album));
    }

    onClose();
  };

  const onChangeUAHandler = (event) => {
    let value = event.target.value;
    let ukr = { ...album.ukr, [event.target.name]: value };
    setAlbum({ ...album, ukr: ukr });
  };

  const onChangeENHandler = (event) => {
    let value = event.target.value;
    let en = { ...album.en, [event.target.name]: value };
    setAlbum({ ...album, en: en });
  };

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <span>
        {(isAlbumCreatingLoading || isAlbumUpdatingLoading) && (
          <CenteredLoader />
        )}
        {!isAlbumCreatingLoading &&
          !isAlbumCreatingError &&
          !isAlbumUpdatingLoading &&
          !isAlbumUpdatingError && (
            <ModalPaperWrapper>
              <h4 className="text-center">
                {!edit
                  ? "Додавання альбому"
                  : "Редагування інформації в альбомі"}
              </h4>
              <TextFieldImpl
                name="imageUrl"
                label="Посилання на заставку альбому"
                helperText="Вставте посилання на заставку альбому"
                value={album.imageUrl}
                onChange={(event) =>
                  setAlbum({ ...album, imageUrl: event.target.value })
                }
              />
              <TextFieldImpl
                name="albumTitle"
                label="Назва альбому UA"
                helperText="Введіть назву альбому на українській"
                value={album.ukr.albumTitle}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="albumTitle"
                label="Назва альбому EN"
                helperText="Введіть назву альбому на англійській"
                value={album.en.albumTitle}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="albumDescription"
                label="Короткий опис альбому UA"
                helperText="Введіть короткий опис альбому на українській"
                value={album.ukr.albumDescription}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="albumDescription"
                label="Короткий опис альбому EN"
                helperText="Введіть короткий опис альбому на англійській"
                value={album.en.albumDescription}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="photoUrls"
                label="Список посилань на фото"
                helperText="Введіть список посилань на кожне фото з альбому, кожне з нового рядка!"
                value={album.photoUrls.join("\n")}
                onChange={(event) =>
                  setAlbum({
                    ...album,
                    photoUrls: event.target.value.split("\n"),
                  })
                }
              />
              <CenteredButton
                isError={isAlbumCreatingError || isAlbumUpdatingError}
                buttonText={!edit ? "Додати альбом" : ""}
                onClick={clickHandler}
              />
            </ModalPaperWrapper>
          )}
      </span>
    </ModalWrapper>
  );
};

export default AlbumModal;
