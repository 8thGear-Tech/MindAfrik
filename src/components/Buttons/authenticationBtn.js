// LoginBtn
//SignUpBtn
//GetStartedBtn
//CounselleeBtn
//CounsellorBtn

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const SignUpBtn = () => {
  return (
    <>
      <Link to="/counsellorDashboard">
        {" "}
        <Button className="SignUpBtn">Sign Up</Button>
      </Link>
    </>
  );
};
export const LoginBtn = () => {
  return (
    <>
      <Link to="/signInPage">
        {" "}
        <Button className="LoginBtn">Login</Button>
      </Link>
    </>
  );
};
export const ContinueLoginBtn = () => {
  return (
    <>
      <Link to="/signInPage">
        {" "}
        <Button className="submitFormBtn btn">Continue</Button>
        {/* <Button className="LoginBtn">Continue</Button> */}
      </Link>
    </>
  );
};

// export const SignUpBtn = () => {
//   return (
//     <>
//       <a href="">
//         {" "}
//         <Button className="SignUpBtn">Sign Up</Button>
//       </a>
//     </>
//   );
// };
