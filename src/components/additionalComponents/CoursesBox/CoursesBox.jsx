import SwiperWrapper from "../SwiperWrapper";
import SwiperSliderCourseWrapper from "../SwiperSliderCourseWrapper";
import CourseModal from "../CourseModal/CourseModal";
import { useEffect, useState } from "react";
import { ClickAwayListener } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  chooseCourse,
} from "../../../store/slicers/coursesSlicer";
import Loader from "../Loader";

const CoursesBox = () => {
  const [isModalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const { loadedCourses, chosenCourse, isLoading } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const chooseCourseByClick = (id) => {
    dispatch(chooseCourse(id));
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const showModal = () => {
    setModalActive(true);
  };

  const BREAKPOINTS = {
    319: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    743: {
      slidesPerView: loadedCourses.length < 2 ? loadedCourses.length : 3,
      spaceBetween: 32,
    },
    1279: {
      slidesPerView: loadedCourses.length < 2 ? loadedCourses.length : 3,
      spaceBetween: 32,
    },
  };

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <ClickAwayListener onClickAway={closeModal}>
          <div className="courses_box">
            <SwiperWrapper breakpoints={BREAKPOINTS}>
              {loadedCourses.map((course) => {
                return (
                  <SwiperSliderCourseWrapper
                    key={course.id}
                    course={course}
                    modalShowFunction={showModal}
                    chooseCourseByClick={chooseCourseByClick}
                  />
                );
              })}
            </SwiperWrapper>
            <CourseModal
              chosenCourse={chosenCourse}
              isModalActive={isModalActive}
              closeModalFunction={closeModal}
            />
          </div>
        </ClickAwayListener>
      )}
    </>
  );
};
export default CoursesBox;
