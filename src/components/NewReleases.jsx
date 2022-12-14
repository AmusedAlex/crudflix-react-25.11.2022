const NewReleases = () => {
  return (
    <div className="movie-gallery m-2">
      <h5 className="text-light mt-2 mb-2">New Releases</h5>
      <div id="new-releases" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="movie-row">
              <div className="row">
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media12.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media13.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media14.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media15.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media16.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media17.jpg"
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
                    src="../assets/media/media12.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media13.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media14.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media15.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media16.jpg"
                    alt="Movie Cover"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    className="movie-cover"
                    src="../assets/media/media17.jpg"
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

export default NewReleases;
