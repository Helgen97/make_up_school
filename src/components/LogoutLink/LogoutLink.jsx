import LinkWrapper from "../LinkWrapper";
import LogoutIcon from "../Icons/LogoutIcon";

const LogoutLink = () => {
  return (
    <LinkWrapper href={"/logout"} linkText="Вихід">
      <LogoutIcon />
    </LinkWrapper>
  );
};

export default LogoutLink;
