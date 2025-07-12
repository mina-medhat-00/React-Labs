export default function MovieCard({ movie }) {
  return (
    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
      <div className="card h-100">
        <img
          src={` https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.original_title} poster`}
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="card-title">{movie.original_title}</h6>
          <span className="text-muted">{movie.release_date}</span>
        </div>
      </div>
    </div>
  );
}
