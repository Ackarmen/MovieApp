import { useEffect, useState } from "react";

const API_URL = "http://www.omdbapi.com/?apikey=53187ae5";

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  return {
    movies,
    searchMovies: fetchMovies,
    searchTerm,
    setSearchTerm,
  };
}

export default useMovies;
