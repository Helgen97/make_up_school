import AlbumsPage from "../../components/AlbumsPage";
import AuthProvider from "../../auth/AuthProvider";

const AlbumsPageProvider = () => {
  return (
    <AuthProvider>
      <AlbumsPage />
    </AuthProvider>
  );
};

export default AlbumsPageProvider;
