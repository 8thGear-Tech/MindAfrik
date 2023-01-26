import { ContactForm } from "../../components/Forms/websiteForms";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

//images
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { PhoneIcon } from "../../assets/icons/socialIcons";
import { Mailicon } from "../../assets/icons/socialIcons";

const ContactPage = () => {
  return (
    <>
      {/* <Container fluid className="contactBgColor">
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
      </Container> */}
      <div className="container-fluid contactBgColor">
        <div className="row g-0 d-flex justify-content-around py-5">
          <div className="col-lg-4 my-auto">
            <div style={{ width: "18rem" }} className="">
              <Card.Img
                variant="top"
                src={mindafrikfulllogo}
                maxwidth="10%"
                maxheight="10%"
              />
              {/* <Card.Img variant="top" src={createaccountimg} className="" /> */}
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
      </div>
    </>
  );
};

export default ContactPage;
