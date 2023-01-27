//external import
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//internal import
import { NavSection } from "../../../components/Navbar/guestNavbar";
import { PsychologicalAssessmentHero } from "../../../components/hero";
import { EvaluationCard } from "../../../components/allCards/PsychologicalAssessment";
import { GotYouCoveredCard } from "../../../components/allCards/PsychologicalAssessment";
import evaluationInfo from "../../../data/allCards/psychologicalAssessment.json";
import gotYouCoveredCardInfo from "../../../data/allCards/psychologicalAssessment.json";

//image
import psychologicalassessmentimage from "../../../assets/images/psychologicalassessment/psychologicalassessmentimage.png";

const PsychologicalAssessment = () => {
  return (
    <>
      <NavSection />
      <PsychologicalAssessmentHero />
      <GetStarted />
      <Evaluation />
      <GotYouCovered />
    </>
  );
};

const GetStarted = () => {
  return (
    <>
      <div className="container-fluid pt-5 px-5 mt-5">
        <div className=" row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img src={psychologicalassessmentimage} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 align-items-center">
            <h1>You don't feel good?</h1>
            <br></br>
            <h4>We can help you find yourself</h4>
            <br></br>
            <p>
              Mental test is self care and development for healthy connection
              between your soul and body. Mental test is self care and
              development for healthy connection between your soul and body.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Evaluation = (props) => {
  return (
    <>
      <div className="container-fluid px-5 pt-5 pb-3 mt-5">
        <Row xs={1} md={2} className="g-0 justify-content-evenly mt-5">
          {evaluationInfo.evaluationInfo.map((info) => {
            return (
              <Col
                className="col-lg-12 col-md-12 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch"
                key={info.id}
              >
                <EvaluationCard {...info} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

const GotYouCovered = (props) => {
  return (
    <>
      <div className="container-fluid text-center px-5 pt-5 pb-3 mt-5">
        <Row xs={1} md={2} className="g-0 justify-content-evenly mt-5">
          {gotYouCoveredCardInfo.gotYouCoveredCardInfo.map((info) => {
            return (
              <Col
                className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch"
                key={info.id}
              >
                <GotYouCoveredCard {...info} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default PsychologicalAssessment;
