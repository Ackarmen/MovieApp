import "./App.css";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";
import useMovies from "./hooks/useMovies";

function App() {
  const { movies, searchMovies } = useMovies();

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <SearchForm onSearch={searchMovies} />

      {movies?.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </div>
  );
}

export default App;
