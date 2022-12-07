import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ScheduleASessionIcon } from "../../assets/icons/dashBoardcardIcons";
// explore_Cards
// dashboardProfile_Cards
// counselorsDashboard_Card
// counseleeProfilePageCard
// viewProfileCard
// counseleeSessionPageCard
//AdminStatisticsCards

export const ExploreCards = () => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <div className="row">
          <Card.Text className="col-lg-10 col-md-10 col-sm-10 d-none d-md-block">
            Feeling Overwhelmed? Talk to our Therapists. they are here to help
            you.
          </Card.Text>

          {/* To appear on mobile start*/}
          <Card.Text className="text-center d-md-none d-xs-block">
            Feeling Overwhelmed? Talk to our Therapists. they are here to help
            you.
          </Card.Text>
          {/* To appear on mobile end */}

          <div className="col-lg-2 col-md-2 col-sm-2 videoIcon d-none d-md-block">
            <ScheduleASessionIcon />
          </div>

          {/* To appear on mobile start*/}
          <div className="text-center d-md-none d-xs-block">
            <ScheduleASessionIcon />
          </div>
          {/* To appear on mobile end*/}
        </div>
        <div className="d-none d-md-block">
          <Button className="scheduleASession">Go somewhere</Button>
        </div>

        {/* To appear on mobile start */}
        <div className="text-center my-2 d-md-none d-xs-block">
          <Button className="">Go somewhere</Button>
        </div>
        {/* To appear on mobile end */}
      </Card.Body>
    </Card>
  );
};
