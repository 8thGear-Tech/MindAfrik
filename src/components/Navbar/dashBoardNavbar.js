// // DashboardNavbar
// // DashboardSideNav

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavItem from "react-bootstrap/NavItem";
// import NavLink from "react-bootstrap/NavLink";
// import Button from "react-bootstrap/Button";
// // import { Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";

// // import { Collapse, NavbarToggler } from "reactstrap";

// // import
// //   NavbarBrand,
// //   UncontrolledDropdown,
// //   DropdownToggle,
// //   DropdownMenu,
// //   DropdownItem,
// //   NavbarText,
// // } from "reactstrap";

// // import {
// //   Collapse,
// //   Navbar,
// //   NavbarToggler,
// //   NavbarBrand,
// //   Nav,
// //   NavItem,
// //   NavLink,
// // } from "reactstrap";

// const SideBar = () => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <Navbar color="faded" light>
//         <Navbar.Toggle onClick={toggleNavbar} className="mr-2" />
//         <Navbar.Collapse isOpen={!collapsed} navbar>
//           <Nav navbar>
//             <Link to="/home">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default SideBar;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManOutlinedIcon from "@mui/icons-material/ManOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

//images
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";
import sidebarfooterImage from "../../assets/images/dashboard/sidebarfooterImage.png";

export const DashboardNavbar = () => {
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
            <AccountCircleOutlinedIcon className="mx-3" />
            <NotificationsActiveIcon className="mx-3" />
            <LogoutOutlinedIcon className="mx-3" />
            {/* <FacebookIcon />
            <Instagramicon />
            <LinkedInicon />
            <Twittericon /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
  // <p>Hello</p>;
};

export const DashboardSideNav = () => {
  return (
    <>
      <SmallShow />
      <BigShow />
    </>
  );
};

const options = [
  {
    scroll: true,
    backdrop: false,
  },
];

const SmallShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        onClick={toggleShow}
        className="me-2 bg-white border-0 d-lg-none position-fixed start-0 top-0"
      >
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.33333H22.5V11.6667H0V8.33333ZM0 0H30V3.33333H0V0ZM0 20H13.5656V16.6667H0V20Z"
            fill="#006747"
          />
        </svg>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="w-75 d-lg-none text-white"
        {...props}
        style={{
          background:
            "linear-gradient(0deg, rgba(20, 129, 92, 0.5), rgba(20, 129, 92, 0.5)), linear-gradient(0deg, #058547, #058547), linear-gradient(0deg, rgba(59, 192, 142, 0.1), rgba(59, 192, 142, 0.1)), #09CD1E",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {/* <img src={doshlogo} alt="logo" /> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-between flex-column">
            <ul className="ps-2">
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div className="me-3">
                  <HomeOutlinedIcon />
                </div>
                <span>My Dashboard</span>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div className="me-3">
                  <AccountCircleOutlinedIcon />
                </div>
                <span>Users</span>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div className="me-3">
                  <ManOutlinedIcon />
                </div>
                <span>Counselor</span>
              </li>
              <li className="d-flex align-items-center SideNavItem mb-4">
                <div className="me-3">
                  <NotificationsActiveIcon />
                </div>
                <span className="my-1">Notification</span>
              </li>
              <li className="d-flex align-items-center SideNavItem mb-4">
                <div className="me-3">
                  <LogoutOutlinedIcon />
                </div>
                <span>Logout</span>
              </li>
            </ul>
            {/* <ul className="ps-3">
              <li className="d-flex align-items-center SideNavItem mt-5 position-fixed bottom">
                <div className="me-3">
                  <LogoutIcon />
                </div>
                <span>Logout</span>
              </li>
            </ul> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const BigShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      {/* <Button
        onClick={toggleShow}
        className="me-2 bg-white border-0 d-none d-lg-block d-md-block position-fixed start-0 top-0"
      >
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.33333H22.5V11.6667H0V8.33333ZM0 0H30V3.33333H0V0ZM0 20H13.5656V16.6667H0V20Z"
            fill="#006747"
          />
        </svg>
      </Button> */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="d-none d-lg-block"
        style={{
          background:
            "linear-gradient(0deg, rgba(20, 129, 92, 0.5), rgba(20, 129, 92, 0.5)), linear-gradient(0deg, #058547, #058547), linear-gradient(0deg, rgba(59, 192, 142, 0.1), rgba(59, 192, 142, 0.1)), #09CD1E",
          width: "16rem",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            {/* <img src={doshlogo} alt="logo" /> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <div className="d-flex justify-content-between flex-column">
            <ul className="ps-2">
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div className="me-3">
                  <HomeOutlinedIcon />
                </div>
                <span>My Dashboard</span>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div className="me-3">
                  <AccountCircleOutlinedIcon />
                </div>
                <span>Users</span>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div className="me-3">
                  <ManOutlinedIcon />
                </div>
                <span>Counselor</span>
              </li>
              <li className="d-flex align-items-center SideNavItem mb-4">
                <div className="me-3">
                  <NotificationsActiveIcon />
                </div>
                <span className="my-1">Notification</span>
              </li>
              <li className="d-flex align-items-center SideNavItem mb-4">
                <div className="me-3">
                  <LogoutOutlinedIcon />
                </div>
                <span>Logout</span>
              </li>
              <li className="d-flex align-items-center SideNavItem mt-lg-5 pt-lg-2 bottom position-fixed">
                <div className="pt-5 mt-5">
                  <img
                    src={sidebarfooterImage}
                    style={{ maxHeight: "65%", maxWidth: "65%" }}
                  />
                </div>
                {/* <span>Logout</span> */}
              </li>
            </ul>
            {/* <ul className=""> */}

            {/* </ul> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const BigShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <BigShowExample key={idx} {...props} />
      ))}
    </>
  );
};
const SmallShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <SmallShowExample key={idx} {...props} />
      ))}
    </>
  );
};
