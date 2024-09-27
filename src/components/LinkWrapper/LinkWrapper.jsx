import { Link } from "react-router-dom";

const LinkWrapper = ({ linkText, children, href }) => {
  return (
    <Link
      to={href}
      className="btn btn-primary d-flex align-items-center justify-content-center"
    >
      {children}
      {linkText}
    </Link>
  );
};

export default LinkWrapper;
