import { SwiperSlide } from "swiper/react";
import TeachersItem from "../TeacherItem/TeachersItem";

const SwiperSlideTeacherWrapper = ({ teacherInfo }) => {
  return (
    <SwiperSlide>
      <TeachersItem teacherInfo={teacherInfo} />
    </SwiperSlide>
  );
};

export default SwiperSlideTeacherWrapper;

SwiperSlideTeacherWrapper.displayName = "SwiperSlide";
