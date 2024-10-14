import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSchoolDescriptions,
  updateSchoolDescriptions,
} from "../../store/slices/schoolDescriptionSlice";
import CenteredButton from "../CenteredButton";
import H3 from "../H3";
import CenteredLoader from "../CenteredLoader";
import TextFieldImpl from "../TextFieldImpl";

const SchoolDescriptionPage = () => {
  const [descriptions, setDescriptions] = useState({ ukr: [""], en: [""] });

  const { schoolDescriptions, isLoading, isError } = useSelector(
    (state) => state.school
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchoolDescriptions());
  }, []);

  useEffect(() => {
    setDescriptions(schoolDescriptions);
  }, [schoolDescriptions]);

  const textInputChangeHandler = (event) => {
    const targetName = event.target.name;
    setDescriptions({
      ...descriptions,
      [targetName]: event.target.value.split("\n"),
    });
  };

  const onClickHandle = () => {
    dispatch(updateSchoolDescriptions(descriptions));
  };

  return (
    <div className="d-flex h-100 flex-column align-items-between">
      <H3 content="Інформація про школу" />

      {isLoading && <CenteredLoader />}

      {!isLoading && !isError && (
        <>
          <div className="border my-2 p-2">
            <TextFieldImpl
              name="ukr"
              value={descriptions.ukr.join("\n")}
              label="Опис школи на українській"
              onChange={textInputChangeHandler}
              helperText={"Кожну частину опису вводьте з нового рядка"}
            />
          </div>
          <div className="border my-2 p-2">
            <TextFieldImpl
              name="en"
              value={descriptions.en.join("\n")}
              label="Опис школи на англійській"
              onChange={textInputChangeHandler}
              helperText={"Кожну частину опису вводьте з нового рядка"}
            />
          </div>
        </>
      )}

      <CenteredButton isError={isError} onClick={onClickHandle} />
    </div>
  );
};

export default SchoolDescriptionPage;
