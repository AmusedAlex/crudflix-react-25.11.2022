import TvShowsGenres from "./TvShowsGenres";
import FilmComponent from "./FilmComponent";

const Movies = () => {
  return (
    <div className="container-fluid" id="container">
      <TvShowsGenres title={"Your beloved Movies"} />
      <FilmComponent filmName={"Matrix"} />
      <FilmComponent filmName={"Harry Potter"} />
      <FilmComponent filmName={"Star Wars"} />
    </div>
  );
};
export default Movies;
