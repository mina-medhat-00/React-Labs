import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";

export default function MainHome() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading || !data) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center g-2 p-2">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
