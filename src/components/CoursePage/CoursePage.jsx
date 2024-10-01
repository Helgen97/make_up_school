import { useEffect, useState } from "react";
import Grid from "../Grid";
import H3 from "../H3";
import CardWithAddButton from "../CardWithAddButton";
import CustomCard from "../CustomCard";
import CourseModal from "../CourseModal";
import CenteredLoader from "../CenteredLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourseById,
  fetchCourses,
  findCourseById,
  resetChosenCourse,
} from "../../store/slices/coursesSlice";

const CoursePage = () => {
  const [{ isOpen, isEdit }, setVars] = useState({
    isOpen: false,
    isEdit: false,
  });

  const { courses, isCoursesLoading, isCoursesFetchError } = useSelector(
    (state) => state.courses
  );
  const dispatch = useDispatch();

  const addCourseButtonHandler = () => {
    dispatch(resetChosenCourse());
    setVars({
      isOpen: true,
      isEdit: false,
    });
  };

  const editCourse = (id) => {
    dispatch(findCourseById(id));
    setVars({
      isOpen: true,
      isEdit: true,
    });
  };

  const deleteCourse = (id) => {
    dispatch(deleteCourseById(id));
  };

  const closeModal = () => {
    setVars({
      isOpen: false,
      isEdit: false,
    });
  };

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <div>
      <H3 content="Список курсів" />
      {isCoursesLoading && <CenteredLoader />}
      {!isCoursesLoading && !isCoursesFetchError && (
        <Grid container size={12} spacing={3} className="my-3">
          <>
            <Grid size={4}>
              <CardWithAddButton onClick={addCourseButtonHandler} />
            </Grid>
            {courses.map((course) => (
              <Grid key={course.id} size={4}>
                <CustomCard
                  cardTitle={course.ukr.title}
                  editHandle={() => editCourse(course.id)}
                  deleteHandle={() => deleteCourse(course.id)}
                />
              </Grid>
            ))}
          </>
        </Grid>
      )}
      <CourseModal edit={isEdit} open={isOpen} onClose={closeModal} />
    </div>
  );
};

export default CoursePage;
