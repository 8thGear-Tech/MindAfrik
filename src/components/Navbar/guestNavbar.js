//external import
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//internal import
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";
import { BookASessionBtn } from "../Buttons/actionBtn";

//icons
import { FacebookIcon } from "../../assets/icons/socialIcons";
import { Instagramicon } from "../../assets/icons/socialIcons";
import { LinkedInicon } from "../../assets/icons/socialIcons";
import { Twittericon } from "../../assets/icons/socialIcons";
import { LoginBtn } from "../Buttons/authenticationBtn";
import { Login } from "@mui/icons-material";

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
};
export const NavSection = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={mindafrikfulllogo}
              className="d-inline-block align-top"
              alt="MindAfrik logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbar-toggler btn"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justifyNavItemsEnd"
          >
            <Nav className="d-flex align-items-center">
              <Nav.Link href="/" className="text-black mx-2 homeLink">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-black mx-2 homeLink">
                About Us
              </Nav.Link>
              {/* <Nav.Link
                href="/psychologicalAssessment"
                className="text-black mx-2"
              >
                Take a Test
              </Nav.Link> */}
              <Nav.Link href="/" className="text-black mx-2">
                Contact
              </Nav.Link>

              <div className="">
                <BookASessionBtn />
              </div>

              {/* <Nav.Link href="#memes" className="text-black mx-2">
              <LoginBtn />
            </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export const NavvSection = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container fluid className="px-5">
        <Navbar.Brand href="#">
          <img
            src={mindafrikfulllogo}
            className="d-inline-block align-top"
            alt="MindAfrik logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Toggle
          className="navbar-toggler btn"
          aria-controls="navbarScroll"
        />
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
          <Nav className="d-flex align-items-center">
            <Nav.Link href="/" className="text-black mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-black mx-2">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="text-black mx-2">
              Contact
            </Nav.Link>
            <Nav.Link
              href="/psychologicalAssessment"
              className="text-black mx-2"
            >
              Take a Test
            </Nav.Link>
            {/* <Nav.Link href="#memes" className="text-black mx-2">
              <LoginBtn />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
