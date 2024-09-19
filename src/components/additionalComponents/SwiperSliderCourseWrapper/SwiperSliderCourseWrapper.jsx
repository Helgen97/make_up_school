import { SwiperSlide } from "swiper/react";
import CourseBlock from "../CourseBlock";

const SwiperSliderCourseWrapper = ({
  course,
  modalShowFunction,
  chooseCourseByClick,
}) => {
  return (
    <SwiperSlide>
      <CourseBlock
        course={course}
        modalShowFunction={modalShowFunction}
        chooseCourseByClick={chooseCourseByClick}
      />
    </SwiperSlide>
  );
};

export default SwiperSliderCourseWrapper;

SwiperSliderCourseWrapper.displayName = "SwiperSlide";
