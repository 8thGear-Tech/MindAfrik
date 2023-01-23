import Card from "react-bootstrap/Card";
import { ScheduleASessionIcon } from "../../assets/icons/dashBoardcardIcons";
import { SendBtn } from "../Buttons/actionBtn";
import adminStats from "../../data/allCards/dashboardCards.json";
import exploreCardHolder from "../../data/allCards/exploreCards.json";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// explore_Cards
//AdminStatisticsCards
// dashboardProfile_Cards
// counselorsDashboard_Card
// counseleeProfilePageCard
// viewProfileCard
// counseleeSessionPageCard

//images
import dashboardProfile_CardsImage from "../../assets/images/hero/dashboardProfile_Cards.png";
import counselleeDashboardImage from "../../assets/images/hero/counselleeDashboardImage.png";
import counsellorsdashboardimg from "../../assets/images/counsellorsdashboard/counsellorsdashboardimg.png";

export const SingleExploreCard = (props) => {
  const { exploreParagraphtext, exploreIcon } = props;
  return (
    <>
      <Card border="" style={{ width: "25rem" }} className="me-4">
        {" "}
        <Card.Body>
          {" "}
          <Card.Text>{exploreParagraphtext}</Card.Text>
          <div className="">
            <Card.Img
              src={exploreIcon}
              className=""
              style={{ maxHeight: "50px", maxWidth: "50px" }}
            />
          </div>
          <div>
            <button className="">{props.buttonText}</button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export const ExploreCard = () => {
  return (
    <>
      <div className="">
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
      </div>
    </>
  );
};

export const AdminStatisticsCard = (props) => {
  const { headingone, headingtwo, paragraphtext, icon } = props;
  return (
    <>
      <Card border="" style={{ width: "14rem" }} className="cardShadow">
        <div className="d-flex ms-2 me-4 my-auto">
          {" "}
          <Card.Body>
            {" "}
            <Card.Title className="statFont">
              <b>{headingone}</b>
            </Card.Title>
            <Card.Title className="text-muted textMutedFont">
              {headingtwo}
            </Card.Title>
            <Card.Text>{paragraphtext}</Card.Text>
          </Card.Body>
          <HomeOutlinedIcon className="mt-3" />
          {/* <Card.Img
            variant="top"
            src={icon}
            className="mx-lg-auto img-fluid"
            style={{ maxHeight: "100px", maxWidth: "120px" }}
          /> */}
        </div>
      </Card>
      <br />
    </>
  );
};

export const AdminStatistics = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center py-4">
          {adminStats.adminStatsInfo.map((stats) => {
            return (
              <>
                <div
                  className="col-lg-3 col-md-4 col-sm-10 my-4 d-flex align-items-stretch"
                  key={stats.id}
                >
                  <AdminStatisticsCard {...stats} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

// export const viewProfileCard = () => {
//   return (
//     <>
//       <Card style={{ width: "18rem" }}>
//         <ListGroup variant="flush">
//           <ListGroup.Item>Name: Ayobami kosofe</ListGroup.Item>
//           <ListGroup.Item>Addresses:100 ikorordu Road</ListGroup.Item>
//           <ListGroup.Item>Phone Number : 08033399988</ListGroup.Item>
//           <ListGroup.Item>Email : sample@gmail.com</ListGroup.Item>
//           <ListGroup.Item>Gender : Male</ListGroup.Item>
//           <ListGroup.Item>Degree : M.Sc Psychology</ListGroup.Item>
//           <ListGroup.Item>DOB :06-07-2003</ListGroup.Item>
//         </ListGroup>
//       </Card>
//     </>
//   );
// };
export const DashboardProfileCards = () => {
  return (
    <div className="dashboardProfileCardsBorder ms-5 mt-5">
      <div className="d-flex py-1 ps-3">
        <img src={dashboardProfile_CardsImage} alt="" className="mt-2" />
        <div>
          <ul className="dashboardProfileList mt-3">
            <li>Username</li>
            <li className="py-1">Phone Number</li>
            <li>Email Address</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CounseleeDashboardCard = () => {
  return (
    <div>
      <div className="counselorsDashboardCard container-fluid">
        <div className="d-flex">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-3 ">
            <h3 className="pt-3">Welcome, Peter Uche</h3>
            <p className="pt-5">
              “Not until we are lost do we begin to understand ourselves”
            </p>
          </div>
          <div className="">
            <img src={counselleeDashboardImage} alt="" className="ms-2 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const CounselorsDashboardCard = () => {
  return (
    <div>
      <div className="counselorsDashboardCard container-fluid">
        <div className="d-flex">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-3">
            <h3 className="pt-3">You have an upcoming appointment</h3>
            <p className="pt-2">Tomorrow, Dec 22, 2022</p>
          </div>
          <div className="">
            <img src={counsellorsdashboardimg} alt="" className="ms-2 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CounseleeProfilePageCard = () => {
  return (
    <div className="dashboardProfileCardsBorder ms-5 mt-5">
      <div className="d-flex py-1 ps-3">
        <img src={dashboardProfile_CardsImage} alt="" className="mt-2" />
        <div>
          <ul className="dashboardProfileList mt-3">
            <li>Username</li>
            <li className="py-1">Phone Number</li>
            <li>Email Address</li>
          </ul>
        </div>
      </div>
      <div>
        <button>
          {" "}
          <ArrowBackIcon />
          Michael
        </button>
      </div>
    </div>
  );
};

// <div className="px-3">
//   <div className="px-4 container-fluid pb-4">
//     <div className="row mt-3">
//       <div className="col-lg-6 col-md-12 col-sm-12 ">
//         <h1 className="">5,678</h1>
//         <h4 className="">Total sign up Users</h4>
//         <p className="">+0.5% than last Month</p>
//       </div>
//       <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
//         <img
//           src={statone}
//           className="mx-lg-auto img-fluid "
//           alt=""
//           loading=""
//         />
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };
