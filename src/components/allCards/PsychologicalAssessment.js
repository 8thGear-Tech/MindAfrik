// evaluationCards
// gotYouCoveredCards
//

// external import
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//internal import
import { TakeAssessmentBtn } from "../Buttons/actionBtn";

// images
import stressevaluation from "../../assets/images/stress-evaluation.png";

export const EvaluationCard = (props) => {
  const { image, title, paragraph } = props;
  return (
    <>
      {/* <Row xs={1} lg={2} md={1} className="g-0"> */}
      <Row xs={1} md={2} className="g-0 mt-5 d-flex justify-content-evenly">
        <Col className="col-lg-6 col-md-4">
          <div className="px-lg-5">
            <Card.Img variant="top" className="parent" src={image} />
            <Card.Body className="">
              {/* <h4 className="text-center pt-3">{title}</h4> */}
              {/* <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}{" "}
            </Card.Body>
          </div>
        </Col>
        <Col className="col-lg-6 col-md-7 align-items-center my-auto">
          {/* <div className="w-100"> */}
          {/* <Card.Img variant="top" className="parent" src={image} /> */}
          <Card.Body className="align-items-center">
            <h4 className="">{title}</h4>
            <Card.Text>{paragraph}</Card.Text>
          </Card.Body>{" "}
          {/* </div> */} <TakeAssessmentBtn />
        </Col>{" "}
      </Row>
    </>
  );
};

export const GotYouCoveredCard = (props) => {
  const { icon, title, paragraph } = props;
  return (
    <>
      <Card className="mb-5 py-5 gotYouCoveredCardBg">
        {/* <img
          src={experiencedcounsellors}
          className="card-img-center p-5 mx-auto"
          alt="..."
        /> */}
        <Card.Img
          variant="top"
          src={icon}
          style={{ width: "60%" }}
          className="mx-auto p-5"
          // style={{ maxWidth: "70%", maxHeight: "70%" }}
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
