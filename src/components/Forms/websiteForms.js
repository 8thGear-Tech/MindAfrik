// Awelewa
// AssessmentForm
// TakeATestForm

//ContactForm

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { SubmitBtn } from "../Buttons/actionBtn";
//images

export const AssesmentForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export const ContactForm = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [userdetails, setUserDetails] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setUser({ ...user });
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    // setUser({ firstName: "", lastName: "", password: "", confirmPassword: "" });
  };

  return (
    <>
      <div className="">
        <Form className="py-5">
          <h3 className="text-center mb-4">Get In Touch</h3>
          <Row className="mb-3 d-flex px-4">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 px-4" controlId="formGridAddress1">
            <Form.Control placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3 px-4" controlId="formGridAddress2">
            <Form.Control placeholder="Type your message here" />
          </Form.Group>
          <div className="text-center">
            {" "}
            <SubmitBtn />
          </div>
        </Form>
        {/* <Form onSubmit={handleSubmit}>
              <h3 className="text-center my-4">CREATE ACCOUNT </h3>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="firstName"
                // id="firstName"
              >
                <Form.Control
                  type="name"
                  placeholder="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="lastName"
                // id="lastName"
              >
                <Form.Control
                  type="name"
                  placeholder="Last Name"
                  name="lastName"
                  value={user.lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="password"
                // id="password"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="confirmPassword"
                // id="confirmPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Create Account
                </Button>
              </div>
            </Form> */}
      </div>
    </>
  );
};
