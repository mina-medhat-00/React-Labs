import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div
        className="card bg-white rounded-5 shadow-lg text-center mx-auto w-100"
        style={{ maxWidth: "512px" }}
      >
        <div className="card-body overflow-hidden">
          <h1 className="fw-bolder mb-4">404</h1>
          <h2 className="fw-bold mb-4">Page Not Found</h2>
          <p className="mb-6 text-muted">
            The page you are looking for is not found.
          </p>
          <Link
            to="/"
            className="btn btn-lg bg-dark text-light fw-semibold py-2 px-4 rounded-pill shadow-lg"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
