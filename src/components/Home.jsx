import NewReleases from "./NewReleases";
import TrendingNow from "./TrendingNow";
import TvShowsGenres from "./TvShowsGenres";
import WatchAgain from "./WatchAgain";

const Home = () => {
  return (
    <div className="container-fluid" id="container">
      <TvShowsGenres title={"Welcome, Alex"} />
      <TrendingNow />
      <WatchAgain />
      <NewReleases />
    </div>
  );
};
export default Home;
