import { NavSection } from "../../../components/Navbar/guestNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ContinueBtn } from "../../../components/Buttons/actionBtn";
import { ContactBtn } from "../../../components/Buttons/actionBtn";

const TakeaTest = () => {
  return (
    <>
      <NavSection />
      <TakeaTestPage />
    </>
  );
};

const TakeaTestPage = () => {
  return (
    <>
      <div className="container">
        <div className="row sectionOneBgColor py-5 my-5">
          <div className="justify-content-center text-center">
            <h3 className="">Anxiety & Depression Symptoms</h3>
            <h5 className="">How it works</h5>
            <p className="">
              These two simple assessments can help quantify your symptoms,so
              your healthcare provider has a basline for diagnosis.
            </p>
            <h5 className="">hello</h5>
            <ContinueBtn />
          </div>
        </div>
      </div>
    </>
  );
};
export const UnderstandingYourResult = () => {
  return (
    <>
      <div>
        <NavSection />{" "}
        <div className="container">
          <div className="row sectionOneBgColor py-5 my-5">
            <div className="justify-content-center text-center">
              <h3 className="">Understanding your result</h3>
              <p className="">
                These two simple assessments can help quantify your symptoms,so
                your healthcare provider has a basline for diagnosis.
              </p>
              {/* <h5 className="">hello</h5> */}
              <ContactBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeaTest;
