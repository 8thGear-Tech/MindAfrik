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

export const TermsOfService = () => {
  return (
    <>
      <div>
        <NavSection />{" "}
        <div className="container">
          <div className="row pb-5 pt-2 my-5">
            <div className="justify-content-center text-center">
              <h3 className="">Terms of Service</h3>
              {/* <hr style={{ width: "331px" }} className="text-center" /> */}
              <p className="">
                Welcome to Mindafrik, a platform for online and onsite therapy
                services. Our website provides users with access to licensed
                therapists for individual, couples, and family therapy. By using
                our services, you agree to be bound by these terms of service
                (“Terms”).
              </p>
              <h5>Eligibility</h5>
              <p className="">
                You must be at least 18 years of age or the age of majority in
                your jurisdiction to use our services. If you are under the age
                of 18, you may use our services only with the involvement of a
                parent or legal guardian.
              </p>
              <h5>Services</h5>
              <p className="">
                Mindafrik provides online and onsite therapy services through
                audio, video, messaging communication, and face to face methods.
                Our services are not a substitute for professional medical
                advice, diagnosis, or treatment.
              </p>
              <h5>User Responsibilities</h5>
              <p className="">
                You are responsible for maintaining the confidentiality of your
                account information and password. You agree to accept
                responsibility for all activities that occur under your
                account.for professional medical advice, diagnosis, or
                treatment.
              </p>
              <h5>User Conduct</h5>
              <p className="">
                You agree to use our services only for lawful purposes and in
                accordance with these Terms. You will not use our services to
                engage in any illegal, abusive, or harmful behavior, including
                but not limited to:
                <ul>
                  <li className="">
                    Harassment, bullying, or discrimination of any kind
                  </li>
                  <li className="">
                    Transmission of harmful, pornographic, or offensive material
                  </li>
                  <li className="">
                    Infringement of any intellectual property rights
                  </li>
                  <li className="">
                    Any other behavior that we consider to be inappropriat
                  </li>
                </ul>
              </p>
              <h5>Disclaimer of Warranties</h5>
              <p className="">
                Our services are provided on an “as is” and “as available”
                basis. We make no representations or warranties of any kind,
                express or implied, as to the operation of our services or the
                information, content, or materials included on our website.
              </p>
              <h5>Limitation of Liability</h5>
              <p className="">
                In no event shall Mindafrik be liable for any damages
                whatsoever, including but not limited to direct, indirect,
                incidental, punitive, and consequential damages, arising out of
                the use or inability to use our services.
              </p>
              <h5>Indemnification</h5>
              <p className="">
                You agree to indemnify and hold Mindafrik, its its affiliates,
                officers, agents, and employees harmless from any claim or
                demand, including reasonable attorney fees, made by any third
                party due to or arising out of your use of our services, your
                violation of these Terms, or your violation of any rights of
                another.
              </p>
              <h5>Termination</h5>
              <p className="">
                Mindafrik reserves the right to terminate your use of our
                services at any time, for any reason, and without prior notice.
              </p>
              <h5>Governing Law</h5>
              <p className="">
                These Terms shall be governed by and construed in accordance
                with the laws of the [Jurisdiction] without giving effect to any
                principles of conflicts of law.
              </p>
              <h5>Changes to the Terms of Service</h5>
              <p className="">
                Mindafrik reserves the right to make changes to these Terms at
                any time. Your continued use of our services following any
                changes constitutes your acceptance of the new Terms.
              </p>
              <h5>Contact Information</h5>
              <p className="">
                If you have any questions or concerns about these Terms, please
                contact us at{" "}
                <a href="mailto:support@mindafrik.com">support@mindafrik.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
