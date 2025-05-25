import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <p className="fs-3">
        <span className="text-danger">Oops!</span> Not Found
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;
