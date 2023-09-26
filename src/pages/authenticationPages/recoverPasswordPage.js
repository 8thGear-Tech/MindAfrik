import {
  ForgotPasswordForm,
  VerifyOtpForm,
} from "../../components/Forms/AuthenticationForms";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import verifyOtp from "../../assets/images/emailverification/verifyOtp.png";

//images
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";

const ForgotPasswordPage = () => {
  return (
    <>
      <Container fluid className="">
        <Row
          className="d-flex justify-content-center "
          style={{ height: "100vh" }}
        >
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionOneBgColor text-center align-items-center py-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="py-5">
              {" "}
              {/* <h3 className="">Welcome to</h3> */}
              <img variant="top" src={mindafrikfulllogo} className="py-5" />
            </div>
          </Col>
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionTwooBgColor p-5 align-items-center">
            <ForgotPasswordForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const VerifyOTP = () => {
  return (
    <>
      <Container fluid className="">
        <Row
          className="d-flex justify-content-center "
          style={{ height: "100vh" }}
        >
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionOneBgColor text-center align-items-center pb-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="py-5">
              {" "}
              {/* <h3 className="">Welcome to</h3> */}
              <img variant="top" src={mindafrikfulllogo} className="py-5" />
            </div>
          </Col>
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionTwooBgColor py-2 align-items-center">
            <div className="mt-5 text-center">
              <div className="pb-5">
                <div className="">
                  <img
                    // src={verifyOtp}
                    className="img-fluid"
                    width="400"
                    height="400"
                  />
                </div>
                <h5 className="">OTP Verification</h5>
                <p style={{ fontSize: "0.85rem" }}>
                  Enter OTP sent to hello@gmail.com
                </p>
                <VerifyOtpForm />
                <p style={{ fontSize: "0.85rem" }} className="p-0 m-0">
                  Didn’t receive OTP?
                </p>
                <a href="#">Resend Code</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// export const VerifyOTP = () => {
//   return (
//     <>
//       <div className="row d-flex justify-content-center g-0">
//         {" "}
//         <div className="col-lg-4 col-sm-4  mt-5 text-center">
//           <div className="py-5">
//             {/* <div className="emailVerifiedCard py-5"> */}{" "}
//             <div className="">
//               <img
//                 src={verifyOtp}
//                 className="img-fluid"
//                 width="400"
//                 height="400"
//               />
//             </div>
//             <h5 className="">OTP Verification</h5>
//             <p style={{ fontSize: "0.9rem" }}>
//               Enter OTP sent to hello@gmail.com
//             </p>
//             <p style={{ fontSize: "0.9rem" }} className="p-0 m-0">
//               Didn’t receive OTP?
//             </p>
//             <a href="#">Resend Code</a>
//             {/* <ContinueLoginBtn /> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default ForgotPasswordPage;
