import { NavSection } from "../../components/Navbar/guestNavbar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import { ContinueBtn } from "../../../components/Buttons/actionBtn";
// import { ContactBtn } from "../../../components/Buttons/actionBtn";

// const TakeaTest = () => {
//   return (
//     <>
//       <NavSection />
//       <TakeaTestPage />
//     </>
//   );
// };

export const Disclaimer = () => {
  return (
    <>
      <div>
        <NavSection />{" "}
        <div className="container">
          <div className="row pb-5 my-5">
            <div className="justify-content-center text-center">
              <h3 className="">Disclaimer</h3>
              <p className="">
                This website provides information and resources for general
                educational purposes only. It is not a substitute for
                professional medical or psychological advice, diagnosis, or
                treatment. The website provides information about therapy
                services and is not intended to diagnose or treat any mental or
                physical health conditions.
              </p>
              <h5>User Responsibilities</h5>
              <p className="">
                Please seek the advice of a licensed mental health professional
                if you have any concerns about your mental health or the health
                of someone else. Do not disregard professional medical or
                psychological advice or delay seeking it because of something
                you have read on this website.
              </p>
              <p className="">
                You should not rely on this information as a substitute for, nor
                does it replace professional medical advice, diagnosis, or
                treatment.
              </p>
              <p className="">
                The website owner and its affiliates are not responsible or
                liable for any actions or treatments taken based on the
                information provided on this website.
              </p>
              <p className="">
                You should always consult with a qualified healthcare
                professional before making any decisions regarding your health.
                This website may contain links to other websites for the
                convenience of users, but the website owner and its affiliates
                are not responsible for the content or accuracy of those
                websites.
              </p>
              <p className="">
                Use of this website and the information contained on it is
                subject to these terms and conditions, which may be updated from
                time to time without notice. This disclaimer is subject to
                change without notice. Please review it periodically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
