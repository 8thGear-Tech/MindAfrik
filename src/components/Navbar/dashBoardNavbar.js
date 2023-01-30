import React, { useState } from "react";
import { Link } from "react-router-dom";
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

// internal import
import { DashboardProfileCards } from "../allCards/dashBoardcards";
import admin from "../../data/dashboardNavbar.json";
import counsellor from "../../data/dashboardNavbar.json";
import counsellee from "../../data/dashboardNavbar.json";
//images
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";
import sidebarfooterImage from "../../assets/images/dashboard/sidebarfooterImage.png";

export const DashboardNavbar = () => {
  return (
    <>
      <div className="">
        <div className="d-flex justify-content-between mt-3 justify-content-center ">
          <img
            src={mindafrikfulllogo}
            className="d-inline-block align-top d-none d-sm-none d-lg-block d-md-block"
            alt="MindAfrik logo"
          />
          <div className="d-flex align-items-center">
            {" "}
            <AccountCircleOutlinedIcon className="mx-3" />
            <NotificationsActiveIcon className="mx-3" />
            <LogoutOutlinedIcon className="mx-3" />
          </div>
        </div>
      </div>
    </>
  );
};

//admin dashboard

export const AdminDashboardSideNav = () => {
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
            <DashboardProfileCards />
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
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const Demo = (props) => {
  const { icon, pageroute, dashboard } = props;
  return (
    <>
      <ul className="ps-2">
        <li className="d-flex mb-2 align-items-center SideNavItem">
          <div className="me-3">{icon}</div>
          <Link to={pageroute} className="nav-link">
            <div className="sideNavButton">
              <span>{dashboard}</span>
            </div>
          </Link>
        </li>
        {/* <Link
          to="/adminDashboardCounselleesPage"
          className="text-decoration-none"
        >
          <li className="d-flex mb-4 align-items-center SideNavItem">
            <div className="me-3">
              <AccountCircleOutlinedIcon />
            </div>
            <span>{users}</span>
          </li>
        </Link>
        <li className="d-flex mb-4 align-items-center SideNavItem">
          <div className="me-3">
            <ManOutlinedIcon />
          </div>
          <span>{counsellors}</span>
        </li>
        <li className="d-flex align-items-center SideNavItem mb-4">
          <div className="me-3">
            <NotificationsActiveIcon />
          </div>
          <span className="my-1">{notification}</span>
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
        </li> */}
      </ul>
    </>
  );
};

const BigShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="d-none d-lg-block"
        style={{
          background:
            "linear-gradient(0deg, rgba(20, 129, 92, 0.5), rgba(20, 129, 92, 0.5)), linear-gradient(0deg, #058547, #058547), linear-gradient(0deg, rgba(59, 192, 142, 0.1), rgba(59, 192, 142, 0.1)), #09CD1E",
          width: "20rem",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <DashboardProfileCards />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          {admin.admin.map((navbar) => {
            return (
              <div className="d-flex justify-content-between flex-column">
                <ul className="ps-2" key={navbar.id}>
                  <Demo {...navbar} />
                </ul>
              </div>
            );
          })}
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

//counsellor dashboard

export const CounsellorDashboardSideNav = () => {
  return (
    <>
      <CounsellorSmallShow />
      <CounsellorBigShow />
    </>
  );
};

const CounsellorSmallShowExample = ({ name, ...props }) => {
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
            <DashboardProfileCards />
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
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const CounsellorBigShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="d-none d-lg-block"
        style={{
          background:
            "linear-gradient(0deg, rgba(20, 129, 92, 0.5), rgba(20, 129, 92, 0.5)), linear-gradient(0deg, #058547, #058547), linear-gradient(0deg, rgba(59, 192, 142, 0.1), rgba(59, 192, 142, 0.1)), #09CD1E",
          width: "20rem",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <DashboardProfileCards />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          {counsellor.counsellor.map((navbar) => {
            return (
              <div className="d-flex justify-content-between flex-column">
                <ul className="ps-2" key={navbar.id}>
                  <Demo {...navbar} />
                </ul>
              </div>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const CounsellorBigShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <CounsellorBigShowExample key={idx} {...props} />
      ))}
    </>
  );
};
const CounsellorSmallShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <CounsellorSmallShowExample key={idx} {...props} />
      ))}
    </>
  );
};
//counsellee dashboard

export const CounselleeDashboardSideNav = () => {
  return (
    <>
      <CounselleeSmallShow />
      <CounselleeBigShow />
    </>
  );
};

const CounselleeSmallShowExample = ({ name, ...props }) => {
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
            <DashboardProfileCards />
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
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const CounselleeBigShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="d-none d-lg-block"
        style={{
          background:
            "linear-gradient(0deg, rgba(20, 129, 92, 0.5), rgba(20, 129, 92, 0.5)), linear-gradient(0deg, #058547, #058547), linear-gradient(0deg, rgba(59, 192, 142, 0.1), rgba(59, 192, 142, 0.1)), #09CD1E",
          width: "20rem",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <DashboardProfileCards />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          {counsellee.counsellee.map((navbar) => {
            return (
              <div className="d-flex justify-content-between flex-column">
                <ul className="ps-2" key={navbar.id}>
                  <Demo {...navbar} />
                </ul>
              </div>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const CounselleeBigShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <CounselleeBigShowExample key={idx} {...props} />
      ))}
    </>
  );
};
const CounselleeSmallShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <CounselleeSmallShowExample key={idx} {...props} />
      ))}
    </>
  );
};
