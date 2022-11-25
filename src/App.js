import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./components/styles.css";
import TvShowsGenres from "./components/TvShowsGenres";
import TrendingNow from "./components/TrendingNow";
import WatchAgain from "./components/WatchAgain";
import NewReleases from "./components/NewReleases";
import Footer from "./components/Footer";
import HarryPotter from "./components/HarryPotter";

function App() {
  return (
    <>
      <div className="container-fluid" id="container">
        <NavBar />
        <TvShowsGenres />
        <HarryPotter />
        <TrendingNow />
        <WatchAgain />
        <NewReleases />
      </div>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
