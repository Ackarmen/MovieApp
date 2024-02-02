import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="container">
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
