import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { useEffect } from "react";
import { fetchMainDescription } from "../../../store/slicers/mainDescriptionSlicer";

const MainSectionDescription = () => {
  const { locale } = useIntl();
  const dispatch = useDispatch();
  const { loadedDescription, isLoading } = useSelector(
    (state) => state.mainDescription
  );

  useEffect(() => {
    dispatch(fetchMainDescription());
  }, []);

  return (
    <div className="main-description">
      {isLoading && <Loader />}
      {!isLoading && <p>{loadedDescription[locale]}</p>}
    </div>
  );
};

export default MainSectionDescription;
