import { useIntl } from "react-intl";
import CoursesBox from "../../additionalComponents/CoursesBox";

const CoursesScreen = () => {
  const { formatMessage } = useIntl();

  return (
    <section id="courses" className="courses">
      <div className="courses_screen grid-area">
        <h2>{formatMessage({ id: "our_courses" })}</h2>
        <CoursesBox />
      </div>
    </section>
  );
};

export default CoursesScreen;
