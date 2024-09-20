import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="error_page">
      <h1 className="error_code">404!</h1>
      <p className="error_text">{formatMessage({ id: "404" })}</p>
      <Link to="/" className="default-btn">
        {formatMessage({ id: "home" })}
      </Link>
    </div>
  );
};

export default ErrorPage;
