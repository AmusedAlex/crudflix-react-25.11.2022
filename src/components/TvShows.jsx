import TvShowsGenres from "./TvShowsGenres";

import FilmComponent from "./FilmComponent";

const TvShows = () => {
  return (
    <div className="container-fluid" id="container">
      <TvShowsGenres title={"Your favourite Tv Shows"} />
      <FilmComponent filmName={"Outlaws"} />
      <FilmComponent filmName={"Simpsons"} />
      <FilmComponent filmName={"Millionaire"} />
    </div>
  );
};
export default TvShows;
