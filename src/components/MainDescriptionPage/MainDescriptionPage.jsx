import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMainDescription,
  updateMainDescription,
} from "../../store/slices/mainDescriptionSlice";
import H3 from "../H3";
import CenteredButton from "../CenteredButton";
import TextFieldImpl from "../TextFieldImpl";
import CenteredLoader from "../CenteredLoader";

const MainDescriptionPage = () => {
  const [descriptions, setDescriptions] = useState({ en: "", ukr: "" });

  const { mainContent, isLoading, isError } = useSelector(
    (state) => state.main
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainDescription());
  }, []);

  useEffect(() => {
    setDescriptions(mainContent);
  }, [mainContent]);

  const textInputChangeHandler = (event) => {
    let targetName = event.target.name;

    setDescriptions({
      ...descriptions,
      [targetName]: event.target.value,
    });
  };

  const updateActionHandler = () => {
    dispatch(updateMainDescription(descriptions));
  };

  return (
    <div className="d-flex h-100 flex-column align-items-between">
      <H3 content="Інформація на головній сторінці" />

      {isLoading && <CenteredLoader />}

      {!isLoading && !isError && (
        <>
          <TextFieldImpl
            name={"ukr"}
            value={descriptions.ukr}
            label="Текст на українській"
            helperText="Введіть опис на українській"
            isRequired
            onChange={textInputChangeHandler}
          />
          <TextFieldImpl
            name={"en"}
            value={descriptions.en}
            label="Текст на англійській"
            helperText="Введіть опис на англійській"
            onChange={textInputChangeHandler}
          />
        </>
      )}

      <CenteredButton isError={isError} onClick={updateActionHandler} />
    </div>
  );
};

export default MainDescriptionPage;
