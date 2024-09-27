import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSchoolDescriptions,
  updateSchoolDescriptions,
} from "../../store/slices/schoolDescriptionSlice";
import CenteredButton from "../CenteredButton";
import H3 from "../H3";
import CenteredLoader from "../CenteredLoader";
import TextFieldWithButton from "../TextFieldWithButton";
import TextFieldImpl from "../TextFieldImpl";

const SchoolDescriptionPage = () => {
  const [descriptions, setDescriptions] = useState({ ukr: [""], en: [""] });

  const { schoolDescriptions, isLoading, isError, isSuccess } = useSelector(
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
    const newArray = descriptions[event.target.name].map(
      (description, index) => {
        if (index === +event.target.dataset.index) {
          return event.target.value;
        }
        return description;
      }
    );
    setDescriptions({ ...descriptions, [event.target.name]: newArray });
  };

  const onClickHandle = () => {
    dispatch(updateSchoolDescriptions(descriptions));
  };

  const addInputToArray = (event) => {
    let name = event.currentTarget.dataset.name;
    let newArray = descriptions[name].concat("");
    setDescriptions({ ...descriptions, [name]: newArray });
  };

  return (
    <div className="d-flex h-100 flex-column align-items-between">
      <H3 content="Інформація про школу" />

      {isLoading && <CenteredLoader />}

      {!isLoading && !isError && (
        <>
          <div className="border my-2 p-2">
            {descriptions.ukr.map((description, index) => {
              if (index === descriptions.ukr.length - 1) {
                return (
                  <TextFieldWithButton
                    key={"input" + index}
                    name="ukr"
                    value={description}
                    dataIndex={index}
                    label="Опис школи на українській"
                    onClick={addInputToArray}
                    onChange={textInputChangeHandler}
                  />
                );
              } else {
                return (
                  <TextFieldImpl
                    key={"input" + index}
                    name="ukr"
                    value={description}
                    dataIndex={index}
                    label="Опис школи на українській"
                    onChange={textInputChangeHandler}
                  />
                );
              }
            })}
          </div>
          <div className="border my-2 p-2">
            {descriptions.en.map((description, index) => {
              if (index === descriptions.en.length - 1) {
                return (
                  <TextFieldWithButton
                    key={"input" + index}
                    name="en"
                    value={description}
                    dataIndex={index}
                    label="Опис школи на англійській"
                    onClick={addInputToArray}
                    onChange={textInputChangeHandler}
                  />
                );
              } else {
                return (
                  <TextFieldImpl
                    key={"input" + index}
                    name="en"
                    value={description}
                    dataIndex={index}
                    label="Опис школи на англійській"
                    onChange={textInputChangeHandler}
                  />
                );
              }
            })}
          </div>
        </>
      )}

      <CenteredButton isError={isError} onClick={onClickHandle} />
    </div>
  );
};

export default SchoolDescriptionPage;
