//external import
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//internal import
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";

//icons
import { FacebookIcon } from "../../assets/icons/socialIcons";
import { Instagramicon } from "../../assets/icons/socialIcons";
import { LinkedInicon } from "../../assets/icons/socialIcons";
import { Twittericon } from "../../assets/icons/socialIcons";

export const NavbarSection = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-light">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={mindafrikfulllogo}
              className="d-inline-block align-top"
              alt="MindAfrik logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler btn"
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll" className="text-center">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <FacebookIcon />
            <Instagramicon />
            <LinkedInicon />
            <Twittericon />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
  // <p>Hello</p>;
};

export const NavSection = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justifyNavItemsEnd"
        >
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#memes">About Us</Nav.Link>
            <Nav.Link href="#memes">Contact</Nav.Link>
            <Nav.Link href="#memes">Take a test</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
