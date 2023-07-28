import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
import {
  SignUpBtn,
  LoginBtn,
} from "../../components/Buttons/authenticationBtn";
import Button from "react-bootstrap/Button";
import { SendBtn, SubmitForm } from "../Buttons/actionBtn";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// // export const SignInForm = () => {
// export const SignInForm = ({ userRole }) => {
//   // const role = userRole || user.userRole || "defaultUserRole";
//   // export const SignInForm = ({ userRoles }) => {
//   // console.log(userRoles);
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//   });

//   const [err, setErr] = useState(null);

//   const navigate = useNavigate();

//   // const { currentUser } = useContext(AuthContext);
//   const { login } = useContext(AuthContext);
//   // console.log(currentUser);

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(inputs);
//       if (userRole === "admin") {
//         navigate("/adminDashboardHomePage");
//       } else if (userRole === "counsellor") {
//         navigate("/counsellorDashboard");
//       } else if (userRole === "client") {
//         navigate("/counselleeDashboard");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       setErr(err.response.data);
//     }
//     // // Redirect the user to the login page if they were previously on the /counselleeDashboard route
//     // if (window.location.pathname === "/counselleeDashboard") {
//     //   navigate("/login");
//     // }
//   };
//   return (
//     <>
//       {" "}
//       {/* <Link to="/" className="text-black">
//         <KeyboardBackspaceOutlinedIcon />
//       </Link> */}
//       <Form>
//         <Form.Group className="mb-3 pb-2 pt-5" controlId="formBasicEmail">
//           <Form.Control
//             type="email"
//             placeholder="Email Address"
//             className=" placeholderRadius"
//             name="email"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-2 pt-2" controlId="formBasicPassword">
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             className="placeholderRadius"
//             name="password"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <h6 className="text-muted text-end">
//           Forgot Password, <Link to="/ForgotPasswordPage">Click here</Link>
//         </h6>
//         <h6 className="text-muted text-center pt-2">
//           Don't have an account? <Link to="/counselleeSignUp">SignUp</Link>
//         </h6>
//       </Form>{" "}
//       {err && (
//         <p className="mt-3" style={{ color: "red" }}>
//           {err}
//         </p>
//       )}
//       <button onClick={handleSubmit}>Submit</button>
//       {/* <div className="text-center">
//         <LoginBtn />
//       </div> */}
//     </>
//   );
// };

