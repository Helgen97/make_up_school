import { useIntl } from "react-intl";

const MainSectionTitle = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="main-title">
      <h1>{formatMessage({ id: "make_up_school" })}</h1>
    </div>
  );
};

export default MainSectionTitle;
