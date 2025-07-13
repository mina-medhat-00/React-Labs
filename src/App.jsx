import { BrowserRouter, Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./home/pages/Home";
import NotFound from "./home/pages/NotFound";
import Portfolio from "./portfolio/pages/Portfolio";
import Tasks from "./todo/pages/Tasks";
import Users from "./users/pages/Users";
import Movies from "./movies/pages/Movies";
import MoviesHome from "./movies/pages/MoviesHome";
import Watchlist from "./movies/pages/Watchlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="users" element={<Users />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<MoviesHome />} />
          <Route path="watchlist" element={<Watchlist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
