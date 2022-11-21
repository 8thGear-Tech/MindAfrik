//external import
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//internal import
import mindafrikfulllogo from "../../src/assets/images/logo/mindafrik-full-logo.png";

//icons
import { FacebookIcon } from "../assets/icons/socialIcons";
import { Instagramicon } from "../assets/icons/socialIcons";
import { LinkedInicon } from "../assets/icons/socialIcons";
import { Twittericon } from "../assets/icons/socialIcons";

export const NavbarSection = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={mindafrikfulllogo}
              style={{ maxWidth: "30%", maxHeight: "30%" }}
              // width="30"
              // height="30"
              className="d-inline-block align-top"
              alt="MindAfrik logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <FacebookIcon />
            <Instagramicon />
            <LinkedInicon />
            <Twittericon />
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
  // <p>Hello</p>;
};
