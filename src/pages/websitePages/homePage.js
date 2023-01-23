//data
import howItWorksDatas from "../../data/homePageCards.json";

//components
import { NavbarSection } from "../../components/Navbar/guestNavbar";
import { HowItWorksCard } from "../../components/allCards/homePageCard";
import { TestimonialsCard } from "../../components/allCards/homePageCard";

import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

//images
import howitworkssteps from "../../assets/images/home/howitworkssteps.png";
import CardIcon from "../../assets/images/jeremy-perkins-UgNjyPkphtU-unsplash.jpg";

const Home = () => (
  <>
    <NavbarSection />
    <HowItWorks />
    <WhyChooseUsCard />
    <TestimonialsCard />
  </>
);

const HowItWorks = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center">How It Works</h3>
        {/* <img src={howitworkssteps} className="py-4" /> */}
        <div className="CardWork row text-center justify-content-around ">
          {howItWorksDatas.homepageData.map((Itworks) => {
            return (
              <>
                <div className="col-lg-3 col-md-5 col-sm-12" key={Itworks.id}>
                  <HowItWorksCard {...Itworks} />
                </div>
              </>
            );
          })}
          ;
        </div>
      </div>
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

export default Home;
