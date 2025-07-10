import { Outlet } from "react-router";
import MoviesNavbar from "../components/MoviesNavbar";
import MoviesFooter from "../components/MoviesFooter";

export default function Movies() {
  return (
    <>
      <MoviesNavbar />
      <Outlet />
      <MoviesFooter />
    </>
  );
}
