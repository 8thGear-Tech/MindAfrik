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
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { SubmitTestBtn } from "../Buttons/actionBtn";
import { SubmitBtn } from "../Buttons/actionBtn";
import AssessmentTextData from "../../data/allCards/websiteForms.json";
//images

import Dropdown from "react-bootstrap/Dropdown";

export const AssesmentForm = (props) => {
  // const { id, text } = props;
  return (
    <>
      <NavSection />
      <Container fluid>
        {" "}
        <div className="container-fluid assessmentBgColor pt-3">
          <h1 className="text-center d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
            Anxiety and Depression Symptoms
          </h1>
          <h2 className="mt-5 text-center d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
            Anxiety and Depression Symptoms
          </h2>
          <h5 className="text-center">
            Over the last 2weeks, how often have you been bothered by feeling
            tired or having little energy?
          </h5>
          <div className="container-fluid d-flex justify-content-around">
            <Dropdown.Menu show className="border-0 w-75 assessmentBg">
              <Dropdown.Item
                eventKey="1"
                className="border border-2 rounded-pill assessmentSelection"
              >
                Not at all
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="2"
                className="mt-2 border border-2 rounded-pill assessmentSelection"
              >
                Several days
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="3"
                className=" mt-2 border border-2 rounded-pill assessmentSelection"
              >
                More than half days
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="4"
                className="mt-2 border border-2 rounded-pill assessmentSelection"
              >
                Nearly every day
              </Dropdown.Item>
            </Dropdown.Menu>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className=" mt-5">
            <h5 className="text-center">
              Over the last 2 weeks , how often have you been bothered by
              feeling tired or having little energy?
            </h5>
            <div className="container-fluid d-flex justify-content-around">
              <Dropdown.Menu show className="border-0 w-75 assessmentBg">
                <Dropdown.Item
                  eventKey="1"
                  className="border border-2 rounded-pill assessmentSelection"
                >
                  Not at all
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  className="mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  Several days
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3"
                  className=" mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  More than half days
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="4"
                  className="mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  Nearly every day
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className=" mt-5">
            <h5 className="text-center">
              Over the last 2 weeks , how often have you been bothered by
              feeling tired or having little energy?
            </h5>
            <div className="container-fluid d-flex justify-content-around">
              <Dropdown.Menu show className="border-0 w-75 assessmentBg">
                <Dropdown.Item
                  eventKey="1"
                  className="border border-2 rounded-pill assessmentSelection"
                >
                  Not at all
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  className="mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  Several days
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3"
                  className=" mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  More than half days
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="4"
                  className="mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  Nearly every day
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className=" mt-5">
            <h5 className="text-center">
              Over the last 2 weeks , how often have you been bothered by
              feeling tired or having little energy?
            </h5>
            <div className="container-fluid d-flex justify-content-around">
              <Dropdown.Menu show className="border-0 w-75 assessmentBg">
                <Dropdown.Item
                  eventKey="1"
                  className="border border-2 rounded-pill assessmentSelection"
                >
                  Not at all
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  className="mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  Several days
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3"
                  className=" mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  More than half days
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="4"
                  className="mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  Nearly every day
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className=" mt-5">
            <h5 className="text-center">
              Over the last 2 weeks , how often have you been bothered by
              feeling tired or having little energy?
            </h5>
            <div className="container-fluid d-flex justify-content-around">
              <Dropdown.Menu show className="border-0 w-75 assessmentBg">
                <Dropdown.Item
                  eventKey="1"
                  className="border border-2 rounded-pill assessmentSelection"
                >
                  Not at all
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  className="mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  Several days
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="3"
                  className=" mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  More than half days
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="4"
                  className="mt-2 border border-2 rounded-pill assessmentSelection"
                >
                  Nearly every day
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="my-3 text-center">
            <SubmitBtn />
          </div>
        </div>
        {/* <SubmitTestBtn /> */}
      </Container>
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
              <Form.Group className=" py-2" controlId="formBasicFirstName">
                {" "}
                <Form.Control
                  placeholder="First Name"
                  className="placeholderRadius"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className=" py-2" controlId="formBasicLastName">
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
        <Form.Text className="text-muted">
          Note: We respect your privacy and will never share your information
          with anyone.
        </Form.Text>
      </Form>{" "}
      <div className="my-3 text-center">
        <SubmitTestBtn />
      </div>
    </>
  );
};
// export const AssessmentData = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="text-center justify-content-around mt-5">
//           {AssessmentTextData.assessmentInfo.map((assessment) => {
//             return (
//               <>
//                 <div className="" key={assessment.id}>
//                   <AssesmentForm {...assessment} />
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
