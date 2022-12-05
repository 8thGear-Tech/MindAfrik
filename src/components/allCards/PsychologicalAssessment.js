// evaluationCards
// gotYouCoveredCards
//

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import statone from "../../assets/images/stress-evaluation.png";

export const EvaluationCard = (props) => {
  const { headingone, headingtwo, paragraphtext, icon } = props;
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="w-50">
            <Card.Img variant="top" src={statone} />
            <Card.Body className="hello">
              <Card.Title classNam="text-center"> Stress Evaluation</Card.Title>
              {/* <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
