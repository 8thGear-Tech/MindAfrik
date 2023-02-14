import { ContactForm } from "../../components/Forms/websiteForms";
import { NavSection } from "../../components/Navbar/guestNavbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//images
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { PhoneIcon } from "../../assets/icons/socialIcons";
import { Mailicon } from "../../assets/icons/socialIcons";

const ContactPage = () => {
  return (
    <>
      <NavSection />
      <Contact />
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Container fluid className="sectionOneBgColor px-5">
        <Row
          className="d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center align-items-center py-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="py-5 ">
              {" "}
              {/* <h3 className="">Welcome to</h3> */}
              <img variant="top" src={mindafrikfulllogo} className="py-4" />
              <div className="">
                {" "}
                <Button
                  variant="outline-success"
                  className="my-2 text-center w-50"
                >
                  <EmailOutlinedIcon className="" />
                  <span className="">Send an email</span>
                </Button>
              </div>
              <div className="">
                {" "}
                <Button variant="outline-success" className="my-2 w-50">
                  <EmailOutlinedIcon className="" />
                  <span className="">Chat with Us</span>
                </Button>
              </div>
              <div>
                <Button variant="outline-success" className="my-2 w-50">
                  <PhoneIcon className="" />
                  <span className="">Call us (Toll-free)</span>
                </Button>
              </div>
              <div className="pt-5 d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                  {" "}
                  <PhoneIcon />
                  <a href="tel:2348134762115" className="text-decoration-none">
                    <p className="mx-3">+2348134762115</p>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <Mailicon />{" "}
                  <a
                    href="mailto:support@mindafrik.com"
                    className="text-decoration-none"
                  >
                    <p className="mx-3">support@mindafrik.com </p>
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="mx-3">
                  <b>Address</b>: 11b, Collins Onabule crescent, Diamond Estate,
                  Magodo, Lagos, Nigeria.
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="mx-3">
                  <b>Office Hours</b>: Mondays - Fridays (10am - 4pm)
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <p className="mx-3">We look forward to hearing from you!</p>
              </div>
            </div>
          </Col>
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionTwoBgColor p-5 my-5">
            <h3 className="text-center pb-3">Get In Touch</h3>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

// const ContactPage = () => {
//   return (
//     <>
{
  /* <Container fluid className="contactBgColor">
        <div className="row ">
          <div
            className="col-lg-6 col-md-4 col-sm-12 createAccountBgOne d-flex justify-content-center d-flex align-items-center"
            style={{ height: "660px" }}
          >
            <div style={{ width: "18rem" }} className="">
              <Card.Img
                variant="top"
                src={mindafrikfulllogo}
                maxwidth="10%"
                maxheight="10%"
              />
             
              <div className="">
                {" "}
                <Button variant="outline-success" className="my-2">
                  <EmailOutlinedIcon />
                  <span className="">Send an email</span>
                </Button>
                <Button variant="outline-success" className="my-2">
                  <EmailOutlinedIcon />
                  <span className="">Chat with Us</span>
                </Button>
                <Button variant="outline-success" className="my-2">
                  <PhoneIcon />
                  <span className="">Call us (Toll-free)</span>
                </Button>
              </div>
              <div className="pt-3 d-flex">
                <div className="d-flex justify-content-center">
                  {" "}
                  <PhoneIcon />
                  <a href="tel:2349131862169" className="text-decoration-none">
                    <p className="paragraphColor mx-3">+2349131862169</p>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <Mailicon />{" "}
                  <a
                    href="mailto:info@mindafrik.com"
                    className="text-decoration-none"
                  >
                    <p className="paragraphColor mx-3">info@mindafrik.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 col-md-8 col-sm-12 createAccountBgTwo d-flex align-items-center justify-content-center"
            style={{ height: "660px" }}
          >
            <ContactForm />
          </div>
        </div>
      </Container> */
}
{
  /* <div className="container-fluid contactBgColor">
        <div className="row g-0 d-flex justify-content-around py-5">
          <div className="col-lg-4 my-auto">
            <div style={{ width: "18rem" }} className="">
              <Card.Img
                variant="top"
                src={mindafrikfulllogo}
                maxwidth="10%"
                maxheight="10%"
              />
            
              <div className="">
                {" "}
                <Button variant="outline-success" className="my-2">
                  <EmailOutlinedIcon />
                  <span className="">Send an email</span>
                </Button>
                <Button variant="outline-success" className="my-2">
                  <EmailOutlinedIcon />
                  <span className="">Chat with Us</span>
                </Button>
                <Button variant="outline-success" className="my-2">
                  <PhoneIcon />
                  <span className="">Call us (Toll-free)</span>
                </Button>
              </div>
              <div className="pt-3 d-flex">
                <div className="d-flex justify-content-center">
                  {" "}
                  <PhoneIcon />
                  <a href="tel:2349131862169" className="text-decoration-none">
                    <p className="paragraphColor mx-3">+2349131862169</p>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <Mailicon />{" "}
                  <a
                    href="mailto:info@mindafrik.com"
                    className="text-decoration-none"
                  >
                    <p className="paragraphColor mx-3">info@mindafrik.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 my-5"
            style={{ backgroundColor: "#ffffff", width: "500px" }}
          >
            <ContactForm />
          </div>
        </div>
      </div> */
}
//     </>
//   );
// };

export default ContactPage;
