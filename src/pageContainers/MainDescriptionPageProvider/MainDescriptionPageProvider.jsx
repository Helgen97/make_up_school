import MainDescriptionPage from "../../components/MainDescriptionPage/";
import AuthProvider from "../../auth/AuthProvider";

const MainDescriptionPageProvider = () => {
  return (
    <AuthProvider>
      <MainDescriptionPage />
    </AuthProvider>
  );
};

export default MainDescriptionPageProvider;
