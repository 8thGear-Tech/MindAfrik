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
import { StartYourAssessmentBtn } from "../../../components/Buttons/actionBtn";

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
      <div className="BgColor">
        <div className="container pt-2 px-4 mt-3">
          <div className="row py-5 px-3 ">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-2  ">
              <img
                src={psychologicalassessmentimage}
                className="mx-lg-auto img-fluid"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-2 align-items-center">
              <h1>Let’s get started!</h1>
              {/* <h2 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
              Welcome Here!
            </h2> */}
              {/* <h4>We can help you find yourself</h4> */}
              <p>
                Please answer the following questions as honestly as possible.
                After completing the test, you will receive a report indicating
                the severity of your symptoms and suggestions for the next
                steps. Please note that this is not a substitute for a full
                diagnostic assessment by a licensed mental health professional.
                If you have any concerns about your mental health, we encourage
                you to reach out to us for an appointment.
              </p>{" "}
              <StartYourAssessmentBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// const GetStarted = () => {
//   return (
//     <>
//       <div className="container-fluid pt-5 px-5 mt-5 BgColor py-5">
//         <div className="row d-flex justify-content-center">
//           <div className="col-lg-6 col-md-12 col-sm-12 ">
//             <img src={psychologicalassessmentimage} />
//           </div>
//           <div className="col-lg-6 col-md-12 col-sm-12 mt-5 align-items-center">
//             <h1>Let’s get started!</h1>
//             {/* <h4>We can help you find yourself</h4> */}
//             <br />
//             <br />
//             <p>
//               Please answer the following questions as honestly as possible.
//               After completing the test, you will receive a report indicating
//               the severity of your symptoms and suggestions for the next steps.
//               Please note that this is not a substitute for a full diagnostic
//               assessment by a licensed mental health professional. If you have
//               any concerns about your mental health, we encourage you to reach
//               out to us for an appointment.
//             </p>{" "}
//             <StartYourAssessmentBtn />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Evaluation = (props) => {
  return (
    <>
      <div className="container-fluid px-5 pb-3 mt-3">
        <Row xs={1} md={2} className="g-0 justify-content-evenly">
          {evaluationInfo.evaluationInfo.map((info) => {
            return (
              <Col
                className="col-lg-12 col-md-12 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch align-items-center"
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
      <div className="container-fluid text-center px-5 pt-5 pb-3 mt-5 gotYouCoveredBg">
        <h3>We’ve Got You Covered</h3>
        <Row xs={1} md={2} className="g-0 justify-content-evenly mt-5">
          {gotYouCoveredCardInfo.gotYouCoveredCardInfo.map((info) => {
            return (
              <Col
                className="col-lg-4 col-md-6 col-sm-10 px-lg-3 px-md-4 px-sm-5 d-flex align-items-stretch"
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