export const SignInForm = ({ userRole }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setSubmitting(true); // Set isSubmitting to true to disable the button during form submission

    const email = values.email;
    const password = values.password;

    try {
      await axios.post(
        // "http://localhost:4000/user/login",
        "https://mindafrikserver.onrender.com/user/login",

        {
          email: email,
          password: password,
        }
      );
      navigate("/counselleeSignUp");
    } catch (err) {
      const errorMessage = err.response?.data || "An error occurred";
      setErr(errorMessage);
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .matches(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              "Invalid email format"
            )
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
            ),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>{" "}
              {errors.email && touched.email ? (
                <div className="ms-3 auth-error-message">{errors.email}</div>
              ) : null}
            </div>
            <div>
              <div className="d-flex align-items-center placeholderRadius mt-4">
                {" "}
                <Field
                  name="password"
                  type={showPassword1 ? "text" : "password"}
                  autoComplete="off"
                  placeholder="Password"
                  className="w-100 my-2 formikFieldStyle"
                />
                <div onClick={togglePasswordVisibility1}>
                  {showPassword1 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </div>
              </div>

              {errors.password && touched.password ? (
                <div className="ms-3 auth-error-message">{errors.password}</div>
              ) : null}
            </div>

            <div className="my-3 text-center">
              {/* <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button> */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="submitFormBtn btn"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {err && (
                <p className="mt-3 auth-error-message" style={{ color: "red" }}>
                  {err}
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
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
  const [isSubmitting, setSubmitting] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  const [validationErrors, setValidationErrors] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setSubmitting(true); // Set isSubmitting to true to disable the button during form submission

    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;
    const password = values.password;

    try {
      await axios.post(
        // "http://localhost:4000/user/signup",
        "https://mindafrikserver.onrender.com/user/signup",
        // inputs
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
      );
      navigate("/verify-email");
    } catch (err) {
      const errorMessage = err.response?.data || "An error occurred";
      setErr(errorMessage);
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string()
            .matches(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              "Invalid email format"
            )
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
            ),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="firstName"
                  type="text"
                  autoComplete="off"
                  placeholder="First Name"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.firstName && touched.firstName ? (
                <div className="ms-3 auth-error-message">
                  {errors.firstName}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="lastName"
                  type="text"
                  autoComplete="off"
                  placeholder="Last Name"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.lastName && touched.lastName ? (
                <div className="ms-3 auth-error-message">{errors.lastName}</div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>{" "}
              {errors.email && touched.email ? (
                <div className="ms-3 auth-error-message">{errors.email}</div>
              ) : null}
            </div>
            <div>
              <div className="d-flex align-items-center placeholderRadius mt-4">
                {" "}
                <Field
                  name="password"
                  type={showPassword1 ? "text" : "password"}
                  autoComplete="off"
                  placeholder="Password"
                  className="w-100 my-2 formikFieldStyle"
                />
                <div onClick={togglePasswordVisibility1}>
                  {showPassword1 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </div>
              </div>

              {errors.password && touched.password ? (
                <div className="ms-3 auth-error-message">{errors.password}</div>
              ) : null}
            </div>
            {/* <div className="text-center mt-4">
              <button type="submit">Submit</button>
            </div> */}
            <div className="my-3 text-center">
              {/* <button 
                // onClick={handleSubmit}
                type="button"
                isSubmitting={isSubmitting}
              >
                Submit
              </button> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submitFormBtn btn"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {/* <Button
                type="submit"
                disabled={isSubmitting}
                className="submitFormBtn"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button> */}
              {/* <button onClick={handleSubmit} type="button">
                Submit
              </button> */}
              {/* <SignUpBtn  /> */}
              {err && (
                <p className="mt-3 auth-error-message" style={{ color: "red" }}>
                  {err}
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
// export const SignUpAsCounselleeFormm = () => {
//   const [inputs, setInputs] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     // confirmpassword: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const [err, setErr] = useState(null);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const errors = {};

//     if (!inputs.firstName.trim()) {
//       errors.firstName = "First Name is required";
//     }

//     if (!inputs.lastName.trim()) {
//       errors.lastName = "Last Name is required";
//     }

//     if (!inputs.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!isValidEmail(inputs.email)) {
//       errors.email = "Invalid email format";
//     }

//     if (!inputs.password.trim()) {
//       errors.password = "Password is required";
//     } else if (!isValidPassword(inputs.password)) {
//       errors.password =
//         "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
//     }

//     setValidationErrors(errors);

//     if (Object.keys(errors).length > 0) {
//       return;
//     }
//     try {
//       await axios.post(
//         "https://mindafrikserver.onrender.com/user/signup",
//         inputs
//       );
//       navigate("/signInPage");
//     } catch (err) {
//       setErr(err.response.data);
//     }
//   };

//   const isValidEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const isValidPassword = (password) => {
//     const passwordPattern =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//     return passwordPattern.test(password);
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3 py-2" controlId="firstname">
//           <Form.Control
//             type="text"
//             placeholder="First Name"
//             className="placeholderRadius"
//             name="firstName"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="lastname">
//           <Form.Control
//             type="text"
//             placeholder="Last Name"
//             className="placeholderRadius"
//             name="lastName"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="email">
//           <Form.Control
//             type="email"
//             placeholder="Email"
//             className="placeholderRadius"
//             name="email"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="password">
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             className="placeholderRadius"
//             name="password"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Text className="text-muted">
//           By signing up, you agree to our{" "}
//           <Link to="/termsOfService">Terms Of Service</Link> and acknowledge
//           that you have read our <Link to="/privacyPolicy">Privacy Policy</Link>
//         </Form.Text>
//       </Form>
//       <div className="my-3 text-center">
//         <button onClick={handleSubmit}>Submit</button>
//         {/* <SignUpBtn  /> */}
//         {err && (
//           <p className="mt-3 auth-error-message" style={{ color: "red" }}>
//             {err}
//           </p>
//         )}
//       </div>
//     </>
//   );
// };
// export const SignUpAsCounselleeForm = () => {
//   const [inputs, setInputs] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     // confirmpassword: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const [err, setErr] = useState(null);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const errors = {};

//     if (!inputs.firstName.trim()) {
//       errors.firstName = "First Name is required";
//     }

//     if (!inputs.lastName.trim()) {
//       errors.lastName = "Last Name is required";
//     }

//     if (!inputs.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!isValidEmail(inputs.email)) {
//       errors.email = "Invalid email format";
//     }

//     if (!inputs.password.trim()) {
//       errors.password = "Password is required";
//     } else if (!isValidPassword(inputs.password)) {
//       errors.password =
//         "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
//     }

//     setValidationErrors(errors);

//     if (Object.keys(errors).length > 0) {
//       return;
//     }
//     try {
//       await axios.post(
//         "https://mindafrikserver.onrender.com/user/signup",
//         inputs
//       );
//       navigate("/signInPage");
//     } catch (err) {
//       setErr(err.response.data);
//     }
//   };

//   const isValidEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const isValidPassword = (password) => {
//     const passwordPattern =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//     return passwordPattern.test(password);
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3 py-2" controlId="firstname">
//           <Form.Control
//             type="text"
//             placeholder="First Name"
//             className=" placeholderRadius"
//             name="firstName"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="lastname">
//           <Form.Control
//             type="text"
//             placeholder="Last Name"
//             className="placeholderRadius"
//             name="lastName"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="email">
//           <Form.Control
//             type="email"
//             placeholder="Email"
//             className="placeholderRadius"
//             name="email"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="password">
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             className="placeholderRadius"
//             name="password"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Text className="text-muted">
//           By signing up, you agree to our{" "}
//           <Link to="/termsOfService">Terms Of Service</Link> and acknowledge
//           that you have read our <Link to="/privacyPolicy">Privacy Policy</Link>
//         </Form.Text>
//       </Form>
//       <div className="my-3 text-center">
//         <button onClick={handleSubmit}>Submit</button>
//         {/* <SignUpBtn  /> */}
//         {err && (
//           <p className="mt-3" style={{ color: "red" }}>
//             {err}
//           </p>
//         )}
//       </div>
//     </>
//   );
// };
