import { Link } from "react-router-dom";
import { SignInForm } from "../../components/Forms/AuthenticationForms";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

//images
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";

const SignInPage = () => {
  const userRole = "client";
  // const userRole = ["admin", "counsellor", "client"];
  return (
    <>
      <Container fluid className="">
        <Row
          className="d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionOneBgColor text-center align-items-center py-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="py-5">
              {" "}
              {/* <h3 className="">Welcome to</h3> */}
              <img variant="top" src={mindafrikfulllogo} className="py-5" />
            </div>
          </Col>
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionTwooBgColor p-5">
            <Link to="/" className="text-black">
              <KeyboardBackspaceOutlinedIcon />
            </Link>
            {/* <h4 className="text-center pb-3">Sign In</h4> */}
            <SignInForm userRole={userRole} />

            {/* method 1 */}
            {/* <SignInForm userRoles={["admin", "counsellor", "client"]} /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

// const SignInForm = () => {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//   });

//   const [err, setErr] = useState(null);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3005/clients/clientlogin", inputs);
//       navigate("/about");
//     } catch (err) {
//       setErr(err.response.data);
//     }
//   };
//   return (
//     <>
//       {" "}
//       {/* <Link to="/" className="text-black">
//         <KeyboardBackspaceOutlinedIcon />
//       </Link> */}
//       <Form>
//         {/* <Form.Group className="mb-3 pb-2 pt-5" controlId="formBasicEmail">
//           <Form.Control
//             type="email"
//             placeholder="Email Address"
//             className=" placeholderRadius"
//             name="email"
//             onChange={handleChange}
//           />
//         </Form.Group> */}
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
//             className=" placeholderRadius"
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
//       <button onClick={handleSubmit}>Hello</button>
//       {/* <div className="text-center">
//         <LoginBtn />
//       </div> */}
//     </>
//   );
// };

export default SignInPage;
