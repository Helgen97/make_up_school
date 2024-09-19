import PhotoItem from "../PhotoItem";

const PhotoBox = ({ photoUrls = [] }) => {
  return (
    <div className="photo-box">
      {photoUrls.map((photoUrl) => {
        return <PhotoItem key={photoUrl} imageUrl={photoUrl} />;
      })}
    </div>
  );
};

export default PhotoBox;
