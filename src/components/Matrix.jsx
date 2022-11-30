import "./styles.css";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const Matrix = () => {
  // state = {
  //   Search: [
  //     {
  //       Title: "",
  //       Year: "",
  //       imdbID: "",
  //       Type: "",
  //       Poster: "",
  //     },
  //   ],
  //   isLoading: true,
  // };

  const [search, setSearch] = useState({
    Search: [
      {
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Poster: "",
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(true);

  const fetchFilms = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=c559a0ab&s=matrix`,
        { method: "GET" }
      );
      if (response.ok) {
        let data = await response.json();
        setTimeout(() => {
          setSearch(data);
          setIsLoading(false);
          console.log(search);
          // this.setState({
          //   Search: data.Search,
          //   isLoading: false,
          // });
        }, 3000);
      } else {
        alert("Fetching failed");
        console.log("Fetching failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  // componentDidMount() {
  //   this.fetchFilms();
  // }

  return (
    <div className="movie-gallery m-2">
      <h5 className="text-light mt-2 mb-2">Matrix</h5>
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
                {search.Search.slice(0, 6).map((film) => (
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
          <div className="carousel-item">
            <div className="movie-row">
              <div className="row">
                {search.Search.slice(6, 13).map((film) => (
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

export default Matrix;
