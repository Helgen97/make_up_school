import PasswordSettingsPage from "../../components/PasswordSettingsPage";
import AuthProvider from "../../auth/AuthProvider";

const PasswordSettingsPageProvider = () => {
  return (
    <AuthProvider>
      <PasswordSettingsPage />
    </AuthProvider>
  );
};

export default PasswordSettingsPageProvider;
