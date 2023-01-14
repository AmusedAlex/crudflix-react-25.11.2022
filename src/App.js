import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./components/styles.css";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows";
import FilmDetails from "./components/FilmDetails";
import SearchOutput from "./components/SearchOutput";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<TvShows />} path="/tvshows" />
          <Route element={<Movies />} path="/movies" />
          <Route element={<SearchOutput />} path="/search" />
          <Route element={<FilmDetails />} path="/details/:filmId" />
        </Routes>
      </BrowserRouter>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
