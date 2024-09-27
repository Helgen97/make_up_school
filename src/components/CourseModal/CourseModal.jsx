import ModalWrapper from "../ModalWrapper";
import ModalPaperWrapper from "../ModalPaperWrapper";
import TextFieldImpl from "../TextFieldImpl";
import CenteredButton from "../CenteredButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createCourse,
  updateCourseById,
} from "../../store/slices/coursesSlice";
import CenteredLoader from "../CenteredLoader";

const CourseModal = ({ open, onClose, edit = false }) => {
  const [course, setCourse] = useState({
    id: 0,
    imageUrl: "",
    ukr: {
      title: "",
      courseStart: "",
      coursePrice: "",
      courseLessonsAmount: "",
      courseTeacher: "",
      courseProgramTitle: "",
      courseProgramList: [""],
    },
    en: {
      title: "",
      courseStart: "",
      coursePrice: "",
      courseLessonsAmount: "",
      courseTeacher: "",
      courseProgramTitle: "",
      courseProgramList: [""],
    },
  });

  const {
    chosenCourse,
    isCourseUpdatingLoading,
    isCourseUpdatingError,
    isCourseCreatingLoading,
    isCourseCreatingError,
  } = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    setCourse(chosenCourse);
  }, [chosenCourse]);

  const clickHandler = () => {
    if (edit) {
      dispatch(
        updateCourseById({ courseId: course.id, updatedCourse: course })
      );
    } else {
      dispatch(createCourse(course));
    }

    onClose();
  };

  const onChangeUAHandler = (event) => {
    let value = event.target.value;
    if (event.target.name === "courseProgramList") {
      value = event.target.value.split("\n");
    }
    let ukr = { ...course.ukr, [event.target.name]: value };
    setCourse({ ...course, ukr: ukr });
  };

  const onChangeENHandler = (event) => {
    let value = event.target.value;
    if (event.target.name === "courseProgramList") {
      value = event.target.value.split("\n");
    }

    let en = { ...course.en, [event.target.name]: value };
    setCourse({ ...course, en: en });
  };

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <span>
        {(isCourseCreatingLoading || isCourseUpdatingLoading) && (
          <CenteredLoader />
        )}

        {!isCourseCreatingLoading &&
          !isCourseCreatingError &&
          !isCourseUpdatingLoading &&
          !isCourseUpdatingError && (
            <ModalPaperWrapper>
              <h4 className="text-center">
                {!edit ? "Створення курсу" : "Редагування курсу"}
              </h4>
              <TextFieldImpl
                helperText="Вставте посилання на фото курсу"
                label="Посилання на фото курсу"
                value={course.imageUrl}
                onChange={(event) =>
                  setCourse({ ...course, imageUrl: event.target.value })
                }
              />
              <TextFieldImpl
                name="title"
                helperText="Введіть назву курсу"
                label="Назва курсу UA"
                value={course.ukr.title}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="title"
                helperText="Введіть назву курсу на англійскій"
                label="Назва курсу EN"
                value={course.en.title}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="courseStart"
                helperText="Введіть дату початку курсу"
                label="Початок навчання UA"
                value={course.ukr.courseStart}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="courseStart"
                helperText="Введіть дату початку курсу на англійскій"
                label="Початок навчання EN"
                value={course.en.courseStart}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="coursePrice"
                helperText="Введіть вартість курсу"
                label="Вартість UA"
                value={course.ukr.coursePrice}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="coursePrice"
                helperText="Введіть вартість курсу на англійскій"
                label="Вартість EN"
                value={course.en.coursePrice}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="courseLessonsAmount"
                helperText="Введіть к-сть занять у курсі"
                label="К-сть занять UA"
                value={course.ukr.courseLessonsAmount}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="courseLessonsAmount"
                helperText="Введіть к-сть занять у курсі на англійській"
                label="К-сть занять EN"
                value={course.en.courseLessonsAmount}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="courseTeacher"
                helperText="Введіть ПІБ викладача"
                label="Викладач UA"
                value={course.ukr.courseTeacher}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="courseTeacher"
                helperText="Введіть ПІБ викладача на англійскій"
                label="Викладач EN"
                value={course.en.courseTeacher}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="courseProgramTitle"
                helperText="Введіть назву навчальної програми. По замовчуванню 'Теорія + Практика'"
                label="Заголовок навчальної програми UA"
                value={course.ukr.courseProgramTitle}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="courseProgramTitle"
                helperText="Введіть назву навчальної програми. По замовчуванню 'Theory + Practice'"
                label="Заголовок навчальної програми EN"
                value={course.en.courseProgramTitle}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="courseProgramList"
                helperText="Введіть список лекцій, що входять до курсу, кожна з нової строки!"
                label="Чек ліст курсу UA"
                value={course.ukr.courseProgramList.join("\n")}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="courseProgramList"
                helperText="Введіть список лекцій, що входять до курсу на англійській, кожна з нової строки!"
                label="Чек ліст курсу EN"
                value={course.en.courseProgramList.join("\n")}
                onChange={onChangeENHandler}
              />
              <CenteredButton
                isError={isCourseCreatingError || isCourseUpdatingError}
                buttonText={!edit ? "Створити курс" : ""}
                onClick={clickHandler}
              />
            </ModalPaperWrapper>
          )}
      </span>
    </ModalWrapper>
  );
};

export default CourseModal;
