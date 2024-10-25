import IndexPage from "../../components/IndexPage";
import AuthProvider from "../../auth/AuthProvider";

const IndexPageProvider = () => {
  return (
    <AuthProvider>
      <IndexPage />
    </AuthProvider>
  );
};

export default IndexPageProvider;
