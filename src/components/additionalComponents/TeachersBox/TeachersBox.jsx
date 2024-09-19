import SwiperWrapper from "../SwiperWrapper";
import SwiperSliderTeacherWrapper from "../SwiperSliderTeacherWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTeachers } from "../../../store/slicers/teacherSlicer";
import Loader from "../Loader";

const TeachersBox = () => {
  const dispatch = useDispatch();
  const { loadedTeachers, isLoading } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  return (
    <div className="teachers-box">
      {isLoading && <Loader />}

      {!isLoading && (
        <SwiperWrapper slidesPerView={1}>
          {loadedTeachers.map((teacherInfo) => {
            return (
              <SwiperSliderTeacherWrapper
                key={teacherInfo.id}
                teacherInfo={teacherInfo}
              />
            );
          })}
        </SwiperWrapper>
      )}
    </div>
  );
};

export default TeachersBox;
