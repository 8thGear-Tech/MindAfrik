import { useState, useEffect } from "react";
import Cookies from "js-cookie";
// import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

//date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import Form from "react-bootstrap/Form";
import {
  SignUpBtn,
  LoginBtn,
} from "../../components/Buttons/authenticationBtn";
import Button from "react-bootstrap/Button";
import { SendBtn, SubmitForm } from "../Buttons/actionBtn";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
// import { AuthContext, AuthContextProvider } from "../context/authContext";
import useAuth from "../hooks/useAuth";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { PendingVerificationModal } from "../../pages/authenticationPages/emailVerified";

// import { rejects } from "assert";
// import { error } from "console";

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
  const { setAuth } = useAuth();
  // const { setAuth } = useContext(AuthContextProvider);
  const [isSubmitting, setSubmitting] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true); // Step 1: Add loading state

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // useEffect(() => {
  //   const access_token = Cookies.get("access_token");

  //   if (access_token) {
  //     // You can perform any additional validation or use it for authentication here
  //     setAuth({ access_token }); // Set authentication state with the retrieved token
  //     navigate(from, { replace: true }); // Redirect the user to the previous page or a default page
  //   }
  // }, []);

  // useEffect(() => {
  //   const access_token = Cookies.get("access_token");

  //   if (access_token) {
  //     setAuth({ access_token }); // Set authentication state with the retrieved token
  //     navigate(from, { replace: true }); // Redirect the user to the previous page or a default page
  //   }
  // }, [auth?.access_token, navigate, from, setAuth]);
  useEffect(() => {
    const access_token = Cookies.get("access_token");

    if (access_token) {
      setAuth({ access_token });
    }

    setLoading(false); // Step 2: Set loading state to false after token check
  }, [setAuth]);

  const handleSubmit = async (values) => {
    setSubmitting(true); // Set isSubmitting to true to disable the button during form submission

    // const firstName = values.firstName;
    // const lastName = values.lastName;
    const email = values.email;
    const password = values.password;

    try {
      const response = await axios.post(
        // "http://localhost:4000/user/login",
        "https://mindafrikserver.onrender.com/user/login",
        // inputs
        {
          // firstName: firstName,
          // lastName: lastName,
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("Response:", response);
      // const accessToken = response.data.access_token;
      const { data } = response; // Destructure the data from the response

      if (data.status === "Success") {
        const { role, access_token } = data.data; // Destructure role and access_token from data.data
        //NEW
        // document.cookie = `access_token=${access_token}; path=/; secure; HttpOnly; SameSite=Strict;`;
        Cookies.set("access_token", access_token, { expires: 1, path: "" }); // Adjust the expiration time as needed
        // Now you can use role and access_token as needed
        console.log("Role:", role);
        console.log("Access Token:", access_token);

        // Assuming setAuth is a function to set authentication state
        setAuth({ email, password, role, access_token }); // Set authentication state to true
        // setAuth(true); // Set authentication state to true
        // navigate(from, { replace: true });
        if (role === "Counsellor") {
          navigate("/counsellorDashboard", { replace: true });
        } else if (role === "Admin") {
          navigate("/adminDashboard", { replace: true });
        } else if (role === "Counselee") {
          navigate("/counselleeDashboard", { replace: true });
        } else {
          navigate("/unauthorized", { replace: true });
        }
      }
      //  else {
      //     console.error("Error during login:", err);
      //  }

      //start
      // // const accessToken = response?.data?.access_token;
      // const role = response.data.role;
      // // const role = response?.data?.role;

      // // Update the data with the access token and role
      // const data = {
      //   email,
      //   password,
      //   accessToken,
      //   role,
      // };

      // setAuth(data);

      //stop
      // setAuth({ email, password, role, accessToken });
      // setAuth({ email, password, role, accessToken });

      //new

      // setAuth({
      //   user: { email, password },
      //   role: "Counsellor", // Set the user's role based on your logic
      // });
      // navigate(from, { replace: true });
    } catch (err) {
      // const errorMessage = err.response?.data || "An error occurred";
      // setErr(errorMessage);
      if (!err?.response) {
        setErr("No Server Response");
      } else if (err.response?.status === 400) {
        setErr("Missing email or password");
      } else if (err.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        // setErr("Login failed");
        console.error("Error during login:", err);
      }
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };

  // const handleSubmit = async (values) => {
  //   setSubmitting(true); // Set isSubmitting to true to disable the button during form submission

  //   const email = values.email;
  //   const password = values.password;

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4000/user/login",
  //       // "https://mindafrikserver.onrender.com/user/login",

  //       {
  //         email: email,
  //         password: password,
  //       }
  //       // {
  //       //   headers: {
  //       //     Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  //       //   },
  //       // }
  //     );

  //     // const accessToken = response.data?.access_token;
  //     // if (accessToken) {
  //     //   // Parse the access token to get the userRole
  //     //   const decodedToken = jwt.decode(accessToken);
  //     //   const userRole = decodedToken?.userRole;

  //     //   // Navigate to the corresponding dashboard based on the user's role
  //     //   if (userRole === "counsellee") {
  //     //     navigate("/counselleeDashboard");
  //     //   } else if (userRole === "admin") {
  //     //     navigate("/adminDashboard");
  //     //   } else if (userRole === "counsellor") {
  //     //     navigate("/counsellorDashboard");
  //     //   }
  //     // }

  //     // No need to store the token in local storage
  //     // Instead, the token should be in an HttpOnly cookie set by the server
  //     // The server should handle the authentication and role-based authorization

  //     // Navigate to the corresponding dashboard based on the user's role
  //     const userRole = response.data?.data?.user?.userRole;
  //     if (userRole === "counsellee") {
  //       navigate("/counselleeDashboard");
  //     } else if (userRole === "admin") {
  //       navigate("/adminDashboard");
  //     } else if (userRole === "counsellor") {
  //       navigate("/counsellorDashboard");
  //     } else {

  //       setErrorMessage("Unauthorized user role");
  //     }
  //   } catch (err) {
  //     setErrorMessage(err.response?.data?.message || "An error occurred");

  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
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
      <h6 className="text-muted text-end">
        Forgot Password, <Link to="/ForgotPasswordPage">Click here</Link>{" "}
      </h6>{" "}
      <h6 className="text-muted text-center pt-2">
        Don't have an account? <Link to="/counselleeSignUp">SignUp</Link>{" "}
      </h6>
    </>
  );
};

export const LogoutButton = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await axios.post("https://mindafrikserver.onrender.com/user/logout");
      // Redirect to the login page after successful logout
      navigate("/signInPage");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button onClick={handleLogout} className="submitFormBtn btn">
      Logout
    </button>
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
          userRole: "counsellee",
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

            <Field type="hidden" name="userRole" value="counsellee" />
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

//Counsellor Form

export const SignUpAsCounsellorForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  const [isSubmitting, setSubmitting] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  const [validationErrors, setValidationErrors] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  // const handleSubmit = async (values, { setSubmitting }) => {
  const handleSubmit = async (values, { resetForm }) => {
    setSubmitting(true);

    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("gender", values.gender);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("nationality", values.nationality);
    formData.append("stateOfOrigin", values.stateOfOrigin);
    formData.append("dateOfBirth", startDate);
    formData.append("resume", values.resume);
    // formData.append("coverletter", values.coverletter);
    formData.append("school", values.school);
    formData.append("degree", values.degree);
    formData.append("discipline", values.discipline);
    formData.append("experience", values.experience);
    formData.append("whyJoinUs", values.whyJoinUs);

    try {
      await axios.post(
        "https://mindafrikserver.onrender.com/user/sign-up-as-a-counsellor",
        // "https://localhost:4000/user/sign-up-as-a-counsellor",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      resetForm();
      setShowModal(true);
      // setSubmitting(false);
      // navigate("/verify-email");
    } catch (err) {
      const errorMessage = err.response?.data || "An error occurred";
      setErr(errorMessage);
      setSubmitting(false);
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
          gender: "",
          phoneNumber: "",
          nationality: "",
          stateOfOrigin: "",
          dateOfBirth: "",
          resume: null,
          // coverletter: null,
          school: "",
          degree: "",
          discipline: "",
          experience: "",
          whyJoinUs: "",
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
          gender: Yup.string(),
          phoneNumber: Yup.string().required("Phone Number is required"),
          nationality: Yup.string().required("Nationality is required"),
          stateOfOrigin: Yup.string().required("State of origin is required"),
          dateOfBirth: Yup.string(),
          resume: Yup.mixed().required("Resume is required"),
          // coverletter: Yup.mixed().required("Coverletter is required"),
          school: Yup.string().required("School is required"),
          degree: Yup.string().required("Degree is required"),
          discipline: Yup.string().required("Discipline is required"),
          experience: Yup.string().required("Experience is required"),
          whyJoinUs: Yup.string().required("This field is required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          // {({ errors, touched, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="align-items-center placeholderRadius mt-4">
              <Field
                name="firstName"
                type="text"
                autoComplete="off"
                placeholder="First Name"
                className="w-100 my-2 formikFieldStyle"
              />
              {errors.firstName && touched.firstName && (
                <div className="ms-3 auth-error-message">
                  {errors.firstName}
                </div>
              )}
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
            {/* <div> */}{" "}
            {/* <div className="align-items-center placeholderRadius mt-4">
                <Field
                  component="select"
                  name="gender"
                  type="email"
                  // autoComplete="off"
                  placeholder="Select options"
                  className="w-100 my-2 formikFieldStyle"
                >
                  <options value="male">Male</options>
                  <options value="female">Female</options>
                </Field>

              </div>{" "} */}
            <div>
              {" "}
              <div id="my-radio-group" className="ms-2 mt-3 mb-2">
                Gender
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    className="me-2"
                  />
                  Male
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    className="me-2"
                  />
                  Female
                </label>
                {/* <div>Picked: {values.picked}</div> */}
              </div>
              {/* {errors.gender && touched.gender ? (
                <div className="ms-3 auth-error-message">{errors.gender}</div>
              ) : null} */}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="phoneNumber"
                  type="text"
                  autoComplete="off"
                  placeholder="Phone Number"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div className="ms-3 auth-error-message">
                  {errors.phoneNumber}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="nationality"
                  type="text"
                  autoComplete="off"
                  placeholder="Nationality"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.nationality && touched.nationality ? (
                <div className="ms-3 auth-error-message">
                  {errors.nationality}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="stateOfOrigin"
                  type="text"
                  autoComplete="off"
                  placeholder="State of Origin"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.stateOfOrigin && touched.stateOfOrigin ? (
                <div className="ms-3 auth-error-message">
                  {errors.stateOfOrigin}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div>Date of birth</div>
              {/* <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="placeholderRadius mt-4"
              /> */}
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className="placeholderRadius mt-4"
              />
              {/* {errors.dateOfBirth && touched.dateOfBirth ? (
                <div className="ms-3 auth-error-message">
                  {errors.dateOfBirth}
                </div>
              ) : null} */}
            </div>
            <div className="align-items-center mt-4">
              <div>Resume/CV</div>
              <input
                type="file"
                name="resume"
                accept=".jpeg, .png, .jpg"
                onChange={(event) => {
                  setFieldValue("resume", event.currentTarget.files[0]);
                }}
              />
              {errors.resume && touched.resume && (
                <div className="ms-3 auth-error-message">{errors.resume}</div>
              )}
            </div>
            {/* <div className="align-items-center mt-4">
              <div>Coverletter</div>
              <input
                type="file"
                name="coverletter"
                accept=".jpeg, .png, .jpg"
                onChange={(event) => {
                  setFieldValue("coverletter", event.currentTarget.files[0]);
                }}
              />
              {errors.coverletter && touched.coverletter && (
                <div className="ms-3 auth-error-message">
                  {errors.coverletter}
                </div>
              )}
            </div> */}
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="school"
                  type="text"
                  autoComplete="off"
                  placeholder="School"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.school && touched.school ? (
                <div className="ms-3 auth-error-message">{errors.school}</div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="degree"
                  type="text"
                  autoComplete="off"
                  placeholder="Degree"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.degree && touched.degree ? (
                <div className="ms-3 auth-error-message">{errors.degree}</div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="discipline"
                  type="text"
                  autoComplete="off"
                  placeholder="Discipline"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.discipline && touched.discipline ? (
                <div className="ms-3 auth-error-message">
                  {errors.discipline}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="experience"
                  type="text"
                  autoComplete="off"
                  placeholder="Experience (in years)"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.experience && touched.experience ? (
                <div className="ms-3 auth-error-message">
                  {errors.experience}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="whyJoinUs"
                  type="text"
                  autoComplete="off"
                  placeholder="Why do you want to join Mindafrik?"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.whyJoinUs && touched.whyJoinUs ? (
                <div className="ms-3 auth-error-message">
                  {errors.whyJoinUs}
                </div>
              ) : null}
            </div>
            {err && (
              <p className="mt-3 auth-error-message" style={{ color: "red" }}>
                {err.message}
              </p>
            )}
            <div className="mt-5 mb-3 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submitFormBtn btn"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {err && (
                <p className="mt-3 auth-error-message" style={{ color: "red" }}>
                  {err.message}
                </p>
              )}
            </div>
            {/* <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button> */}
          </Form>
        )}
      </Formik>
      {showModal && (
        <PendingVerificationModal handleClose={() => setShowModal(false)} />
      )}
    </>
  );
};
export const SignUpUpAsCounsellorForm = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [isSubmitting, setSubmitting] = useState(false);
  // const [showPassword1, setShowPassword1] = useState(false);
  // const togglePasswordVisibility1 = () => {
  //   setShowPassword1((prevShowPassword) => !prevShowPassword);
  // };

  const [validationErrors, setValidationErrors] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const [resume, setResume] = useState();
  // const onInputChange = (e) => {
  //   console.log(e.target.files[0]);
  //   setResume(e.target.files[0]);
  // };

  const handleSubmit = async (values) => {
    // e.preventDefault();
    // setSubmitting(true);

    const formData = new FormData();
    const firstName = values.firstName;
    formData.append("firstName", values.firstName);
    formData.append("resume", values.resume);

    // const lastName = values.lastName;
    // const email = values.email;
    // const password = values.password;
    // const gender = values.gender;
    // const phoneNumber = values.phoneNumber;
    // const nationality = values.nationality;
    // const stateOfOrigin = values.stateOfOrigin;
    // const dateOfBirth = values.dateOfBirth;
    // const resume = values.resume;
    // const coverletter = values.coverletter;
    // const school = values.school;
    // const degree = values.degree;
    // const discipline = values.discipline;
    // const experience = values.experience;
    // const whyJoinUs = values.whyJoinUs;

    try {
      await axios.post(
        // "http://localhost:4000/user/sign-up-as-a-counsellor",
        "https://mindafrikserver.onrender.com/user/sign-up-as-a-counsellor",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
        // // inputs
        // {
        //   firstName: firstName,
        //   //   lastName: lastName,
        //   //   email: email,
        //   //   password: password,
        //   //   gender: gender,
        //   //   phoneNumber: phoneNumber,
        //   //   nationality: nationality,
        //   //   stateOfOrigin: stateOfOrigin,
        //   //   resume: resume,
        //   //   dateOfBirth: dateOfBirth,
        //   //   school: school,
        //   //   coverletter: coverletter,
        //   //   discipline: discipline,
        //   //   experience: experience,
        //   //   degree: degree,
        //   //   whyJoinUs: whyJoinUs,
        // }
      );
      navigate("/verify-email");
    } catch (err) {
      const errorMessage = err.response?.data || "An error occurred";
      setErr(errorMessage);
    }
  };

  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const baseSixtyFour = await convertToBaseSIxtyFour(file);
  //   console.log(baseSixtyFour);
  // };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          resume: null, // Change to null instead of an empty string
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First name is required"),
          resume: Yup.string().required("Resume is required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div>
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
              <div className="align-items-center mt-4">
                {" "}
                <div>Resume/CV</div>
                {/* <div className="align-items-center placeholderRadius mt-4"> */}
                {/* <Field
                  input="file"
                  name="resume"
                  type="file"
                  autoComplete="off"
                  className="w-100 my-2 formikFieldStyle"
                /> */}
                <input
                  type="file"
                  name="resume"
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => {
                    setResume("resume", e.currentTarget.files[0]);
                    // setResume("resume", e.target.files[0]);
                  }}
                  // onChange={onInputChange}
                />
                {/* <input
                  type="file"
                  name="resume"
                  id="resume-upload"
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleFileUpload(e)}
                /> */}
              </div>
              {errors.resume && touched.resume ? (
                <div className="ms-3 auth-error-message">{errors.resume}</div>
              ) : null}
            </div>
            {err && (
              <p className="mt-3 auth-error-message" style={{ color: "red" }}>
                {err.message}
              </p>
            )}
            <button type="submit">Submit</button>
            {/* <div className="my-3 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submitFormBtn btn"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div> */}
          </Form>
        )}
      </Formik>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="file"
          // accept="image/"
          accept=".jpeg, .png, .jpg"
          onChange={onInputChange}
        />
        <button type="submit">Submit</button>
      </form> */}
    </>
  );
};

const convertToBaseSIxtyFour = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
// export const SignUpAsCounsellorForm = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [isSubmitting, setSubmitting] = useState(false);
//   const [showPassword1, setShowPassword1] = useState(false);
//   const togglePasswordVisibility1 = () => {
//     setShowPassword1((prevShowPassword) => !prevShowPassword);
//   };

//   const [validationErrors, setValidationErrors] = useState({});
//   const [err, setErr] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async (values) => {
//     setSubmitting(true);

//     const formData = new FormData();

//     // const firstName = values.firstName;
//     // const lastName = values.lastName;
//     // const email = values.email;
//     // const password = values.password;
//     // const gender = values.gender;
//     // const phoneNumber = values.phoneNumber;
//     // const nationality = values.nationality;
//     // const stateOfOrigin = values.stateOfOrigin;
//     // const dateOfBirth = values.dateOfBirth;
//     // const resume = values.resume;
//     // const coverletter = values.coverletter;
//     // const school = values.school;
//     // const degree = values.degree;
//     // const discipline = values.discipline;
//     // const experience = values.experience;
//     // const whyJoinUs = values.whyJoinUs;
//     // Append other form data fields
//     formData.append("firstName", values.firstName);
//     formData.append("lastName", values.lastName);
//     formData.append("email", values.email);
//     formData.append("password", values.password);
//     formData.append("gender", values.gender);
//     formData.append("phoneNumber", values.phoneNumber);
//     formData.append("nationality", values.nationality);
//     formData.append("stateOfOrigin", values.stateOfOrigin);
//     formData.append("dateOfBirth", startDate);
//     formData.append("school", values.school);
//     formData.append("degree", values.degree);
//     formData.append("discipline", values.discipline);
//     formData.append("experience", values.experience);
//     formData.append("whyJoinUs", values.whyJoinUs);

//     formData.append("resume", values.resume?.[0]); // Use the safe navigation operator '?'
//     formData.append("coverletter", values.coverletter?.[0]); // Use the safe navigation operator '?'
//     console.log("formData:", formData);
//     // // Append resume and coverletter files
//     // formData.append("resume", values.resume[0]);
//     // formData.append("coverletter", values.coverletter[0]);

//     try {
//       await axios.post(
//         // "http://localhost:4000/user/signup",
//         "https://mindafrikserver.onrender.com/user/sign-up-as-a-counsellor",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data", // Make sure this header is set
//           },
//         }
//         // inputs
//         // {
//         //   firstName: firstName,
//         //   lastName: lastName,
//         //   email: email,
//         //   password: password,
//         //   gender: gender,
//         //   phoneNumber: phoneNumber,
//         //   nationality: nationality,
//         //   stateOfOrigin: stateOfOrigin,
//         //   resume: resume,
//         //   dateOfBirth: dateOfBirth,
//         //   school: school,
//         //   coverletter: coverletter,
//         //   discipline: discipline,
//         //   experience: experience,
//         //   degree: degree,
//         //   whyJoinUs: whyJoinUs,
//         // }
//       );
//       navigate("/verify-email");
//     } catch (err) {
//       const errorMessage = err.response?.data || "An error occurred";
//       setErr(errorMessage);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     const baseSixtyFour = await convertToBaseSIxtyFour(file)
//     console.log(baseSixtyFour);
//   };

//   return (
//     <>
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//           gender: "",
//           phoneNumber: "",
//           nationality: "",
//           stateOfOrigin: "",
//           dateOfBirth: "",
//           resume: "",
//           coverletter: "",
//           school: "",
//           degree: "",
//           discipline: "",
//           experience: "",
//           whyJoinUs: "",
//         }}
//         validationSchema={Yup.object().shape({
//           firstName: Yup.string().required("First name is required"),
//           lastName: Yup.string().required("Last name is required"),
//           email: Yup.string()
//             .matches(
//               /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//               "Invalid email format"
//             )
//             .required("Email is required"),
//           password: Yup.string()
//             .required("Password is required")
//             .min(8, "Password must be at least 8 characters")
//             .matches(
//               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
//               "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
//             ),
//           gender: Yup.string(),
//           phoneNumber: Yup.string().required("Phone Number is required"),
//           nationality: Yup.string().required("Nationality is required"),
//           stateOfOrigin: Yup.string().required("State of origin is required"),
//           dateOfBirth: Yup.string(),
//           resume: Yup.string().required("Resume is required"),
//           coverletter: Yup.string().required("Coverletter is required"),
//           school: Yup.string().required("School is required"),
//           degree: Yup.string().required("Degree is required"),
//           discipline: Yup.string().required("Discipline is required"),
//           experience: Yup.string().required("Experience is required"),
//           whyJoinUs: Yup.string().required("This field is required"),
//         })}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="firstName"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="First Name"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.firstName && touched.firstName ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.firstName}
//                 </div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="lastName"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="Last Name"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.lastName && touched.lastName ? (
//                 <div className="ms-3 auth-error-message">{errors.lastName}</div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="email"
//                   type="email"
//                   autoComplete="off"
//                   placeholder="Email"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>{" "}
//               {errors.email && touched.email ? (
//                 <div className="ms-3 auth-error-message">{errors.email}</div>
//               ) : null}
//             </div>
//             <div>
//               <div className="d-flex align-items-center placeholderRadius mt-4">
//                 {" "}
//                 <Field
//                   name="password"
//                   type={showPassword1 ? "text" : "password"}
//                   autoComplete="off"
//                   placeholder="Password"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//                 <div onClick={togglePasswordVisibility1}>
//                   {showPassword1 ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
//                 </div>
//               </div>

//               {errors.password && touched.password ? (
//                 <div className="ms-3 auth-error-message">{errors.password}</div>
//               ) : null}
//             </div>
//             {/* <div> */}{" "}
//             {/* <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   component="select"
//                   name="gender"
//                   type="email"
//                   // autoComplete="off"
//                   placeholder="Select options"
//                   className="w-100 my-2 formikFieldStyle"
//                 >
//                   <options value="male">Male</options>
//                   <options value="female">Female</options>
//                 </Field>

//               </div>{" "} */}
//             <div>
//               {" "}
//               <div id="my-radio-group">Gender</div>
//               <div role="group" aria-labelledby="my-radio-group">
//                 <label>
//                   <Field type="radio" name="gender" value="Male" />
//                   Male
//                 </label>
//                 <label>
//                   <Field type="radio" name="gender" value="Female" />
//                   Female
//                 </label>
//                 {/* <div>Picked: {values.picked}</div> */}
//               </div>
//               {/* {errors.gender && touched.gender ? (
//                 <div className="ms-3 auth-error-message">{errors.gender}</div>
//               ) : null} */}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="phoneNumber"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="Phone Number"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.phoneNumber && touched.phoneNumber ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.phoneNumber}
//                 </div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="nationality"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="Nationality"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.nationality && touched.nationality ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.nationality}
//                 </div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="stateOfOrigin"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="State of Origin"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.stateOfOrigin && touched.stateOfOrigin ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.stateOfOrigin}
//                 </div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div>Date of birth</div>
//               <DatePicker
//                 showIcon
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 className="placeholderRadius mt-4"
//               />
//               {/* {errors.dateOfBirth && touched.dateOfBirth ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.dateOfBirth}
//                 </div>
//               ) : null} */}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center mt-4">
//                 {" "}
//                 <div>Resume/CV</div>
//                 {/* <div className="align-items-center placeholderRadius mt-4"> */}
//                 {/* <Field
//                   input="file"
//                   name="resume"
//                   type="file"
//                   autoComplete="off"
//                   className="w-100 my-2 formikFieldStyle"
//                 /> */}
//                 <input
//                   type="file"
//                   name="resume"
//                   id="resume-upload"
//                   accept=".jpeg, .png, .jpg"
//                   onChange={(e) => handleFileUpload(e)}
//                 />
//               </div>
//               {errors.resume && touched.resume ? (
//                 <div className="ms-3 auth-error-message">{errors.resume}</div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center mt-4">
//                 {" "}
//                 <div>Coverletter</div>
//                 {/* <div className="align-items-center placeholderRadius mt-4"> */}
//                 {/* <Field
//                   input="file"
//                   name="coverletter"
//                   type="file"
//                   autoComplete="off"
//                   className="w-100 my-2 formikFieldStyle"
//                 /> */}
//                 <input
//                   type="file"
//                   name="coverletter"
//                   id="coverletter-upload"
//                   accept=".jpeg, .png, .jpg"
//                   onChange={(e) => handleFileUpload(e)}
//                 />
//               </div>
//               {errors.coverletter && touched.coverletter ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.coverletter}
//                 </div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="school"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="School"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.school && touched.school ? (
//                 <div className="ms-3 auth-error-message">{errors.school}</div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="degree"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="Degree"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.degree && touched.degree ? (
//                 <div className="ms-3 auth-error-message">{errors.degree}</div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="discipline"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="Discipline"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.discipline && touched.discipline ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.discipline}
//                 </div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="experience"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="Experience (in years)"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.experience && touched.experience ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.experience}
//                 </div>
//               ) : null}
//             </div>
//             <div>
//               {" "}
//               <div className="align-items-center placeholderRadius mt-4">
//                 <Field
//                   name="whyJoinUs"
//                   type="text"
//                   autoComplete="off"
//                   placeholder="Why do you want to join Mindafrik?"
//                   className="w-100 my-2 formikFieldStyle"
//                 />
//               </div>
//               {errors.whyJoinUs && touched.whyJoinUs ? (
//                 <div className="ms-3 auth-error-message">
//                   {errors.whyJoinUs}
//                 </div>
//               ) : null}
//             </div>
//             {/* {errors.email && touched.email ? (
//                 <div className="ms-3 auth-error-message">{errors.email}</div>
//               ) : null} */}
//             {/* </div> */}
//             {/* <Field type="hidden" name="userRole" value="counsellee" /> */}
//             <div className="my-3 text-center">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="submitFormBtn btn"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </button>

//               {err && (
//                 <p className="mt-3 auth-error-message" style={{ color: "red" }}>
//                   {err.message}
//                 </p>
//               )}
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

// const convertToBaseSIxtyFour = (file) => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// };
