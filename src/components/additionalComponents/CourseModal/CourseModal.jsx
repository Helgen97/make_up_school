import { useIntl } from "react-intl";
import CourseModalImageBlock from "../CourseModalImageBlock";
import CourseModalDetails from "../CourseModalDetails";
import CourseModalProgramBlock from "../CourseModalProgramBlock";
import ScrollLink from "../ScrollLink";

const CourseModal = ({ chosenCourse, isModalActive, closeModalFunction }) => {
  const { formatMessage, locale } = useIntl();
  return (
    <div className={isModalActive ? "course-modal active" : "course-modal"}>
      <CourseModalImageBlock imageUrl={chosenCourse.imageUrl} />
      <h3 className="course-modal_title">{chosenCourse[locale].title}</h3>
      <CourseModalDetails
        courseStart={chosenCourse[locale].courseStart}
        coursePrice={chosenCourse[locale].coursePrice}
        courseLessonsAmount={chosenCourse[locale].courseLessonsAmount}
        courseTeacher={chosenCourse[locale].courseTeacher}
      />
      <h3 className="course-modal_program-title">
        {formatMessage({ id: "course_program" })}
      </h3>
      <CourseModalProgramBlock
        courseProgramList={chosenCourse[locale].courseProgramList}
        courseProgramTitle={chosenCourse[locale].courseProgramTitle}
      />
      <ScrollLink
        toId="callback"
        className="default-btn"
        onClickEvent={closeModalFunction}
      >
        {formatMessage({ id: "sign_up" })}
      </ScrollLink>
    </div>
  );
};

export default CourseModal;
