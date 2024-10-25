import BotSettingsPage from "../../components/BotSettingsPage";
import AuthProvider from "../../auth/AuthProvider";

const BotSettingsPageProvider = () => {
  return (
    <AuthProvider>
      <BotSettingsPage />
    </AuthProvider>
  );
};

export default BotSettingsPageProvider;
