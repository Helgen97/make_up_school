import { useDispatch } from "react-redux";
import LogoutIcon from "../Icons/LogoutIcon";
import { logOut } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutLink = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <button
      onClick={logout}
      className="btn btn-primary d-flex align-items-center justify-content-center"
    >
      <LogoutIcon />
      Вихід
    </button>
  );
};

export default LogoutLink;
