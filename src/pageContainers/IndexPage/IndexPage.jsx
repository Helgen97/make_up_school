import MainSection from "../../components/mainComponents/MainSection";
import AboutSchoolSection from "../../components/mainComponents/AboutSchoolSection";
import CoursesScreen from "../../components/mainComponents/CoursesScreen";
import LeaveContactsScreen from "../../components/mainComponents/LeaveContactsScreen";
import TeacherScreen from "../../components/mainComponents/TeachersScreen";
import PortfolioScreen from "../../components/mainComponents/PortfolioScreen/";

const IndexPage = () => {
  return (
    <>
      <MainSection />
      <AboutSchoolSection />
      <CoursesScreen />
      <LeaveContactsScreen idName="contactsScreen1" />
      <TeacherScreen />
      <PortfolioScreen />
      <LeaveContactsScreen idName="contactsScreen2" />
    </>
  );
};

export default IndexPage;
