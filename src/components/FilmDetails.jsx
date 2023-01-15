import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const FilmDetails = () => {
  const params = useParams();

  const [film, setFilm] = useState({
    Title: "",
    Year: "",
    imdbID: "",
    Type: "",
    Poster: "",
  });

  const navigate = useNavigate();

  const fetchFilm = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_DEV_URL}/medias/${params.filmId}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("🚀 ~ file: FilmDetails.jsx:26 ~ fetchFilm ~ data", data);

        setFilm(data);
      } else {
        alert("Fetching failed");
        console.log("Fetching failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="my-5">
      <Row className="justify-content-center ">
        <Col xs={6} className="d-flex justify-content-center">
          <img src={film.Poster} alt={film.Title} />
        </Col>
        <Col
          xs={6}
          style={{ color: "white" }}
          className="d-flex align-items-center pr-5"
        >
          <div>
            <h2>{film.Title}</h2>
            <h5>{film.Plot}</h5>
            <div>
              Released: {film.Released}, Author: {film.Writer}
            </div>
            <div>Available Languages: {film.Language}</div>
            <Button
              variant="danger"
              className="mt-4"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FilmDetails;
