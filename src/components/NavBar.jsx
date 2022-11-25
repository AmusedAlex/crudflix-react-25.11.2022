import "../components/styles.css";
import { Navbar, Nav, Dropdown, ButtonGroup } from "react-bootstrap";
import { Search, BellFill } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <Navbar bg="black" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt="Netflix Logo"
          src="./assets/netflix_logo.png"
          className="d-inline-block align-top"
          id="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{ color: "grey" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "grey" }}>
            Tv Shows
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "grey" }}>
            Movies
          </Nav.Link>
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
