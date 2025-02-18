import Grid from "../Grid";
import H3 from "../H3";
import TextFieldImpl from "../TextFieldImpl";
import CenteredButton from "../CenteredButton";
import CenteredLoader from "../CenteredLoader";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logIn } from "../../store/slices/authSlice";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    login: "",
    password: "",
  });

  const { isAuth, isLoading, isError } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  const processLogin = () => {
    if (credentials.login === "" || credentials.password === "") {
      return;
    }
    dispatch(logIn(credentials));
  };

  if (isAuth) return <Navigate to="/" />;

  return (
    <Grid
      container
      size={12}
      className="justify-content-center align-items-center text-center"
    >
      <Grid size={{ xs: 12, lg: 8 }} className="d-flex flex-column gap-3">
        <H3 content="Вхід до панелі" />

        {isLoading && !isError && <CenteredLoader />}
        {!isLoading && (isError || !isError) && (
          <>
            <TextFieldImpl
              value={credentials.login}
              onChange={(event) =>
                setCredentials({ ...credentials, login: event.target.value })
              }
              maxRows={1}
              label="Ваш логін"
              helperText="Введіть ваш логін"
            />
            <TextFieldImpl
              maxRows={1}
              value={credentials.password}
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
              label="Введіть пароль"
              helperText="Введіть ваш пароль"
            />
          </>
        )}

        <CenteredButton
          buttonText={isError ? "Спробуйте ще раз, неправильні дані" : "Вхід"}
          onClick={processLogin}
        />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
