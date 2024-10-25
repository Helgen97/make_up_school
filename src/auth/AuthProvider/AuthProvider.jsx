import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthIsValid } from "../../store/slices/authSlice";
import { useLocation, Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const { pathname } = useLocation();

  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthIsValid());
  }, []);

  if (!isAuth && pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default AuthProvider;
