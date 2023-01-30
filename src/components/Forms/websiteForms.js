// Awelewa
// AssessmentForm
// TakeATestForm

//ContactForm

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

import { useState } from "react";
import { NavSection } from "../Navbar/guestNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { SubmitBtn } from "../Buttons/actionBtn";
//images

import Dropdown from "react-bootstrap/Dropdown";

export const AssesmentForm = () => {
  return (
    <>
      {" "}
      <NavSection />
      <div className="container-fluid bgColor">
        <h1 className="mt-5 d-flex justify-content-around">
          {" "}
          Anxiety and Depression Symptoms
        </h1>
        <h5 className="d-flex justify-content-around">
          Over the last 2 weeks , how often have you been bothered by feeling
          tired or having little energy?
        </h5>
        <div className="container d-flex justify-content-around">
          <Dropdown.Menu show className="border-0">
            <Dropdown.Item
              eventKey="1"
              className="border border-2 rounded-pill"
            >
              Not at all
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              className="mt-2 w-100 border border-2 rounded-pill"
              style={{ width: "20 rem" }}
            >
              Several days
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              className=" mt-2 border border-2 rounded-pill"
              style={{ width: "20 rem" }}
            >
              More than half days
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="4"
              className="mt-2 border border-2 rounded-pill"
              style={{ width: "20 rem" }}
            >
              Nearly every day
            </Dropdown.Item>
          </Dropdown.Menu>
        </div>
        {/* <br></br>
      <br></br>

      <h5 className="d-flex justify-content-around">
        Over the last 2 weeks , how often have you been bothered by feeling
        tired or having little energy?
      </h5> */}
      </div>
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
