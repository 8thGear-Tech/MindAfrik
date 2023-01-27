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
  return (
    <>
      <Form>
        <Form.Group className="mb-3 py-2" controlId="formBasicName">
          <Row>
            <Col>
              <Form.Group className="mb-3 py-2" controlId="formBasicFirstName">
                {" "}
                <Form.Control
                  placeholder="First Name"
                  className="placeholderRadius"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 py-2" controlId="formBasicLastName">
                {" "}
                <Form.Control
                  placeholder="Last Name"
                  className="placeholderRadius"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicEmail">
          <Form.Control
            type="email"
            className="placeholderRadius"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
          <Form.Control
            as="textarea"
            rows={3}
            className="placeholderRadius pt-4 pb-5"
            placeholder="Message"
          />
        </Form.Group>
      </Form>{" "}
      <div className="my-3 text-center">
        <SubmitBtn />
      </div>
    </>
  );
};
