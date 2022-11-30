import HarryPotter from "./HarryPotter";
import Matrix from "./Matrix";
import StarWars from "./StarWars";
import TvShowsGenres from "./TvShowsGenres";

const Movies = () => {
  return (
    <div className="container-fluid" id="container">
      <TvShowsGenres title={"Your beloved Movies"} />
      <Matrix />
      <HarryPotter />
      <StarWars />
    </div>
  );
};
export default Movies;
