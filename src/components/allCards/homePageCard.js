// howItWorksCard
// whyChooseUsCard
// testimonialsCard

import Card from "react-bootstrap/Card";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CardIcon from "../../assets/images/jeremy-perkins-UgNjyPkphtU-unsplash.jpg";
import howItWorksDatas from "../../data/homePageCards.json";
// import testionalCardDat from "../../data/allCards/Testimonials.json";
import TestimonalCardData from "../../data/allCards/Testimonials.json";
import DataWhyChooseUs from "../../data/whychooseuscard.json";
import testimonial from "../../data/homePageCards.json";
import Container from "react-bootstrap/Container";

//images
import image1 from "../../assets/images/home/image1.png";
import image2 from "../../assets/images/home/image2.png";
import image3 from "../../assets/images/home/image3.png";

export const HowItWorksCard = (props) => {
  const { title, text } = props;
  return (
    <>
      <Card style={{ width: "22rem" }} className="my-3 mx-auto">
        <Card.Body>
          {/* <CreateNewFolderIcon sx={{ fontSize: 40 }} /> */}
          <Card.Title>
            <h4> {title} </h4>
          </Card.Title>
          <Card.Text
          // style={{
          //   fontSize: "1rem",
          //   fontWeight: 300,
          //   lineHeight: "1.75rem",
          //   fontFamily: "Comfortaa",
          // }}
          >
            {text}
          </Card.Text>
          <Card.Link
            // style={{
            //   fontFamily: "Montserrat" && "sans-serif",
            //   fontSize: "1rem",
            //   fontWeight: 600,
            // }}
            href="#"
          >
            Read More
          </Card.Link>
        </Card.Body>
      </Card>
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

export const WhyChooseUsCardNew = () => {
  return (
    <>
      <div className="container-fluid px-4 pb-5 newsletterBg">
        <div className="row justify-content-center">
          <h3 className="text-center mt-5">Why Choose Us</h3>
          <p className="px-5 pb-5 text-center">
            At Mindafrik, we understand that seeking therapy can be a big step,
            and finding the right therapist can make all the difference. That's
            why we offer a range of services and a team of experienced and
            compassionate therapists to help you on your journey toward mental
            wellness. Here are just a few reasons why you should choose us for
            your therapy needs:
          </p>
          <div className="col-lg-4 col-md-4 col-sm-10 px-lg-4 d-flex align-items-center justify-content-center">
            {" "}
            <div className="card mb-5">
              <img
                src={image1}
                className="card-img-top p-5"
                alt="..."
                // style={{ maxWidth: "80%" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#00114C" }}>
                  <b>Experienced and qualified therapists</b>
                </h5>
                <p className="card-text">
                  Our therapists are licensed, experienced and dedicated to
                  helping you achieve your therapy goals. They use
                  evidence-based approaches to address a range of issues,
                  including anxiety, depression, relationship problems, and
                  more.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-10 px-lg-4">
            {/* <div className="col d-lg-flex d-md-flex mb-5 "> */}
            <div className="col">
              <div className="card mb-5" style={{}}>
                <img src={image2} className="card-img-top p-5" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#00114C" }}>
                    <b>Personalised treatment plans</b>
                  </h5>
                  <p className="card-text">
                    We believe that every person's journey to mental wellness is
                    unique, and so is our approach. Our therapists will work
                    with you to create a personalised treatment plan that
                    addresses your specific needs and goals
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-5" style={{}}>
                <img src={image2} className="card-img-top p-5" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#00114C" }}>
                    <b>Flexible scheduling</b>
                  </h5>
                  <p className="card-text">
                    We understand that life can be hectic, which is why we offer
                    flexible scheduling options to accommodate your busy
                    schedule. You can book appointments online, and we also
                    offer evening and weekend sessions.
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 px-lg-4 d-flex align-items-center ">
            {" "}
            <div className="card mb-5" style={{}}>
              <div>
                {" "}
                <img src={image3} className="card-img-top p-5" alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-title" style={{ color: "#00114C" }}>
                  <b>Convenient online therapy</b>
                </h5>
                <p className="card-text">
                  In addition to in-person therapy, we offer online therapy
                  sessions so you can receive the support you need from the
                  comfort of your own home. Our secure platform ensures that
                  your information remains confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid p-5 mx-auto">
        {" "}
        <h3 className="text-center pb-4">Why Choose Us</h3>
        <div className="card-group row justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> */}
        {/* </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div> */}
        {/* <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 m-auto">
            <div className="col d-lg-flex d-md-flex mb-5 ">
              <div className="col"> */}
        {/* <Card className="Card1" style={{ width: "20 rem" }}>
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
                      HEllo
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
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
                      HEllo
                    </Card.Text>
                  </Card.Body>
                </Card> */}
        {/* </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5"> */}
        {/* <Card className="Card1" style={{ width: "20 rem" }}>
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
                    HEllo
                  </Card.Text>
                </Card.Body>
              </Card> */}
        {/* </div>
          </div> */}
      </div>
      {/* </div> */}
    </>
  );
};
export const TestimonialsCard = (props) => {
  const [index, setIndex] = useState(0);
  const { title, subtitle, text } = props;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
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
          <Card
            className="col-3 m-5 CardTestimony"
            style={{
              borderBottomLeftRadius: " 3rem",
              borderTopRightRadius: "3rem",
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
          <Card
            className="col-3 m-5 CardTestimony"
            style={{
              borderBottomLeftRadius: " 3rem",
              borderTopRightRadius: "3rem",
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
      <Carousel.Item>
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
          <Card
            className="col-3 m-5 CardTestimony"
            style={{
              borderBottomLeftRadius: " 3rem",
              borderTopRightRadius: "3rem",
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
          <Card
            className="col-3 m-5 CardTestimony"
            style={{
              borderBottomLeftRadius: " 3rem",
              borderTopRightRadius: "3rem",
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
      <Carousel.Item>
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
          <Card
            className="col-3 m-5 CardTestimony"
            style={{
              borderBottomLeftRadius: " 3rem",
              borderTopRightRadius: "3rem",
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
          <Card
            className="col-3 m-5 CardTestimony"
            style={{
              borderBottomLeftRadius: " 3rem",
              borderTopRightRadius: "3rem",
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
    </Carousel>
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
          {TestimonalCardData.testimonialsData.map((testimony) => {
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

// const TestimonialsNewCard = (props) => {
//   const { name, location, testimonial } = props;
//   return (
//     <>
//       <div className="card p-3">
//         {" "}
//         <h5 className="">{name}</h5>
//         <h6 className="">{location}</h6>
//         <p className="">{testimonial}</p>
//       </div>
//     </>
//   );
// };

// export const TestimonialsNew = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row d-flex justify-content-center my-3">
//         <h3 className="text-center pt-5">Testimonials</h3>
//         <p className="text-center">
//           Don't take our word for it. See what Users are saying about us.
//         </p>
//         {testimonial.testimonials.map((testimonials) => {
//           return (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 px-lg-4 d-flex justify-content-center"
//               key={testimonials.id}
//             >
//               <TestimonialsNewCard {...testimonials}></TestimonialsNewCard>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
