import TvShowsGenres from "./TvShowsGenres";
import FilmComponent from "./FilmComponent";
import { useSelector } from "react-redux";

const SearchOutput = () => {
  let stateInput = useSelector((state) => state.search.input);
  return (
    <div className="container-fluid" id="container">
      <TvShowsGenres title={"That's what I found:"} />
      <FilmComponent filmName={stateInput} />
    </div>
  );
};
export default SearchOutput;
