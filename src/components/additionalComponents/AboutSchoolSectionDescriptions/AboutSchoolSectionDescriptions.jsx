import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { useEffect } from "react";
import { fetchSchoolDescription } from "../../../store/slicers/schoolDescriptionSlicer";

const AboutSchoolSectionDescriptions = () => {
  const { locale } = useIntl();
  const dispatch = useDispatch();
  const { loadedDescription, isLoading } = useSelector(
    (state) => state.schoolDescription
  );

  useEffect(() => {
    dispatch(fetchSchoolDescription());
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading &&
        loadedDescription[locale].map((description) => {
          return (
            <p key={description} className="school_description">
              {description}
            </p>
          );
        })}
    </>
  );
};

export default AboutSchoolSectionDescriptions;
