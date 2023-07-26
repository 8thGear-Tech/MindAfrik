import React from "react";
import { ContinueLoginBtn } from "../../components/Buttons/authenticationBtn";
import mindafriklogo from "../../assets/images/logo/mindafriklogo.png";
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";
import emailverified from "../../assets/images/emailverification/emailverified.png";

const EmailVerificationSuccess = () => {
  return (
    <div className="row d-flex justify-content-center g-0">
      {" "}
      <div className="col-4 pt-5 mt-5 text-center">
        {/* <img src={mindafrikfulllogo} className="img-fluid py-5" /> */}
        <div className=" emailVerifiedCard py-5">
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
