import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function MoviesNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to="/movies" className="navbar-brand text-white">
          Movies
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/movies/watchlist" className="nav-link text-white">
              Watchlist
              <span className="fs-6 ms-1">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
