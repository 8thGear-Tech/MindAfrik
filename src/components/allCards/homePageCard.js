// howItWorksCard
// whyChooseUsCard
// testimonialsCard

import Card from "react-bootstrap/Card";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import CardIcon from "../../assets/images/jeremy-perkins-UgNjyPkphtU-unsplash.jpg";
import howItWorksDatas from "../../data/homePageCards.json";
import TestionalCardDat from "../../data/allCards/Testimonials.json";
import DataWhyChooseUs from "../../data/whychooseuscard.json";
import Container from "react-bootstrap/Container";

export const HowItWorksCard = (props) => {
  const { title, text } = props;
  return (
    <>
      <div className="">
        <div className="">
          <Card style={{ width: "20rem" }}>
            <Row>
              <Card.Body>
                <CreateNewFolderIcon sx={{ fontSize: 40 }} />
                <Card.Title>
                  <h4> {title} </h4>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  {text}
                </Card.Text>
                <Card.Link
                  style={{
                    fontFamily: "Montserrat" && "sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                  href="#"
                >
                  Read More
                </Card.Link>
              </Card.Body>
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
};

export const WhyChooseUsCard = (props) => {
  const { title, text } = props;
  return (
    <>
      <Container>
        <Row>
          <Col className="d-sm-block"></Col>
          <Col xs="auto">
            <Card className="Card1" style={{ width: "20 rem" }}>
              <Card.Img
                src={CardIcon}
                className="ChooseImage pt-3"
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h4> Standardized Sessions</h4>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  <p>
                    Lorem ipsum dolor sconsectet adipiscing elit ut aliquam
                    Lorem ipsum dolor sit amet, consectet adipiscing aliquam
                    Lorem ipsum dolor sit amet, consectetur eliqueliadipiscing
                    elit ut aliquam
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className=""></Col>
        </Row>
        <Row xs="auto" md={4} lg={3}>
          <Col>
            <Card className="Card1" style={{ width: "20 rem" }}>
              <Card.Img
                src={CardIcon}
                className="ChooseImage pt-3"
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h4> Safe & Secure</h4>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  <p>
                    Lorem ipsum dolor sconsectet adipiscing elit ut aliquam
                    Lorem ipsum dolor sit amet, consectet adipiscing aliquam
                    Lorem ipsum dolor sit amet, consectetur eliqueliadipiscing
                    elit ut aliquam
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}></Col>
          <Col>
            <Card className="Card1" style={{ width: "20 rem" }}>
              <Card.Img
                src={CardIcon}
                className="ChooseImage pt-3"
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h4> Quality Counsellors </h4>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  <p>
                    Lorem ipsum dolor sconsectet adipiscing elit ut aliquam
                    Lorem ipsum dolor sit amet, consectet adipiscing aliquam
                    Lorem ipsum dolor sit amet, consectetur eliqueliadipiscing
                    elit ut aliquam
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="auto">
            <Card className="Card1" style={{ width: "20 rem" }}>
              <Card.Img
                src={CardIcon}
                className="ChooseImage pt-3"
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h4> Quality Psychologists</h4>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  <p>
                    Lorem ipsum dolor sconsectet adipiscing elit ut aliquam
                    Lorem ipsum dolor sit amet, consectet adipiscing aliquam
                    Lorem ipsum dolor sit amet, consectetur eliqueliadipiscing
                    elit ut aliquam
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {/* <div className="ChooseCard container-fluid mt-5">
        <div className="whychooseus-card1">
          <Card className="Card1" style={{ width: "20 rem" }}>
            <Card.Img
              src={CardIcon}
              className="mt-3"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h4>{title} </h4>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  fontFamily: "Comfortaa",
                }}
              >
                {text}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="whychooseus-card2">
          <Card className="Card1" style={{ width: "20 rem" }}>
            <Card.Img
              src={CardIcon}
              className="ChooseImage pt-3"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h4> {title}</h4>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  fontFamily: "Comfortaa",
                }}
              >
                {text}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="whychooseus-card3">
          <Card className="Card1" style={{ width: "20 rem" }}>
            <Card.Img
              src={CardIcon}
              className="ChooseImage pt-3"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h4> title </h4>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  fontFamily: "Comfortaa",
                }}
              >
                {text}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="whychooseus-card4">
          <Card className="Card1" style={{ width: "20 rem" }}>
            <Card.Img
              src={CardIcon}
              className="ChooseImage pt-3"
              style={{
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h4> {title}</h4>
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                  fontFamily: "Comfortaa",
                }}
              >
                {text}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div> */}
    </>
  );
};
export const TestimonialsCard = (props) => {
  const { title, subtitle, text } = props;
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: "3rem",
                borderTopRightRadius: "3rem",
                border: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>{title}</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  {subtitle}
                </Card.Subtitle>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        {/* <Carousel.Item slide={false}>
          <div className="d-flex justify-content-center">
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Usernmae</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Usename</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="col-3 m-5 CardTestimony"
              style={{
                borderBottomLeftRadius: " 3rem",
                borderTopRightRadius: "3rem",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <h4>Username</h4>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Location
                </Card.Subtitle>
                <Card.Text>
                  We provide access thousand of inspirational materials for
                  healthy and stable mind. As Head of Operations.Daniel is
                  responsible for working with franchisees on all aspects of
                  marketing strategy including digital, public relations,
                  website, etc
                </Card.Text>
              </Card.Body>
            </Card>
          </div> */}
        {/* </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export const HowItWorks = () => {
  return (
    <>
      <div className="container">
        <div className="text-center justify-content-around mt-5 gx-5">
          {howItWorksDatas.homepageData.map((Itworks) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-5 col-sm-12 g-sm-5"
                  key={Itworks.id}
                >
                  <HowItWorksCard {...Itworks} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const Testimonials = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-around">
          {TestionalCardDat.testimonialsData.map((testimony) => {
            return (
              <>
                <div className="col-lg-3 col-md-3 col-sm-3" key={testimony.id}>
                  <TestimonialsCard {...testimony} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
