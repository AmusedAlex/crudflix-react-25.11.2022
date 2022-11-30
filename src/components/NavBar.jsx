import "../components/styles.css";
import { Navbar, Nav, Dropdown, ButtonGroup } from "react-bootstrap";
import { BellFill } from "react-bootstrap-icons";
// import SearchInput from "./SearchInput";
import { Search } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar bg="black" expand="lg">
      <Link to="/">
        <Navbar.Brand href="#home">
          <img
            alt="Netflix Logo"
            src="./assets/netflix_logo.png"
            className="d-inline-block align-top"
            id="logo"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <div
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
              style={{ color: "grey" }}
            >
              Home
            </div>
          </Link>
          <Link to="/tvshows">
            <div
              className={
                location.pathname === "/tvshows"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ color: "grey" }}
            >
              Tv Shows
            </div>
          </Link>
          <Link to="/movies">
            <div
              className={
                location.pathname === "/movies" ? "nav-link active" : "nav-link"
              }
              style={{ color: "grey" }}
            >
              Movies
            </div>
          </Link>
          <Nav.Link href="#link" style={{ color: "grey" }}>
            Recently Added
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "grey" }}>
            My List
          </Nav.Link>
          {/* RIGHT SIDE starting */}
        </Nav>
        <Nav inline="true">
          <Nav.Link href="#link">
            <Search color="white" />
          </Nav.Link>
          <Nav.Link className="ml-3" href="#link" style={{ color: "grey" }}>
            KIDS
          </Nav.Link>
          <Nav.Link className="ml-3" href="#link">
            <BellFill color="grey" />
          </Nav.Link>
          <Dropdown className="ml-3">
            <Dropdown.Toggle
              variant="secondary"
              as={ButtonGroup}
              id="dropdown-menu-align-responsive-1"
              style={{ background: "transparent", border: "none" }}
            >
              <img
                alt="Avatar"
                src="./assets/avatar.png"
                className="d-inline-block align-top"
                id="avatar"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" style={{ color: "white" }}>
                <img
                  alt="Avatar"
                  src="./assets/avatar.png"
                  className="d-inline-block align-top"
                  id="avatar-small"
                />{" "}
                Alex
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" style={{ color: "white" }}>
                Manage Profile
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" style={{ color: "white" }}>
                Account
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" style={{ color: "white" }}>
                Help Center
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-5" style={{ color: "white" }}>
                Signout Netflix
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="#link"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
