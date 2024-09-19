const CourseBlockImage = ({ imageUrl }) => {
  return (
    <div>
      <img
        className="course_img"
        src={imageUrl}
        alt="Course Image"
        loading="lazy"
      />
    </div>
  );
};

export default CourseBlockImage;
