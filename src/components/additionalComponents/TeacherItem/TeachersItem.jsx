import { useIntl } from "react-intl";

const TeachersItem = ({ teacherInfo }) => {
  const { locale } = useIntl();

  return (
    <div className="teacher-item">
      <div className="teacher-photo_box">
        <img src={teacherInfo.imageUrl} alt={teacherInfo.teacherName} loading="lazy"/>
      </div>
      <h2 className="teacher-name">{teacherInfo[locale].teacherName}</h2>
      <p className="teacher-occupation">
        {teacherInfo[locale].teacherOccupation}
      </p>
      <ul className="teacher-facts-list">
        {teacherInfo[locale].teacherFacts.map((teacherFact) => {
          return <li key={teacherFact}>{teacherFact}</li>;
        })}
      </ul>
      <ul className="teacher-achievements-list">
        {teacherInfo[locale].teacherAchievements.map((teacherAchievement) => {
          return <li key={teacherAchievement}>{teacherAchievement}</li>;
        })}
      </ul>
    </div>
  );
};

export default TeachersItem;
