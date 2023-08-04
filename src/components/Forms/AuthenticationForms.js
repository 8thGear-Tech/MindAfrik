import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

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
  const [errorMessage, setErrorMessage] = useState("");
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
      navigate("/counselleeDashboard");
    } catch (err) {
      //  setErrorMessage("Invalid OTP");
      // setErr(errorMessage);
      setErrorMessage("Email not verified. Please verify your email first.");
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };
  //new logout
  const handleLogout = async () => {
    try {
      await axios.post("https://mindafrikserver.onrender.com/user/logout");
      // Redirect to the login page after successful logout
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
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
      {/* new logout */}
      {/* Render the logout button */}
      <button onClick={handleLogout} className="submitFormBtn btn">
        Logout
      </button>
      {/* ... Other components ... */}
      <h6 className="text-muted text-end">
        Forgot Password, <Link to="/ForgotPasswordPage">Click here</Link>{" "}
      </h6>{" "}
      <h6 className="text-muted text-center pt-2">
        Don't have an account? <Link to="/counselleeSignUp">SignUp</Link>{" "}
      </h6>
    </>
  );
};
export const ForgotPasswordForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);

  const [validationErrors, setValidationErrors] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setSubmitting(true);

    const email = values.email;

    try {
      await axios.patch(
        "https://mindafrikserver.onrender.com/user/send-otp",
        // "https://localhost:4000/user/send-otp",
        // inputs
        {
          email: email,
        }
      );

      setSuccessMessage("Password reset email sent successfully");
      navigate("/verify-otp", { state: { email: email } });
    } catch (error) {
      setErrorMessage("Email not verified. Please verify your email first.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .matches(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              "Invalid email format"
            )
            .required("Email is required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <div className="align-items-center">
                {" "}
                <h5
                  className="text-muted text-center py-2"
                  style={{ fontSize: "1.1rem" }}
                >
                  <b>Forgot your password?</b>
                </h5>
                <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                  To reset your password, enter the email address that you used
                  to set up your account. We'll send you an OTP to help you get
                  back into your account
                </p>{" "}
              </div>
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
            <div className="my-3 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submitFormBtn btn"
              >
                {isSubmitting ? "Sending..." : "Send"}
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
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export const VerifyOtpForm = () => {
  const [isSubmitting, setSubmitting] = useState(); // Tracks form submission state
  const [status, setStatus] = useState(); // Stores status message
  const [err, setErr] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Get email from URL query parameter
  const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const email = queryParams.get("email");
  const email = location.state ? location.state.email : "";
  console.log("Email from URL: ", email);

  const navigate = useNavigate();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      otp: new Array(4).fill(""),
      email: email || "",
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(Yup.string().min(1, "OTP is required")) // Specifies that each element in the `otp` array should be a string with a minimum length of 1
        .test(
          "isComplete",
          "OTP is required",
          (value) => value.join("").length === 4 // Custom test function to check if the joined OTP string has a length of 4
        ),
    }),
    onSubmit: async (values) => {
      const otp = values.otp.join(""); // Join the OTP array values into a single string
      // Check if the OTP length is equal to 4
      if (otp.length === 4 && values.email) {
        handleSubmit(otp, values.email); // Call the submitForm function with the OTP and email values
      }
    },
  });

  // Handles OTP field change
  const handleOTPChange = (index, event) => {
    const { value } = event.target; // Extract the value from the event target

    // Validate the value to allow only digits
    if (/^\d*$/.test(value)) {
      const otp = [...formik.values.otp]; // Make a copy of the otp array from formik values
      otp[index] = value; // Update the OTP value at the specified index
      formik.setFieldValue("otp", otp); // Update the otp field value in formik
    }
  };

  // Handles form submission
  const handleSubmit = async (otp, email) => {
    setSubmitting(true); // Set form submission state to true

    try {
      const response = await axios.patch(
        // `http://localhost:4000/user/verify-otp?email=${email}`,
        `https://mindafrikserver.onrender.com/user/verify-otp?email=${email}`,
        { otp: otp }
      );

      setSuccessMessage("OTP verified successfully");
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid OTP");
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="Auth-otp-container">
          <div className="Auth-otp-wrapper py-3">
            {formik.values.otp && // Checks if the `otp` field value exists
              formik.values.otp.map((digit, index) => {
                // Maps over each digit in the `otp` field
                return (
                  <>
                    {" "}
                    <input
                      key={`otp-${index}`}
                      type="text"
                      placeholder="0"
                      autoComplete="off"
                      maxLength="1" // Limits the input to a maximum length of 1 character
                      name={`otp[${index}]`} // Sets the name attribute for each input to "otp[index]"
                      value={digit} // Sets the value of each input to the corresponding digit value
                      onChange={(event) => handleOTPChange(index, event)} // Calls the `handleOTPChange` function when the input value changes
                      onBlur={formik.handleBlur}
                      className="auth-otp-field"
                    />
                  </>
                );
              })}

            {formik.errors.otp &&
            formik.touched.otp &&
            formik.errors.otp &&
            // formik.errors.otp[index] &&
            formik.touched.otp ? (
              // formik.touched.otp[index] ? (
              <div className="ms-3 auth-error-message">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
        <div className="Auth-verification-instruction"></div>
        <div className="my-3 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="submitFormBtn btn"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          {err && (
            <p className="mt-3 auth-error-message" style={{ color: "red" }}>
              {err}
            </p>
          )}
        </div>
      </form>
    </>
  );
};

// export const VerifyOtpFormm = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const [isSubmitting, setSubmitting] = useState(false);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [err, setErr] = useState(null);

//   const navigate = useNavigate();

