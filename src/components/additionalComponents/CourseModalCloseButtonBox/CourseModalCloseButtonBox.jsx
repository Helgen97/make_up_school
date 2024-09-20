import CloseCrossSvg from "../../svgComponents/CloseCrossSvg";

const CourseModalCloseButtonBox = ({ onClickEvent }) => {
  return (
    <div className="course-modal_close-btn_container">
      <button onClick={onClickEvent}>
        <CloseCrossSvg />
      </button>
    </div>
  );
};

export default CourseModalCloseButtonBox;
