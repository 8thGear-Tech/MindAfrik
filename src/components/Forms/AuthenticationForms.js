// Chris
// SignInForm
// ForgotPasswordForm
// SignUpAsCounselorForm

// Michael
// SignUpAsCounseleeForm
//SubscribeToNewsletterForm
import { useState } from "react";
import axios from "axios";
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
            className="placeholderRadius"
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
// export const SignUpAsCounselleeForm = () => {
//   const [firstnameReg, setFirstnameReg] = useState({});
//   const [lastnameReg, setLastnameReg] = useState({});
//   const [emailReg, setEmailReg] = useState({});
//   const [passwordReg, setPasswordReg] = useState({});

//   const handleSubmit = () => {
//     axios
//       .post("http://localhost:8800/clientsignup", {
//         firstname: firstnameReg,
//         lastname: lastnameReg,
//         email: emailReg,
//         password: passwordReg,
//       })
//       .then((response) => {
//         console.log(response);
//       });
//   };

//   // const [inputs, setInputs] = useState({
//   //   firstname: "",
//   //   lastname: "",
//   //   email: "",
//   //   password: "",
//   //   confirmpassword: "",
//   // });

//   // const handleChange = (e) => {
//   //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   // };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const res = await axios.post("/auth/counselleesignup", inputs);
//   //     console.log(res);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   // console.log(inputs);
//   return (
//     <>
//       <Form>
//         <Form.Group className="mb-3 py-2" controlId="firstname">
//           <Form.Control
//             type="text"
//             placeholder="First Name"
//             className=" placeholderRadius"
//             name="firstname"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="lastname">
//           <Form.Control
//             type="text"
//             placeholder="Last Name"
//             className="placeholderRadius"
//             name="lastname"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="email">
//           <Form.Control
//             type="email"
//             placeholder="Email"
//             className="placeholderRadius"
//             name="email"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3 py-2" controlId="password">
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             className=" placeholderRadius"
//             name="password"
//           />
//         </Form.Group>
//         {/* <Form.Group className="mb-3 py-2" controlId="confirmpassword">
//           <Form.Control
//             type="password"
//             placeholder="Confirm Password"
//             className=" placeholderRadius"
//             onChange={handleChange}
//             name="confirmpassword"
//           />
//         </Form.Group> */}
//         <Form.Text className="text-muted">
//           By signing up, you agree to our Terms Of Service and acknowledge that
//           you have read our Privacy Policy
//         </Form.Text>
//       </Form>
//       <div className="my-3 text-center">
//         {/* <button>Hello</button> */}
//         <button onClick={handleSubmit}>Hello</button>
//         {/* <SignUpBtn  /> */}
//       </div>
//     </>
//   );
// };
export const SignUpAsCounselleeForm = () => {
  const [firstnameReg, setFirstnameReg] = useState({});
  const [lastnameReg, setLastnameReg] = useState({});
  const [emailReg, setEmailReg] = useState({});
  const [passwordReg, setPasswordReg] = useState({});

  const handleSubmit = () => {
    axios
      .post("http://localhost:8800/clientsignup", {
        firstname: firstnameReg,
        lastname: lastnameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  // const [inputs, setInputs] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   confirmpassword: "",
  // });

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("/auth/counselleesignup", inputs);
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // console.log(inputs);
  return (
    <>
      <Form>
        <Form.Group className="mb-3 py-2" controlId="firstname">
          <Form.Control
            type="text"
            placeholder="First Name"
            className=" placeholderRadius"
            name="firstname"
            onChange={(e) => {
              setFirstnameReg(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="lastname">
          <Form.Control
            type="text"
            placeholder="Last Name"
            className="placeholderRadius"
            onChange={(e) => {
              setLastnameReg(e.target.value);
            }}
            name="lastname"
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            className="placeholderRadius"
            name="email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            className=" placeholderRadius"
            name="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3 py-2" controlId="confirmpassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            className=" placeholderRadius"
            onChange={handleChange}
            name="confirmpassword"
          />
        </Form.Group> */}
        <Form.Text className="text-muted">
          By signing up, you agree to our Terms Of Service and acknowledge that
          you have read our Privacy Policy
        </Form.Text>
      </Form>
      <div className="my-3 text-center">
        {/* <button>Hello</button> */}
        <button onClick={handleSubmit}>Hello</button>
        {/* <SignUpBtn  /> */}
      </div>
    </>
  );
};
