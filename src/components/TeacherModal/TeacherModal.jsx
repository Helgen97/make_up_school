import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createTeacher,
  updateTeacherById,
} from "../../store/slices/teacherSlice";
import ModalWrapper from "../ModalWrapper";
import ModalPaperWrapper from "../ModalPaperWrapper";
import TextFieldImpl from "../TextFieldImpl";
import CenteredButton from "../CenteredButton";
import CenteredLoader from "../CenteredLoader";

const TeacherModal = ({ open, onClose, edit = false }) => {
  const [teacher, setTeacher] = useState({
    id: 0,
    imageUrl: "",
    ukr: {
      teacherName: "",
      teacherOccupation: "",
      teacherFacts: [""],
      teacherAchievements: [""],
    },
    en: {
      teacherName: "",
      teacherOccupation: "",
      teacherFacts: [""],
      teacherAchievements: [""],
    },
  });

  const {
    chosenTeacher,
    isTeacherCreatingLoading,
    isTeacherCreatingError,
    isTeacherUpdatingLoading,
    isTeacherUpdatingError,
  } = useSelector((state) => state.teachers);

  const dispatch = useDispatch();

  useEffect(() => {
    setTeacher(chosenTeacher);
  }, [chosenTeacher]);

  const clickHandler = () => {
    if (edit) {
      dispatch(
        updateTeacherById({ teacherId: teacher.id, updatedTeacher: teacher })
      );
    } else {
      dispatch(createTeacher(teacher));
    }

    onClose();
  };

  const onChangeUAHandler = (event) => {
    let value = event.target.value;
    if (event.target.name === "teacherFacts") {
      value = event.target.value.split("\n");
    }
    if (event.target.name === "teacherAchievements") {
      value = event.target.value.split("\n");
    }
    let ukr = { ...teacher.ukr, [event.target.name]: value };
    setTeacher({ ...teacher, ukr: ukr });
  };

  const onChangeENHandler = (event) => {
    let value = event.target.value;
    if (event.target.name === "teacherFacts") {
      value = event.target.value.split("\n");
    }
    if (event.target.name === "teacherAchievements") {
      value = event.target.value.split("\n");
    }

    let en = { ...teacher.en, [event.target.name]: value };
    setTeacher({ ...teacher, en: en });
  };

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <span>
        {(isTeacherCreatingLoading || isTeacherUpdatingLoading) && (
          <CenteredLoader />
        )}
        {!isTeacherCreatingLoading &&
          !isTeacherCreatingError &&
          !isTeacherUpdatingLoading &&
          !isTeacherUpdatingError && (
            <ModalPaperWrapper>
              <h4 className="text-center">
                {!edit
                  ? "Додавання викладача"
                  : "Редагування інформації про викладача"}
              </h4>
              <TextFieldImpl
                name="imageUrl"
                label="Посилання на фото викладача"
                helperText="Вставте посилання на фото викладача"
                value={teacher.imageUrl}
                onChange={(event) =>
                  setTeacher({ ...teacher, imageUrl: event.target.value })
                }
              />
              <TextFieldImpl
                name="teacherName"
                label="ПІБ викладача UA"
                helperText="Введіть ПІБ на українській"
                value={teacher.ukr.teacherName}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="teacherName"
                label="ПІБ викладача EN"
                helperText="Введіть ПІБ на англійській"
                value={teacher.en.teacherName}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="teacherOccupation"
                label="Посада викладача UA"
                helperText="Введіть посаду викладача на українській"
                value={teacher.ukr.teacherOccupation}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="teacherOccupation"
                label="Посада викладача EN"
                helperText="Введіть посаду викладача на англійській"
                value={teacher.en.teacherOccupation}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="teacherFacts"
                label="Найголовніші факти про викладача UA"
                helperText="Введіть найголовніші факти про викладача на українській, кожен з нового рядка!"
                value={teacher.ukr.teacherFacts.join("\n")}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="teacherFacts"
                label="Найголовніші факти про викладача EN"
                helperText="Введіть найголовніші факти про викладача на англійській, кожен з нового рядка!"
                value={teacher.en.teacherFacts.join("\n")}
                onChange={onChangeENHandler}
              />
              <TextFieldImpl
                name="teacherAchievements"
                label="Досягнення викладача UA"
                helperText="Введіть досягнення викладача на українській, кожне з нового рядка!"
                value={teacher.ukr.teacherAchievements.join("\n")}
                onChange={onChangeUAHandler}
              />
              <TextFieldImpl
                name="teacherAchievements"
                label="Досягнення викладача EN"
                helperText="Введіть досягнення викладача на англійській, кожне з нового рядка!"
                value={teacher.en.teacherAchievements.join("\n")}
                onChange={onChangeENHandler}
              />
              <CenteredButton
                isError={isTeacherCreatingError || isTeacherUpdatingError}
                buttonText={!edit ? "Додати викладача" : ""}
                onClick={clickHandler}
              />
            </ModalPaperWrapper>
          )}
      </span>
    </ModalWrapper>
  );
};

export default TeacherModal;
