import React from "react";
import { useIntl } from "react-intl";

const CourseModalDetails = ({
  courseStart,
  coursePrice,
  courseLessonsAmount,
  courseTeacher,
}) => {
  const { formatMessage } = useIntl();

  return (
    <div className="courses_details">
      <div className="course_detail">
        <p className="course_detail-title">
          {formatMessage({ id: "course_start" })}
        </p>
        <p className="course_detail-text">{courseStart}</p>
      </div>
      <div className="course_detail">
        <p className="course_detail-title">
          {formatMessage({ id: "course_price" })}
        </p>
        <p className="course_detail-text">{coursePrice}</p>
      </div>
      <div className="course_detail">
        <p className="course_detail-title">
          {formatMessage({ id: "course_lessons_amount" })}
        </p>
        <p className="course_detail-text">{courseLessonsAmount}</p>
      </div>
      <div className="course_detail">
        <p className="course_detail-title">
          {formatMessage({ id: "course_teacher" })}
        </p>
        <p className="course_detail-text">{courseTeacher}</p>
      </div>
    </div>
  );
};

export default CourseModalDetails;
