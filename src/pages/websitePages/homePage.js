//data
import howItWorksData from "../../data/homePageCards.json";
import howItWorksDataTwo from "../../data/homePageCards.json";

//components
import { NavSection } from "../../components/Navbar/guestNavbar";
import { HowItWorksCard } from "../../components/allCards/homePageCard";
import { HomePageHero } from "../../components/hero";
import { WhyChooseUsCardNew } from "../../components/allCards/homePageCard";
import { TestimonialCarousel } from "../../components/allCards/homePageCard";
import { TestimonialCarouselTwo } from "../../components/allCards/homePageCard";
// import { TestimonialsCard } from "../../components/allCards/homePageCard";
import { TestimonialsNew } from "../../components/allCards/homePageCard";
import { BookASessionBtn } from "../../components/Buttons/actionBtn";

import { SubscribeBtn } from "../../components/Buttons/actionBtn";
import { Testimonials } from "../../components/allCards/homePageCard";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

//images
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import howitworksstepsone from "../../assets/images/home/howitworksstepsone.png";
import howitworksstepstwo from "../../assets/images/home/howitworksstepstwo.png";
import CardIcon from "../../assets/images/jeremy-perkins-UgNjyPkphtU-unsplash.jpg";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { LogoutButton } from "../../components/Forms/AuthenticationForms";
import { NewsletterPage } from "../../components/Forms/websiteForms";

const Home = () => (
  <>
    <NavSection />
    <HomePageHero />
    <HowItWorksOne />
    <HowItWorksTwo />
    <WhyChooseUsCardNew />
    {/* <Testimonials /> */}
    {/* <TestimonialCarousel /> */}
    {/* <TestimonialCarouselTwo /> */}
    {/* <WhyChooseUsCard /> */}
    <Community />
    <TestimonialsNew />
    <NewsletterPage />
    {/* <TestimonialsCard /> */}
    {/* <Newsletter /> */}
  </>
);

const HowItWorksOne = () => {
  return (
    <>
      <div className="container-fluid p-5 ">
        {" "}
        {/* <a href="/signInPage">
          <h3 className="text-center">Sign In</h3>
        </a> */}
        {/* <LogoutButton /> */}
        <h3 className="text-center">How It Works</h3>
        <img
          src={howitworksstepsone}
          className="py-4 img-fluid mx-auto d-none d-lg-block d-md-none d-sm-none d-xs-none"
        />
        <Row xs={1} md={2} className="g-0 justify-content-center mt-2">
          {howItWorksData.homepageData.map((Itworks) => {
            return (
              <Col
                className="col-lg-4 col-md-6 col-sm-10 px-lg-3 px-md-4 px-sm-5 d-flex align-items-stretch"
                key={Itworks.id}
              >
                <HowItWorksCard {...Itworks} />
              </Col>
            );
          })}
        </Row>
      </div>
      {/* <div className="container-fluid text-center py-5"> */}
      {/* <h3 className="text-center">How It Works</h3> */}
      {/* <img src={howitworkssteps} className="py-4" /> */}
      {/* <div className="row justify-content-center mt-5">
          {howItWorksDatas.homepageData.map((Itworks) => {
            return (
              <div
                className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch"
                key={Itworks.id}
              >
                <HowItWorksCard {...Itworks}></HowItWorksCard>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <div className="container">
        <h3 className="text-center">How It Works</h3>
        <img src={howitworkssteps} className="py-4" />
        <div className="CardWork row text-center justify-content-around">
          {howItWorksDatas.homepageData.map((Itworks) => {
            return (
              <>
                <div className="col-lg-4 col-md-4 col-sm-12" key={Itworks.id}>
                  <HowItWorksCard {...Itworks} />
                </div>
              </>
            );
          })}
        </div>
      </div> */}
    </>
  );
};
const HowItWorksTwo = () => {
  return (
    <>
      <div className="container-fluid p-5">
        {" "}
        <img
          src={howitworksstepstwo}
          className="px-4 img-fluid mx-auto d-none d-lg-block d-md-none d-sm-none d-xs-none"
        />
        <Row xs={1} md={2} className="g-0 justify-content-center mt-2">
          {howItWorksDataTwo.homepageDataTwo.map((Itworks) => {
            return (
              <Col
                className="col-lg-4 col-md-6 col-sm-10 px-lg-3 px-md-4 px-sm-5 d-flex align-items-stretch"
                key={Itworks.id}
              >
                <HowItWorksCard {...Itworks} />
              </Col>
            );
          })}
        </Row>
        <div className="text-center mt-4">
          <BookASessionBtn />
        </div>
      </div>
    </>
  );
};

