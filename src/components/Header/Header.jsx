import Grid  from "../Grid";
import Avatar from "../UserAvatar";
import WelcomeContainer from "../WelcomeContainer";
import LogoutLink from "../LogoutLink";

const Header = () => {
  return (
    <Grid
      size={12}
      className="d-flex align-items-center justify-content-around p-3 shadow-sm gap-4 bg-light"
    >
      <Avatar userName="Olena" />
      <WelcomeContainer userName="Olena" />
      <LogoutLink />
    </Grid>
  );
};

export default Header;
