import Grid from "../../components/Grid";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

const Layout = () => {
  return (
    <Grid container spacing={3} className="m-3 p-3 shadow bg-light">
      <Header />
      <Sidebar />
      <Main />
    </Grid>
  );
};

export default Layout;