const Community = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center g-4 mt-2 py-4">
          <div className="col-lg-5 col-md-6 d-flex align-items-center">
            <div className="p-5 bg-body-tertiary border rounded-3 text-center communityBorder">
              <h3>Join a support group</h3>
              <p>
                Join a community for empowerment sessions to connect, share,
                learn, heal, and flourish with other like-minded fellows.
              </p>
              <a href="https://forms.gle/oDf261Ybmn69d9Ex7" target="_blank">
                <Button className="BookaSessionBtn">Join Now</Button>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 d-flex align-items-center">
            <div className="p-5 bg-body-tertiary border rounded-3 text-center communityBorder">
              <h3>Join our Gist House</h3>
              <p>
                The gist house is our community group where regular helpful tips
                and sessions take place to support your well-being and total
                success.
                {/* While the support group is more personalized,
                sectionalized, and periodical, the gist house gives you access
                to regular tips and sessions to all our services. Click to join
                now. */}
              </p>
              <a href="https://bit.ly/MindAfrikGISTSHOUSE" target="_blank">
                <Button className="BookaSessionBtn">Join Now</Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
        {" "}
        <div class="row d-flex justify-content-between g-0 mt-5 py-4">
       
          <div class="col-lg-6 col-md-6 align-items-center">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
             
              <h3>Join a support group</h3>
              <p>
                Join a community for empowerment sessions to connect, share,
                learn, heal, and flourish with other like-minded fellows.
              </p>
              <a href="https://forms.gle/oDf261Ybmn69d9Ex7" target="_blank">
                {" "}
                <Button className="BookaSessionBtn">Join Now</Button>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 align-items-center">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
              <h3>Join our Gist House</h3>
              <p>
                The gist house is our community group where regular helpful tips
                and sessions take place to support your well-being and total
                success. While the support group is more personalized,
                sectionalized, and periodical, the gist house gives you access
                to regular tips and sessions to all our services. Click to join
                now.
              </p>
              <a href="https://forms.gle/oDf261Ybmn69d9Ex7" target="_blank">
                <Button className="BookaSessionBtn">Join Now</Button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

const WhyChooseUsCard = () => {
  return (
    <>
      <div className=" container-fluid mt-5">
        {" "}
        <h3 className="text-center py-3">Why Choose Us</h3>
        <div className="ChooseCard">
          {" "}
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
                  <h4> Safe & Secure </h4>
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: "1.75rem",
                    fontFamily: "Comfortaa",
                  }}
                >
                  As Head of Operations.Daniel is responsible for working with
                  franchisees on all aspects of marketing strategy including
                  digital, public relations, website, etc.
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
                  As Head of Operations.Daniel is responsible for working with
                  franchisees on all aspects of marketing strategy including
                  digital, public relations, website, etc.
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
                  As Head of Operations.Daniel is responsible for working with
                  franchisees on all aspects of marketing strategy including
                  digital, public relations, website, etc.
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
                  As Head of Operations.Daniel is responsible for working with
                  franchisees on all aspects of marketing strategy including
                  digital, public relations, website, etc.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

const Newsletter = () => {
  return (
    <>
      <div className="container-fluid py-5 newsletterBg">
        <div className="mt-2">
          <div className="card-body d-flex justify-content-center">
            <div className="bg-white rounded d-flex justify-content-center p-5 newletterShadow w-md-100 w-lg-100">
              <div className="row">
                {" "}
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                  {" "}
                  <div className="mx-5">
                    {" "}
                    <h4 className="">Subscribe to our Newsletter</h4>
                    <p className="">
                      Join us as we give you update on our features
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                  {" "}
                  <div className="mx-5 d-flex align-items-center">
                    {" "}
                    <InputGroup className="mb-3" style={{ width: "22rem" }}>
                      <InputGroup.Text>
                        <MailOutlineOutlinedIcon />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter email here"
                        aria-label="Email"
                        aria-describedby="basic-addon2"
                      />
                      <SubscribeBtn />
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <div className="container-fluid py-5 newsletterBg">
        <div className="row d-flex justify-content-center align-items-center bg-white w-75 py-5">
        
          <div className="col-lg-6 col-md-6 col-sm-12">
           
            <h4 className="">Subscribe to our Newsletter</h4>
            <p className="">Join us as we give you update on our features</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <InputGroup className="mb-3" style={{ width: "22rem" }}>
           
              <Form.Control
                placeholder="Enter email here"
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
              <SubscribeBtn />
            </InputGroup>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
