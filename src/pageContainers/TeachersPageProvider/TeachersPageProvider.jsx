import TeachersPage from "../../components/TeachersPage";
import AuthProvider from "../../auth/AuthProvider";

const TeachersPageProvider = () => {
  return (
    <AuthProvider>
      <TeachersPage />
    </AuthProvider>
  );
};

export default TeachersPageProvider;
