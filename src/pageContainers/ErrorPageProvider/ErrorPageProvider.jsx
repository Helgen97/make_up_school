import { Link } from "react-router-dom";

const ErrorPageProvider = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-5 p-2 text-center fw-bold">
      <h1 className="fs-big lh-1">404!</h1>
      <p className="fs-4">
        Сторінка не знайдена <br></br> Поверніться на головну
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        На головну
      </Link>
    </div>
  );
};

export default ErrorPageProvider;
