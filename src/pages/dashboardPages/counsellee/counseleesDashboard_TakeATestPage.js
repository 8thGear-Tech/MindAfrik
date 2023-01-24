// external import
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//internal import
import { DashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";

import { CounseleeDashboardCard } from "../../../components/allCards/dashBoardcards";
import { SingleExploreCard } from "../../../components/allCards/dashBoardcards";

import { ViewProfileBtn } from "../../../components/Buttons/actionBtn";

import exploreCardHolder from "../../../data/allCards/exploreCards.json";

//images
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import userone from "../../../assets/images/adminDashboardPage/userone.png";
import counsellorsdashboardimg from "../../../assets/images/counsellorsdashboard/counsellorsdashboardimg.png";

const CounselleeTestPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-cente">
          <div className="col-lg-3">
            <DashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <DashboardNavbar />
              </div>
              <div className="">
                {" "}
                <CounselleeTestCard />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const CounselleeTestCard = () => {
  return (
    <div>
      <div className="counselorsDashboardCard container-fluid">
        <div className="d-flex">
          {" "}
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <img src={counsellorsdashboardimg} alt="" className="ms-2" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 my-auto">
            <h3 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CounselleeTestPage;
