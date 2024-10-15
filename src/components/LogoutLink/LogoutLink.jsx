import LogoutIcon from "../Icons/LogoutIcon";

const LogoutLink = () => {
  return (
    <a
      href="/logout"
      linkText="Вихід"
      className="btn btn-primary d-flex align-items-center justify-content-center"
    >
      <LogoutIcon />
      Вихід
    </a>
  );
};

export default LogoutLink;
