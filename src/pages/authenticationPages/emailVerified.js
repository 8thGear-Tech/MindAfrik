import React from "react";
import { ContinueLoginBtn } from "../../components/Buttons/authenticationBtn";
import mindafriklogo from "../../assets/images/logo/mindafriklogo.png";
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";
import emailnotverified from "../../assets/images/emailverification/emailnotverified.png";
import emailverified from "../../assets/images/emailverification/emailverified.png";
import Modal from "react-bootstrap/Modal";

export const PendingVerificationModal = ({ handleClose }) => {
  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <div className="text-center pb-4 pt-2">
          <img src={emailnotverified} width="300" height="200" />
        </div>
        <h4 className="text-center">You can now verify your email</h4>
        <p className="text-center pb-3">
          {" "}
          Check your inbox and click on the verification link to complete your
          signup.
        </p>
      </Modal>
    </>
  );
};

export const PendingVerification = () => {
  return (
    <div className="row d-flex justify-content-center g-0">
      {" "}
      <div className="col-lg-4 col-sm-4 pt-5 mt-5 text-center">
        {/* <img src={mindafrikfulllogo} className="img-fluid py-5" /> */}
        {/* <div className="emailVerifiedCard py-5"> */}
        <div className="py-5">
          {" "}
          <h5 className="">You can now verify your email</h5>
          <div className="">
            <img
              src={emailnotverified}
              className="img-fluid"
              width="400"
              height="400"
            />
          </div>
          <p style={{ fontSize: "0.9rem" }}>
            Check your inbox and click on the verification link to complete your
            signup.
          </p>
        </div>
      </div>
    </div>
  );
};

const EmailVerificationSuccess = () => {
  return (
    <div className="row d-flex justify-content-center g-0">
      {" "}
      <div className="col-lg-4 col-sm-4 pt-5 text-center">
        {/* <img src={mindafrikfulllogo} className="img-fluid py-5" /> */}
        {/* <div className="emailVerifiedCard py-5"> */}
        <div className="py-5">
          {" "}
          <h5 className="">Email Verified Successfully!</h5>
          <div className="">
            <img
              src={emailverified}
              className="img-fluid"
              width="400"
              height="400"
            />
          </div>
          <p style={{ fontSize: "0.9rem" }}>
            You can now log in to your account.
          </p>
          <ContinueLoginBtn />
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;
