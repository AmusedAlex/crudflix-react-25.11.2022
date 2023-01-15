import "./styles.css";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FilmComponent = (props) => {
  let stateInput = useSelector((state) => state.search.input);
  const [search, setSearch] = useState([
    // {
    //   Title: "",
    //   Year: "",
    //   imdbID: "",
    //   Type: "",
    //   Poster: "",
    // },
  ]);

  const location = window.location.pathname;
  const [input, setInput] = useState(
    location === "/movies" || "/tvshows" ? props.filmName : stateInput
  );

  const [isLoading, setIsLoading] = useState(true);

  const fetchFilms = async () => {
    try {
      let response = await fetch(
        `https://brave-clam-long-underwear.cyclic.app/medias/?search=${input}`,
        { method: "GET" }
      );
      if (response.ok) {
        let data = await response.json();
        setSearch(data);
        setIsLoading(false);
        console.log(data);
      } else {
        alert("Fetching failed");
        console.log("Fetching failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInput(
      location === "/movies" || "/tvshows" ? props.filmName : stateInput
    );
    fetchFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateInput, input]);

  return (
    <div className="movie-gallery m-2">
      <h5 className="text-light mt-3 mb-2">{input}</h5>
      <div id="new-releases" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="movie-row">
              <div className="row">
                {isLoading && (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                )}
                {search.slice(0, 6).map((film) => (
                  <div className="col-md-2" key={film.imdbID}>
                    <Link to={"/details/" + film.imdbID}>
                      <img
                        className="movie-cover"
                        src={film.Poster}
                        alt={film.Title}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="movie-row">
              <div className="row">
                {search.slice(6, 13).map((film) => (
                  <div className="col-md-2" key={film.imdbID}>
                    <img
                      className="movie-cover"
                      src={film.Poster}
                      alt={film.Title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#new-releases"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#new-releases"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </div>
  );
};

export default FilmComponent;
