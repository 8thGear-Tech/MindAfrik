// explore_Cards
// dashboardProfile_Cards
// counselorsDashboard_Card
// counseleeProfilePageCard
// viewProfileCard
// counseleeSessionPageCard
import Card from "react-bootstrap/Card";
import adminStats from "../../data/allCards/dashboardCards.json";

export const AdminStatisticsCard = (props) => {
  const { headingone, headingtwo, paragraphtext, icon } = props;
  return (
    <>
      <Card border="" style={{ width: "25rem" }} className="cardShadow">
        <div className="d-flex align-items-center ms-2 me-4 my-auto">
          {" "}
          <Card.Body>
            {" "}
            <Card.Title>{headingone}</Card.Title>
            <Card.Title>{headingtwo}</Card.Title>
            <Card.Text>{paragraphtext}</Card.Text>
          </Card.Body>
          <Card.Img
            variant="top"
            src={icon}
            className="mx-lg-auto img-fluid"
            style={{ maxHeight: "100px", maxWidth: "120px" }}
          />
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
        <div className="row justify-content-center mx-5 pt-5">
          {adminStats.adminStatsInfo.map((stats) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-4 col-sm-10 my-4"
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
