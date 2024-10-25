import CoursePage from "../../components/CoursePage";
import AuthProvider from "../../auth/AuthProvider";

const CoursesPageProvider = () => {
  return (
    <AuthProvider>
      <CoursePage />
    </AuthProvider>
  );
};

export default CoursesPageProvider;
