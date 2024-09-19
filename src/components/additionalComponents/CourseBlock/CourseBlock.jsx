import { useIntl } from "react-intl";
import CourseBlockImage from "../CourseBlockImage";
import CourseBlockDetails from "../CourseBlockDetails";

const CourseBlock = ({ course, modalShowFunction, chooseCourseByClick }) => {
  const { formatMessage, locale } = useIntl();

  const clickHandler = () => {
    chooseCourseByClick(course.id);
    modalShowFunction();
  };

  return (
    <div className="course_block">
      <CourseBlockImage imageUrl={course.imageUrl} />
      <h3 className="course_title">{course[locale].title}</h3>
      <CourseBlockDetails
        courseStart={course[locale].courseStart}
        coursePrice={course[locale].coursePrice}
        courseLessonsAmount={course[locale].courseLessonsAmount}
      />
      <button className="default-btn" onClick={clickHandler}>
        {formatMessage({ id: "learn_more" })}
      </button>
    </div>
  );
};

export default CourseBlock;
