import Grid from "../Grid";
import H3 from "../H3";
import TextFieldImpl from "../TextFieldImpl";
import CenteredButton from "../CenteredButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBotSettings, updateBotSettings } from "../../store/slices/botSettingsSlice";
import CenteredLoader from "../CenteredLoader";

const BotSettingsPage = () => {
  const [ currentSettings, setSettings] = useState({
    botToken: "",
    chatId: "",
  });


  const { botSettings, isLoading, isError } = useSelector(
    (state) => state.botSettings
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBotSettings());
  }, []);

  useEffect(() => {
    setSettings(botSettings)
  }, [botSettings])

  const updateSetting = () => {
    dispatch(updateBotSettings(currentSettings));
  }

  return (
    <Grid
      container
      size={12}
      className="justify-content-center align-items-center text-center"
    >
      <Grid size={{ xs: 12, lg: 8 }} className="d-flex flex-column gap-3">
        <H3 content="Налаштування бота" />
        {isLoading && <CenteredLoader />}
        {!isLoading && !isError && (
          <>
            <TextFieldImpl
              value={currentSettings.botToken}
              onChange={(event) => setSettings({...currentSettings, botToken: event.target.value})}
              label="Зміна Token бота"
              helperText="Введіть новий Bot_Token на який будуть приходити повідомлення"
            />
            <TextFieldImpl
              value={currentSettings.chatId}
              onChange={(event) => setSettings({...currentSettings, chatId: event.target.value})}
              label="Зміна чат Id бота"
              helperText="Введіть новий ChatId на який будуть приходити повідомлення"
            />
          </>
        )}
        <CenteredButton
          isError={isError}
          buttonText="Змінити налаштування бота"
          onClick={updateSetting}
        />
      </Grid>
    </Grid>
  );
};

export default BotSettingsPage;
