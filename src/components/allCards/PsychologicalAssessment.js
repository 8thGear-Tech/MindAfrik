// evaluationCards
// gotYouCoveredCards
//

// external import
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//internal import

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
