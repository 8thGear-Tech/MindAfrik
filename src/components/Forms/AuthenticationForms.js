// Chris
// SignInForm
// ForgotPasswordForm
// SignUpAsCounselorForm

// Michael
// SignUpAsCounseleeForm
//SubscribeToNewsletterForm

import Form from "react-bootstrap/Form";
import { SignUpBtn } from "../../components/Buttons/authenticationBtn";

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
