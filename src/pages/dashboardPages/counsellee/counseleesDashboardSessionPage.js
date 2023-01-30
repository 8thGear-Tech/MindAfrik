// external import
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//internal import
import { CounselleeDashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";

import { SingleExploreCard } from "../../../components/allCards/dashBoardcards";

import { ViewProfileBtn } from "../../../components/Buttons/actionBtn";

import exploreCardHolder from "../../../data/allCards/exploreCards.json";

//images
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import userone from "../../../assets/images/adminDashboardPage/userone.png";
import counsellorsdashboardimg from "../../../assets/images/counsellorsdashboard/counsellorsdashboardimg.png";

const CounselleeSession = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-cente">
          <div className="col-lg-3">
            <CounselleeDashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <DashboardNavbar />
              </div>
              <div className="">
                {" "}
                <CounselleeSessionCard />
              </div>
              <div className="">
                {" "}
                <Sessions />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const CounselleeSessionCard = () => {
  return (
    <div>
      <div className="counselorsDashboardCard container-fluid card w-75 px-5 mt-4 ">
        <div className="d-flex">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-3">
            <h3 className="pt-3">You have 0 upcoming sessions</h3>
            {/* <p className="pt-2">Tomorrow, Dec 22, 2022</p> */}
          </div>
          <div className="">
            <img src={counsellorsdashboardimg} alt="" className="ms-2 mt-2" />
          </div>
        </div>
      </div>{" "}
      <div className="d-flex justify-content-between">
        <a href="">Book a session Now</a>
        <a href="/counsellorsDetails">See available counselors</a>
      </div>
    </div>
  );
};

const Sessions = () => {
  return (
    <>
      <div className="d-flex justify-content-center justify-content-around text-center py-5">
        {" "}
        <div>
          <h4>Completed Sessions</h4>
          <p>No sessions available for this category.</p>
        </div>
        <div>
          <h4>Upcoming Sessions</h4>
          <p>No sessions available for this category.</p>
        </div>
      </div>
    </>
  );
};
export default CounselleeSession;
