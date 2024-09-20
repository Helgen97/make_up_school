const CourseModalProgramBlock = ({ courseProgramTitle, courseProgramList }) => {
  return (
    <div className="course-modal_program-block">
      <p className="course-modal_program-block_title">{courseProgramTitle}</p>
      <ul className="course-modal_program-block_list">
        {courseProgramList.map((courseProgramItem) => {
          return <li key={courseProgramItem}>{courseProgramItem}</li>;
        })}
      </ul>
    </div>
  );
};

export default CourseModalProgramBlock;
