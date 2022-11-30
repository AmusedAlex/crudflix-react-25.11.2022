import TvShowsGenres from "./TvShowsGenres";
import Outlaws from "./Outlaws";

const TvShows = () => {
  return (
    <div className="container-fluid" id="container">
      <TvShowsGenres title={"Your favourite Tv Shows"} />
      <Outlaws />
    </div>
  );
};
export default TvShows;
