import { Component } from "react";
import "./styles.css";

class HarryPotter extends Component {
  state = {
    Search: [
      {
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Poster: "",
      },
    ],
  };

  fetchFilms = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=c559a0ab&s=harry%20potter`,
        { method: "GET" }
      );
      if (response.ok) {
        alert("Data sucessfully fetched");
        let data = await response.json();
        this.setState({
          Search: data.Search,
        });
        console.log(this.state);
      } else {
        alert("Fetching failed");
        console.log("Fetching failed");
      }
    } catch (error) {}
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    return (
      <div className="movie-gallery m-2">
        <h5 className="text-light mt-2 mb-2">Harry Potter</h5>
        <div
          id="new-releases"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="movie-row">
                <div className="row">
                  {this.state.Search.slice(0, 6).map((film) => (
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
                  {this.state.Search.slice(6).map((film) => (
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
  }
}

export default HarryPotter;
