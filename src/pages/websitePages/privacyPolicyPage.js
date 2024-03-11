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

export const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <NavSection />{" "}
        <div className="container">
          <div className="row pb-5 pt-2 mb-5">
            <div className="justify-content-end">
              <h3 className="mt-5">Privacy Policy</h3>
              <p className="">
                Mindafrik is committed to protecting the privacy and security of
                her users. This Privacy Policy outlines the types of personal
                information we collect and how we use, disclose and protect it.
              </p>
              <h5>Information Collection:</h5>
              <p className="">
                We collect personal information when you create an account on
                our website, book an appointment, or participate in any other
                website-related activities. This information may include your
                name, email address, phone number, payment information, and
                other contact details.
              </p>
              <h5>Use of Information:</h5>
              <p className="">
                We use your personal information to provide you with the
                services you have requested, such as booking appointments,
                communicating with you about your account, and sending you
                marketing communications about our services.
              </p>
              <h5>Disclosure of Information:</h5>
              <p className="">
                We do not share your personal information with third parties for
                their own marketing purposes without your consent. We may share
                your information with our service providers, such as payment
                processors, for the purpose of providing you with the services
                you have requested.
              </p>
              <h5>Data Security</h5>
              <p className="">
                We use a variety of security measures, including encryption and
                authentication tools, to maintain the confidentiality of your
                personal information.
              </p>
              <h5>Data Retention</h5>
              <p className="">
                We retain your personal information for as long as necessary to
                provide you with the services you have requested and as required
                by law.
              </p>
              <h5>Accessing and Updating Your Information</h5>
              <p className="">
                You have the right to access and update your personal
                information at any time by logging into your account on our
                website.
              </p>
              <h5>Changes to Privacy Policy</h5>
              <p className="">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or services. We will notify you of any
                changes by posting the updated policy on our website.
              </p>
              <h5>Contact Information:</h5>
              <p className="">
                If you have any questions about this Privacy Policy or our
                treatment of your personal information, please contact us at{" "}
                <a href="mailto:info@mindafrik.com"> info@mindafrik.com </a>
                or <a href="tel:2348134762115"> 08134762115</a>
              </p>
              <p className="">
                By using our website, you consent to the collection, use, and
                disclosure of your personal information as described in this
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
