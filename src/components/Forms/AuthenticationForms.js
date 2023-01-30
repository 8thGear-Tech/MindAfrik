// Chris
// SignInForm
// ForgotPasswordForm
// SignUpAsCounselorForm

// Michael
// SignUpAsCounseleeForm
//SubscribeToNewsletterForm

import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  SignUpBtn,
  LoginBtn,
} from "../../components/Buttons/authenticationBtn";
import { SendBtn } from "../Buttons/actionBtn";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

export const SignInForm = () => {
  return (
    <>
      {" "}
      {/* <Link to="/" className="text-black">
        <KeyboardBackspaceOutlinedIcon />
      </Link> */}
      <Form>
        <Form.Group className="mb-3 pb-2 pt-5" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            className=" placeholderRadius"
          />
        </Form.Group>
        <Form.Group className="mb-2 pt-2" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className=" placeholderRadius"
          />
        </Form.Group>
        <h6 className="text-muted text-end">
          Forgot Password, <Link to="/ForgotPasswordPage">Click here</Link>
        </h6>
        <h6 className="text-muted text-center pt-2">
          Don't have an account? <Link to="/counselleeSignUp">SignUp</Link>
        </h6>
      </Form>{" "}
      <div className="text-center">
        <LoginBtn />
      </div>
    </>
  );
};
export const ForgotPasswordForm = () => {
  return (
    <>
      <Form>
        <Link to="/" className="text-black">
          <KeyboardBackspaceOutlinedIcon />
        </Link>
        <h6 className="text-muted text-center py-2">
          <b>Forgot your password ?</b>
        </h6>
        <h6 className="text-muted">
          To reset your password, enter the email address that you used to set
          up your account. We'll send you a link to help you get back into your
          account
        </h6>
        <Form.Group className="mb-3 py-2" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            className=" placeholderRadius"
          />
        </Form.Group>{" "}
      </Form>{" "}
      <div className="my-3 text-center">
        <SendBtn />
      </div>
    </>
  );
};
export const SignUpAsCounselleeForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3 py-2" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            className=" placeholderRadius"
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicPhoneNumber*">
          <Form.Control
            type="number"
            placeholder="Phone Number"
            className=" placeholderRadius"
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className=" placeholderRadius"
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            className=" placeholderRadius"
          />
        </Form.Group>
        <Form.Text className="text-muted">
          By signing up, you agree to our Terms Of Service and acknowledge that
          you have read our Privacy Policy
        </Form.Text>
      </Form>{" "}
      <div className="my-3 text-center">
        <SignUpBtn />
      </div>
    </>
  );
};
