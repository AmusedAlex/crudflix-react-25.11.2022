import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
  //   const params = useParams();
  return (
    <Container>
      <Row className="justify-content-center ">
        <Col xs={6}>
          <img src="http://placekitten.com/300/300" alt="placekitten" />
        </Col>
        <Col
          xs={6}
          style={{ color: "white" }}
          className="d-flex align-items-center"
        >
          <div>
            <h2>Star Wars Episode 1</h2>
            <div>Type: Movie</div>
            <div>Year: 2022</div>
            <Button variant="danger" className="mt-4">
              Go Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FilmDetails;
