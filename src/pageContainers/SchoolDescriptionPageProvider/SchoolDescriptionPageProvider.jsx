import SchoolDescriptionPage from "../../components/SchoolDescriptionPage";
import AuthProvider from "../../auth/AuthProvider";

const SchoolDescriptionPageProvider = () => {
  return (
    <AuthProvider>
      <SchoolDescriptionPage />
    </AuthProvider>
  );
};

export default SchoolDescriptionPageProvider;
