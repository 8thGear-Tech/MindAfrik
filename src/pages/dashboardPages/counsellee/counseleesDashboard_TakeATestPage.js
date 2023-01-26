// external import
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//internal import
import { CounselleeDashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";

import { CounseleeDashboardCard } from "../../../components/allCards/dashBoardcards";
import { SingleExploreCard } from "../../../components/allCards/dashBoardcards";

import { ViewProfileBtn } from "../../../components/Buttons/actionBtn";
import { ContinueBtn } from "../../../components/Buttons/actionBtn";

import exploreCardHolder from "../../../data/allCards/exploreCards.json";

//images
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import userone from "../../../assets/images/adminDashboardPage/userone.png";
import counselleetestdashboardimg from "../../../assets/images/counselleedashboard/counselleetestdashboardimg.png";

const CounselleeTestPage = () => {
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
      <div className="counselorsDashboardCard container-fluid bgColor">
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <img src={counselleetestdashboardimg} alt="" className="ms-2" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 text-center">
            <h3 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <ContinueBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselleeTestPage;