//   // Get email from URL query parameter
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const email = queryParams.get("email");

//   const handleSubmit = async (values) => {
//     setSubmitting(true);

//     const otp = values.otp;

//     try {
//       await axios.patch(
//         // "https://mindafrikserver.onrender.com/user/verify-otp",
//         `https://mindafrikserver.onrender.com/user/verify-otp?email=${email}`,
//         // "https://localhost:4000/user/send-otp",
//         // inputs
//         {
//           otp: otp,
//         }
//       );
//       setSuccessMessage("OTP verified successfully");
//       navigate("/reset-password");
//     } catch (error) {
//       setErrorMessage("Failed to verify OTP");
//     } finally {
//       setSubmitting(false); // Set form submission state to false
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     // Send a request to the backend API to initiate the password reset process
//   //     await axios.post(
//   //       "https://mindafrik-app-backend.onrender.com/clients/reset-password",
//   //       {
//   //         email,
//   //       }
//   //     );

//   //     setSuccessMessage("Password reset email sent successfully");
//   //   } catch (error) {
//   //     setErrorMessage("Failed to send password reset email");
//   //   }
//   // };
//   const handleBlur = (index) => {
//     const { errors, touched } = state;

//     if (touched.otp[index]) {
//       const otp = state.otp.join("");

//       if (otp.length === 4) {
//         handleSubmit(otp, state.email);
//       }
//     }
//   };
//   return (
//     <>
//       {/* <Form>
//         <Link to="/" className="text-black">
//           <KeyboardBackspaceOutlinedIcon />
//         </Link>
//         <h6 className="text-muted text-center py-2">
//           <b>Forgot your password ?</b>
//         </h6>
//         <h6 className="text-muted">
//           To reset your password, enter the email address that you used to set
//           up your account. We'll send you a link to help you get back into your
//           account
//         </h6>
//         <Form.Group className="mb-3 py-2" controlId="formBasicEmail">
//           <Form.Control
//             type="email"
//             // id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//             placeholder="Email Address"
//             className=" placeholderRadius"
//           />
//         </Form.Group>{" "}
//       </Form>{" "}
//       <div className="my-3 text-center">
//         <button className="btn btn-primary" onClick={handleSubmit}>
//           Send
//         </button>
//         <SendBtn />
//       </div> */}
//       <Formik
//         initialValues={{
//           otp: new Array(4).fill(""), // Initializes the `otp` field as an array with 4 empty strings
//           email: email || "", // Initializes the `email` field with the value of the `email` variable if it exists, otherwise it initializes it as an empty string
//         }}
//         validationSchema={Yup.object().shape({
//           otp: Yup.array()
//             .of(Yup.string().min(1, "OTP is required")) // Specifies that each element in the `otp` array should be a string with a minimum length of 1
//             .test(
//               "isComplete",
//               "OTP is required",
//               (value) => value.join("").length === 4 // Custom test function to check if the joined OTP string has a length of 4
//             ),
//         })}
//         onSubmit={async (values) => {
//           const otp = values.otp.join(""); // Join the OTP array values into a single string
//           // Check if the OTP length is equal to 4
//           if (otp.length === 4) {
//             handleSubmit(otp, values.email); // Call the submitForm function with the OTP and email values
//           }
//         }}
//         // onSubmit={handleSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   key={index}
//                   name={`otp[${index}]`}
//                   value={digit}
//                   type="otp"
//                   autoComplete="off"
//                   placeholder="0"
//                   maxLength="1"
//                   className="w-100 my-2 formikFieldStyle"
//                   // onChange={(event) => handleOTPChange(index, event)}
//                   onBlur={props.handleBlur}
//                 />
//               </div>{" "}
//               {errors.otp &&
//               touched.otp &&
//               errors.otp[index] &&
//               touched.otp[index] ? (
//                 <div className="ms-3 auth-error-message">{errors.email}</div>
//               ) : null}
//             </div>
//             <div className="my-3 text-center">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="submitFormBtn btn"
//               >
//                 {isSubmitting ? "Sending..." : "Send"}
//               </button>
//               {err && (
//                 <p className="mt-3 auth-error-message" style={{ color: "red" }}>
//                   {err}
//                 </p>
//               )}
//             </div>
//           </Form>
//         )}
//       </Formik>
//       {successMessage && <p>{successMessage}</p>}
//       {errorMessage && <p>{errorMessage}</p>}
//     </>
//   );
// };
export const ResetPasswordForm = () => {
  // const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const [isSubmitting, setSubmitting] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };
  const [validationErrors, setValidationErrors] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setSubmitting(true);

    const password = values.password;
    const confirmPassword = values.confirmPassword;

    try {
      await axios.patch(
        "https://mindafrikserver.onrender.com/user/reset-password",
        // `https://mindafrikserver.onrender.com/user/reset-password?email=${email}`
        // "https://localhost:4000/user/reset-password",
        // inputs
        {
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      setSuccessMessage("Password reset success");
      navigate("/signInPage");
    } catch (error) {
      setErrorMessage("Failed to reset password");
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
            ),
          confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
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
            <div>
              <div className="d-flex align-items-center placeholderRadius mt-4">
                {" "}
                <Field
                  name="confirmPassword"
                  type={showPassword2 ? "text" : "password"}
                  autoComplete="off"
                  placeholder="Confirm Password"
                  className="w-100 my-2 formikFieldStyle"
                />
                <div onClick={togglePasswordVisibility2}>
                  {showPassword1 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                </div>
              </div>

              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="ms-3 auth-error-message">
                  {errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div className="my-3 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submitFormBtn btn"
              >
                {isSubmitting ? "Sending..." : "Send"}
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
