import Grid from "../Grid";
import H3 from "../H3";
import TextFieldImpl from "../TextFieldImpl";
import CenteredButton from "../CenteredButton";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CenteredLoader from "../CenteredLoader";
import { updateUserPassword } from "../../store/slices/passwordSlice";

const PasswordSettingsPage = () => {
  const [rawPassword, setRawPassword] = useState("");

  const [passwordCheck, setPasswordCheck] = useState("");

  const { isLoading, isError } = useSelector((state) => state.passwordSettings);

  const dispatch = useDispatch();

  const updatePassword = () => {
    if (rawPassword === passwordCheck) {
      dispatch(updateUserPassword(rawPassword));
    }
  };

  return (
    <Grid
      container
      size={12}
      className="justify-content-center align-items-center text-center"
    >
      <Grid size={{ xs: 12, lg: 8 }} className="d-flex flex-column gap-3">
        <H3 content="Зміна паролю" />

        {isLoading && <CenteredLoader />}
        {!isLoading && !isError && (
          <>
            <TextFieldImpl
              value={rawPassword}
              onChange={(event) => setRawPassword(event.target.value)}
              label="Зміна паролю"
              helperText="Введіть новий пароль для входу в панель"
            />
            <TextFieldImpl
              value={passwordCheck}
              onChange={(event) => setPasswordCheck(event.target.value)}
              label="Повторіть пароль"
              helperText="Повторіть ведений вище пароль"
            />
          </>
        )}

        <CenteredButton
          isError={isError}
          buttonText="Змінити пароль"
          onClick={updatePassword}
        />
      </Grid>
    </Grid>
  );
};

export default PasswordSettingsPage;
