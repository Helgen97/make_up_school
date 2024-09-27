import Grid from "../Grid";
import H3 from "../H3"
import TextFieldImpl from "../TextFieldImpl";
import CenteredButton from "../CenteredButton";

const SettingsPage = () => {
  return (
    <Grid container size={12} className="justify-content-center align-items-center text-center">
        <Grid size={8} className="d-flex flex-column gap-3">
            <H3 content="Налаштування"/>
            <TextFieldImpl label="Форма зміни паролю" helperText="Введіть новий пароль" />
            <CenteredButton buttonText="Змінити пароль" />
        </Grid>
    </Grid>
  )
}

export default SettingsPage