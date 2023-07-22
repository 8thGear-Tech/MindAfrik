// Chris
// SignInForm
// ForgotPasswordForm
// SignUpAsCounselorForm

// Michael
// SignUpAsCounseleeForm
//SubscribeToNewsletterForm
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  SignUpBtn,
  LoginBtn,
} from "../../components/Buttons/authenticationBtn";
import { SendBtn } from "../Buttons/actionBtn";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

// export const SignInForm = () => {
export const SignInForm = ({ userRole }) => {
  // const role = userRole || user.userRole || "defaultUserRole";
  // export const SignInForm = ({ userRoles }) => {
  // console.log(userRoles);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  // const { currentUser } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  // console.log(currentUser);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      if (userRole === "admin") {
        navigate("/adminDashboardHomePage");
      } else if (userRole === "counsellor") {
        navigate("/counsellorDashboard");
      } else if (userRole === "client") {
        navigate("/counselleeDashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setErr(err.response.data);
    }
    // // Redirect the user to the login page if they were previously on the /counselleeDashboard route
    // if (window.location.pathname === "/counselleeDashboard") {
    //   navigate("/login");
    // }
  };
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
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2 pt-2" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className="placeholderRadius"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <h6 className="text-muted text-end">
          Forgot Password, <Link to="/ForgotPasswordPage">Click here</Link>
        </h6>
        <h6 className="text-muted text-center pt-2">
          Don't have an account? <Link to="/counselleeSignUp">SignUp</Link>
        </h6>
      </Form>{" "}
      {err && (
        <p className="mt-3" style={{ color: "red" }}>
          {err}
        </p>
      )}
      <button onClick={handleSubmit}>Submit</button>
      {/* <div className="text-center">
        <LoginBtn />
      </div> */}
    </>
  );
};
export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the backend API to initiate the password reset process
      await axios.post(
        "https://mindafrik-app-backend.onrender.com/clients/reset-password",
        {
          email,
        }
      );

      setSuccessMessage("Password reset email sent successfully");
    } catch (error) {
      setErrorMessage("Failed to send password reset email");
    }
  };

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
            // id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Email Address"
            className=" placeholderRadius"
          />
        </Form.Group>{" "}
      </Form>{" "}
      <div className="my-3 text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Send
        </button>
        {/* <SendBtn /> */}
      </div>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export const SignUpAsCounselleeForm = () => {
  // const [firstnameReg, setFirstnameReg] = useState({});
  // const [lastnameReg, setLastnameReg] = useState({});
  // const [emailReg, setEmailReg] = useState({});
  // const [passwordReg, setPasswordReg] = useState({});
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    // confirmpassword: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        // "http://localhost:3005/clients/clientsignup",
        "https://mindafrik-app-backend.onrender.com/clients/clientsignup",
        inputs,
        { withCredentials: true }
      );
      // const response = await axios.post("http://localhost:3005/clients", {

      navigate("/signInPage");
      // console.log(response);
    } catch (err) {
      // console.log(err);
      setErr(err.response.data);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 py-2" controlId="firstname">
          <Form.Control
            type="text"
            placeholder="First Name"
            className=" placeholderRadius"
            name="first_name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="lastname">
          <Form.Control
            type="text"
            placeholder="Last Name"
            className="placeholderRadius"
            name="last_name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            className="placeholderRadius"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            className="placeholderRadius"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Text className="text-muted">
          By signing up, you agree to our Terms Of Service and acknowledge that
          you have read our Privacy Policy
        </Form.Text>
      </Form>
      <div className="my-3 text-center">
        <button onClick={handleSubmit}>Submit</button>
        {/* <SignUpBtn  /> */}
        {err && (
          <p className="mt-3" style={{ color: "red" }}>
            {err}
          </p>
        )}
      </div>
    </>
  );
};
