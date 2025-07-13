import { Link } from "react-router";

export default function Home() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div
        className="card bg-white rounded-5 shadow-lg text-center mx-auto w-100"
        style={{ maxWidth: "512px" }}
      >
        <div className="p-3 my-3">
          <h2 className="font-bold mb-3">Lab One</h2>
          <Link to="/portfolio" className="text-blue-600">
            Go there <span className="ml-1">&rarr;</span>
          </Link>
        </div>
        <div className="p-3 my-3">
          <h2 className="font-bold mb-3">Lab Two</h2>
          <Link to="/users" className="text-blue-600">
            Go there <span className="ml-1">&rarr;</span>
          </Link>
        </div>
        <div className="p-3 my-3">
          <h2 className="font-bold mb-3">Lab Three</h2>
          <Link to="movies" className="text-blue-600">
            Go there <span className="ml-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
