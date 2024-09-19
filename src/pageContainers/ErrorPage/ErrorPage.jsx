import { useIntl } from "react-intl";

const ErrorPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="error_page">
      <h1 className="error_code">404!</h1>
      <p className="error_text">{formatMessage({id:"404"})}</p>
      <a href="/" className="default-btn">{formatMessage({id: "home"})}</a>
    </div>
  );
};

export default ErrorPage;
