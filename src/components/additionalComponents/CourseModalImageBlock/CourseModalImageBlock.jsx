const CourseModalImageBlock = ({ imageUrl }) => {
  return (
    <div className="course-modal_img-box">
      <img src={imageUrl} alt="course_image" />
    </div>
  );
};

export default CourseModalImageBlock;
