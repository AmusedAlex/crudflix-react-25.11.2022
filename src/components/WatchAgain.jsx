import { Component } from "react";

class WatchAgain extends Component {
  render() {
    return (
      <div className="movie-gallery m-2">
        <h5 className="text-light mt-2 mb-2">Watch It Again</h5>
        <div
          id="watch-it-again"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="movie-row">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media6.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media7.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media8.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media9.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media10.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media11.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="movie-row">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media6.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media7.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media8.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media9.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media10.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      className="movie-cover"
                      src="../assets/media/media11.jpg"
                      alt="Movie Cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#watch-it-again"
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
            data-bs-target="#watch-it-again"
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
export default WatchAgain;
