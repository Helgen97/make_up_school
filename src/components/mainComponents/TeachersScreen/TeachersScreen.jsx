import { useIntl } from "react-intl";
import TeachersBox from "../../additionalComponents/TeachersBox";

const TeachersScreen = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="teachers">
      <div className="teachers-screen grid-area">
        <h3>{formatMessage({ id: "our_teachers" })}</h3>
        <TeachersBox />
      </div>
    </section>
  );
};

export default TeachersScreen;
