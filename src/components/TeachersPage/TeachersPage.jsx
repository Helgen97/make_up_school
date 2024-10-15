import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTeachers,
  resetChosenTeacher,
  findTeacherById,
  deleteTeacherById,
} from "../../store/slices/teacherSlice";
import Grid from "../Grid";
import H3 from "../H3";
import CardWithAddButton from "../CardWithAddButton";
import CustomCard from "../CustomCard";
import TeacherModal from "../TeacherModal/";
import CenteredLoader from "../CenteredLoader";

const TeachersPage = () => {
  const [{ isOpen, isEdit }, setVars] = useState({
    isOpen: false,
    isEdit: false,
  });

  const { teachers, isTeachersLoading, isTeachersFetchError } = useSelector(
    (state) => state.teachers
  );

  const dispatch = useDispatch();

  const addTeacherButtonHandler = () => {
    dispatch(resetChosenTeacher());
    setVars({
      isOpen: true,
      isEdit: false,
    });
  };

  const editTeacher = (id) => {
    dispatch(findTeacherById(id));
    setVars({
      isOpen: true,
      isEdit: true,
    });
  };

  const deleteTeacher = (id) => {
    dispatch(deleteTeacherById(id));
  };

  const closeModal = () => {
    setVars({
      isOpen: false,
      isEdit: false,
    });
  };

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  return (
    <div>
      <H3 content="Список викладачів" />
      {isTeachersLoading && <CenteredLoader />}
      {!isTeachersLoading && !isTeachersFetchError && (
        <Grid container size={12} spacing={3} className="my-3">
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <CardWithAddButton onClick={addTeacherButtonHandler} />
          </Grid>
          {teachers.map((teacher) => (
            <Grid key={teacher.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <CustomCard
                cardTitle={teacher.ukr.teacherName}
                editHandle={() => editTeacher(teacher.id)}
                deleteHandle={() => deleteTeacher(teacher.id)}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <TeacherModal open={isOpen} edit={isEdit} onClose={closeModal} />
    </div>
  );
};

export default TeachersPage;
