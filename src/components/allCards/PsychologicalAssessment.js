// evaluationCards
// gotYouCoveredCards
//

// external import
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//internal import
import gotYouCoveredCardInfo from "../../data/allCards/psychologicalAssessment.json";
import evaluationInfo from "../../data/allCards/psychologicalAssessment.json";

// images
import stressevaluation from "../../assets/images/stress-evaluation.png";

export const EvaluationCard = (props) => {
  const { image, title, paragraph } = props;
  return (
    <>
      {/* <Row xs={1} lg={2} md={1} className="g-0"> */}
      <Row xs={1} md={2} className="g-0 mt-5">
        <Col className="col-lg-6 ">
          <div className="w-75 px-lg-5">
            <Card.Img variant="top" className="parent" src={image} />
            <Card.Body className="">
              <h4 className="text-center pt-3">{title}</h4>
              {/* <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            </Card.Body>
          </div>
        </Col>
        <Col className="col-lg-6 d-flex align-items-center">
          {/* <div className="w-100"> */}
          {/* <Card.Img variant="top" className="parent" src={image} /> */}
          <Card.Body className="">
            <h4 className=" pt-3">{title}</h4>
            <Card.Text>{paragraph}</Card.Text>
          </Card.Body>
          {/* </div> */}
        </Col>
      </Row>
    </>
  );
};
export const Evaluation = (props) => {
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
export const GotYouCoveredCard = (props) => {
  const { icon, title, paragraph } = props;
  return (
    <>
      <Card className="mb-5 py-5 gotYouCoveredCardBg">
        <Card.Img
          variant="top"
          src={icon}
          className="mx-auto"
          style={{ maxWidth: "70%", maxHeight: "70%" }}
          alt=""
        />
        <Card.Body className="text-center">
          <h4 className="pt-3">{title}</h4>
          <Card.Text>{paragraph}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export const GotYouCovered = (props) => {
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
