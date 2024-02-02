import PropTypes from "prop-types";
import searchIcon from "../assets/search.svg";
import useMovies from "../hooks/useMovies";

function SearchForm({ onSearch }) {
  const { searchTerm, setSearchTerm } = useMovies();

  function handleFormSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img src={searchIcon} alt="search icon" />
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
