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

const CounselleeDashboardHomePage = () => {
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
                <CounseleeDashboardCard />
              </div>
              <div className="">
                <ExploreCard />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const RegisteredUsersList = () => {
  return (
    <>
      {" "}
      <div className="">
        <div className="d-flex">
          <p className="mt-5">Schedule List</p>
        </div>{" "}
        <Table striped responsive>
          <tbody>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Debbie Luchinar amet</td>
              <td>2-september-2022</td>
              <td>
                <ViewProfileBtn />
              </td>
              <td>
                <AccountCircleOutlinedIcon />
              </td>
            </tr>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Debbie Luchinar amet</td>
              <td>2-september-2022</td>
              <td>
                {" "}
                <ViewProfileBtn />
              </td>
              <td>
                <AccountCircleOutlinedIcon />
              </td>
            </tr>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Debbie Luchinar amet</td>
              <td>2-september-2022</td>
              <td>
                {" "}
                <ViewProfileBtn />
              </td>
              <td>
                <AccountCircleOutlinedIcon />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export const ExploreCard = () => {
  return (
    <>
      {/* <div className="">
        <div className="row mx-2">
          {exploreCardHolder.exploreCards.map((explore) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-4 col-sm-10 my-4"
                  key={explore.id}
                >
                  <SingleExploreCard {...explore} />
                </div>
              </>
            );
          })}
        </div>
      </div> */}
      <div className="container-fluid pb-3 mt-5">
        <Row xs={1} md={2} className="g-0 justify-content-evenly mt-5">
          {exploreCardHolder.exploreCards.map((explore) => {
            return (
              <Col
                className="col-lg-6 col-md-6 col-sm-10 d-flex align-items-stretch"
                key={explore.id}
              >
                <SingleExploreCard {...explore} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default CounselleeDashboardHomePage;
