import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NavSection } from "../Navbar/guestNavbar";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { SubmitTestBtn } from "../Buttons/actionBtn";
import { SubmitBtn } from "../Buttons/actionBtn";
import AssessmentTextData from "../../data/allCards/websiteForms.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

//newslettermodal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

//images
import newsletter from "../../assets/images/newsletter/newsletter.png";
import bookingconfirmed from "../../assets/images/emailverification/emailnotverified.png";
import mindafrikbannerlogo from "../../assets/images/logo/mindafrikbannerlogo.png";

export const AssesmentForm = (props) => {
  // const { id, text } = props;
  return (
    <>
      <NavSection />
      <Container fluid>
        {" "}
        <div className="container-fluid assessmentBgColor pt-5">
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="text-center">
            {" "}
            <SubmitTestBtn />
          </div>
        </div>
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

const SupportiveListeningSessionModal = ({ handleClose }) => {
  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <div className="text-center pb-4 pt-2">
          <img src={bookingconfirmed} width="150" height="80" />
        </div>
        <h4 className="text-center">
          Your booking has been successfully processed!
        </h4>
        <p className="text-center pb-3">Check your email for more details</p>
      </Modal>
    </>
  );
};

export const SupportiveListeningSessionPage = () => {
  return (
    <>
      {/* <div className="container px-5">
        <div className="row justify-content-center">
          {" "}
          <div className="col-lg-6">
            <h4 className="text-center mt-5">
              Book a Supportive Listening Session
            </h4>
            <SupportiveListeningSessionForm />
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        {/* <NavSection /> */}
        <div className="container col-xl-10 col-xxl-8 py-5">
          <div className="row align-items-center g-lg-5 pb-5 pt-4">
            <div className="row justify-content-center text-center">
              <div className="col-lg-7 col-md-12 col-sm-12 card mb-3">
                {" "}
                <img src={mindafrikbannerlogo} />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h4 className="p-0 m-0">Book a Supportive Listening Session</h4>
                <p className="bookingFormText p-0 m-0">
                  Thank you for your interest in booking a supportive listening
                  session with us.
                </p>
                <p className="bookingFormText p-0 m-0">
                  Please note that the sessions are paid and calculated per hour
                  <b>(45 -60 mins)</b> and is done virtually.
                </p>
                <p className="p-0 m-0 bookingFormText">
                  The first minutes is free.
                </p>
                <p className="bookingFormText p-0 m-0">
                  Subsequent Payment ranges from <b>&#8358;5000</b> monthly on a
                  2 hours per week bases.
                </p>
                <p className="bookingFormText p-0 m-0">
                  Details will be sent to your email once we receive your
                  details.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-md-10 mx-auto mt-3">
                <SupportiveListeningSessionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const SupportiveListeningSessionForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isSubmitting, setSubmitting] = useState(false);

  const [validationErrors, setValidationErrors] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    setSubmitting(true);

    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;
    const gender = values.gender;
    const activeMobileNumber = values.activeMobileNumber;
    const alternativeMobileNumber = values.alternativeMobileNumber;
    const location = values.location;
    const dateOfBirth = startDate;
    const age = values.age;
    const maritalStatus = values.maritalStatus;
    const meetingMode = values.meetingMode;
    const counsellingArea = values.counsellingArea;
    const counsellingPurpose = values.counsellingPurpose;
    const timeSlot = values.timeSlot;
    const questionCommentSuggestion = values.questionCommentSuggestion;
    const socialMediaFollowership = values.socialMediaFollowership;
    const socialHandleSubscribedTo = values.socialHandleSubscribedTo;

    try {
      await axios.post(
        // "http://localhost:4000/booking/book-a-supportive-listening-session",
        "https://mindafrikserver.onrender.com/booking/book-a-supportive-listening-session",
        // formData
        // inputs
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          gender: gender,
          activeMobileNumber: activeMobileNumber,
          alternativeMobileNumber: alternativeMobileNumber,
          location: location,
          dateOfBirth: dateOfBirth,
          age: age,
          maritalStatus: maritalStatus,
          meetingMode: meetingMode,
          counsellingArea: counsellingArea,
          counsellingPurpose: counsellingPurpose,
          timeSlot: timeSlot,
          questionCommentSuggestion: questionCommentSuggestion,
          socialMediaFollowership: socialMediaFollowership,
          socialHandleSubscribedTo: socialHandleSubscribedTo,
        }
      );
      //  navigate("/verify-email");
      resetForm();
      setShowModal(true);
      // console.log(showModal);
    } catch (err) {
      const errorMessage = err.response?.data || "An error occurred";
      setErr(errorMessage);
    } finally {
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
          gender: "",
          activeMobileNumber: "",
          alternativeMobileNumber: "",
          location: "",
          dateOfBirth: "",
          age: "",
          maritalStatus: "",
          meetingMode: "",
          counsellingArea: "",
          counsellingPurpose: "",
          timeSlot: "",
          questionCommentSuggestion: "",
          socialMediaFollowership: "",
          socialHandleSubscribedTo: "",
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
          gender: Yup.string().required("Gender is required"),
          activeMobileNumber: Yup.string().required("This field is required"),
          alternativeMobileNumber: Yup.string().required(
            "This field is required"
          ),
          location: Yup.string().required("This field is required"),
          dateOfBirth: Yup.string(),
          age: Yup.string().required("This field is required"),
          maritalStatus: Yup.string().required("This field is required"),
          meetingMode: Yup.string().required("This field is required"),
          counsellingArea: Yup.string().required("This field is required"),
          counsellingPurpose: Yup.string().required("This field is required"),
          timeSlot: Yup.string().required("This field is required"),
          questionCommentSuggestion: Yup.string().required(
            "This field is required"
          ),
          socialMediaFollowership: Yup.string().required(
            "This field is required"
          ),
          // socialHandleSubscribedTo: Yup.array("This field is required"),
          socialHandleSubscribedTo: Yup.array()
            .min(1, "Select at least one social media handle")
            .required("At least one social media handle is required"),

          // socialHandleSubscribedTo: Yup.required("This field is required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form
            className="p-4 p-md-5 border rounded-3 bookingFormBg"
            // style={{ backgroundColor: "#fcfcfc", border: "1px solid #0060c6" }}
          >
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
              </div>
              {errors.gender && touched.gender ? (
                <div className="ms-3 auth-error-message">{errors.gender}</div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="activeMobileNumber"
                  type="text"
                  autoComplete="off"
                  placeholder="Active Mobile Number"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.activeMobileNumber && touched.activeMobileNumber ? (
                <div className="ms-3 auth-error-message">
                  {errors.activeMobileNumber}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="alternativeMobileNumber"
                  type="text"
                  autoComplete="off"
                  placeholder="Alternative Mobile Number"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.alternativeMobileNumber &&
              touched.alternativeMobileNumber ? (
                <div className="ms-3 auth-error-message">
                  {errors.alternativeMobileNumber}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-3">
                <Field
                  name="location"
                  type="text"
                  autoComplete="off"
                  placeholder="Location"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.location && touched.location ? (
                <div className="ms-3 auth-error-message">{errors.location}</div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="ms-2 mt-3">Date of birth</div>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="placeholderRadius mt-4"
              />
              {errors.dateOfBirth && touched.dateOfBirth ? (
                <div className="ms-3 auth-error-message">
                  {errors.dateOfBirth}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="age"
                  type="text"
                  autoComplete="off"
                  placeholder="Age"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.age && touched.age ? (
                <div className="ms-3 auth-error-message">{errors.age}</div>
              ) : null}
            </div>{" "}
            <div>
              {" "}
              <div id="my-radio-group" className="ms-2 mt-3 mb-2">
                Marital Status
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="maritalStatus"
                    value="Single"
                    className="me-2"
                  />
                  Single
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="maritalStatus"
                    value="Engaged"
                    className="me-2"
                  />
                  Engaged
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="maritalStatus"
                    value="Married"
                    className="me-2"
                  />
                  Married
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="maritalStatus"
                    value="Divorced"
                    className="me-2"
                  />
                  Divorced
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="maritalStatus"
                    value="Complicated"
                    className="me-2 formOptions"
                  />
                  Complicated
                </label>
              </div>
              {errors.maritalStatus && touched.maritalStatus ? (
                <div className="ms-3 auth-error-message">
                  {errors.maritalStatus}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div id="my-radio-group" className="ms-2 mt-3 mb-2">
                What mode of meeting would you prefer?
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="meetingMode"
                    value="Virtual (on Google meet)"
                    className="me-2"
                  />
                  Virtual (on Google meet)
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="meetingMode"
                    value="Chat (WhatsApp)"
                    className="me-2"
                  />
                  Chat (WhatsApp)
                </label>
              </div>
              {errors.meetingMode && touched.meetingMode ? (
                <div className="ms-3 auth-error-message">
                  {errors.meetingMode}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div id="my-radio-group" className="ms-2 mt-3 mb-2">
                What area of counselling are you booking for?
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="counsellingArea"
                    value="Relationship advice"
                    className="me-2"
                  />
                  Relationship advice
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="counsellingArea"
                    value="Premarital counselling"
                    className="me-2"
                  />
                  Premarital counselling
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="counsellingArea"
                    value="Marriage and Family"
                    className="me-2"
                  />
                  Marriage and Family
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="counsellingArea"
                    value="Traumatic experience (Trauma informed care)"
                    className="me-2"
                  />
                  Traumatic experience (Trauma informed care)
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="counsellingArea"
                    value="Mental health (Stress, depression, anxiety, etc.)"
                    className="me-2"
                  />
                  Mental health (Stress, depression, anxiety, etc.)
                </label>
              </div>
              {errors.counsellingArea && touched.counsellingArea ? (
                <div className="ms-3 auth-error-message">
                  {errors.counsellingArea}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="counsellingPurpose"
                  // type="text"
                  as="textarea"
                  autoComplete="off"
                  placeholder="What is the purpose for which you have booked this counselling session?"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.counsellingPurpose && touched.counsellingPurpose ? (
                <div className="ms-3 auth-error-message">
                  {errors.counsellingPurpose}
                </div>
              ) : null}
            </div>{" "}
            <div>
              {" "}
              <div id="my-radio-group" className="ms-2 mt-3 mb-2">
                What time slot works best for you?
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="timeSlot"
                    value="Weekdays mornings"
                    className="me-2"
                  />
                  Weekdays mornings
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="timeSlot"
                    value="Weekdays afternoons"
                    className="me-2"
                  />
                  Weekdays afternoons
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="timeSlot"
                    value="Weekdays evenings"
                    className="me-2"
                  />
                  Weekdays evenings
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="timeSlot"
                    value="Weekend Mornings"
                    className="me-2"
                  />
                  Weekend Mornings
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="timeSlot"
                    value="Weekend afternoons"
                    className="me-2"
                  />
                  Weekend afternoons
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="timeSlot"
                    value="Weekend evenings"
                    className="me-2"
                  />
                  Weekend evenings
                </label>
              </div>
              {errors.timeSlot && touched.timeSlot ? (
                <div className="ms-3 auth-error-message">{errors.timeSlot}</div>
              ) : null}
            </div>
            <div>
              {" "}
              <div className="align-items-center placeholderRadius mt-4">
                <Field
                  name="questionCommentSuggestion"
                  // type="textarea"
                  as="textarea"
                  autoComplete="off"
                  placeholder="Have you got any question, comment or suggestion?"
                  className="w-100 my-2 formikFieldStyle"
                />
              </div>
              {errors.questionCommentSuggestion &&
              touched.questionCommentSuggestion ? (
                <div className="ms-3 auth-error-message">
                  {errors.questionCommentSuggestion}
                </div>
              ) : null}
            </div>
            <div>
              {" "}
              <div id="my-radio-group" className="ms-2 mt-3 mb-2">
                Are you following us on all our social media handles?
              </div>
              <div role="group" aria-labelledby="my-radio-group">
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="socialMediaFollowership"
                    value="Yes"
                    className="me-2"
                  />
                  Yes
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="socialMediaFollowership"
                    value="No"
                    className="me-2"
                  />
                  No
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="radio"
                    name="socialMediaFollowership"
                    value="Some"
                    className="me-2"
                  />
                  Some
                </label>
              </div>
              {errors.socialMediaFollowership &&
              touched.socialMediaFollowership ? (
                <div className="ms-3 auth-error-message">
                  {errors.socialMediaFollowership}
                </div>
              ) : null}
            </div>
            <div>
              <div id="checkbox-group" className="ms-2 mt-3 mb-2">
                Which of our social handles are you following or have subscribed
                to?
              </div>
              <div role="group" aria-labelledby="checkbox-group">
                <label className="mx-2 formOptions">
                  <Field
                    type="checkbox"
                    name="socialHandleSubscribedTo"
                    value="Facebook"
                    className="me-2"
                  />
                  Facebook
                </label>
                <label className="mx-2 formOptions">
                  <Field
                    type="checkbox"
                    name="socialHandleSubscribedTo"
                    value="Instagram"
                    className="mx-2"
                  />
                  Instagram
                </label>
                <label className="formOptions">
                  <Field
                    type="checkbox"
                    name="socialHandleSubscribedTo"
                    value="LinkedIn"
                    className="mx-2"
                  />
                  LinkedIn
                </label>
                <label className="formOptions">
                  <Field
                    type="checkbox"
                    name="socialHandleSubscribedTo"
                    value="Twitter"
                    className="mx-2"
                  />
                  Twitter
                </label>
                <label className="formOptions">
                  <Field
                    type="checkbox"
                    name="socialHandleSubscribedTo"
                    value="Youtube"
                    className="mx-2"
                  />
                  Youtube
                </label>
              </div>
              {errors.socialHandleSubscribedTo &&
              touched.socialHandleSubscribedTo ? (
                <div className="ms-3 auth-error-message">
                  {errors.socialHandleSubscribedTo}
                </div>
              ) : null}
            </div>
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
          </Form>
        )}
      </Formik>
      {showModal && (
        <SupportiveListeningSessionModal
          handleClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export const NewsletterPage = () => {
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="row">
            {" "}
            <div className="col-lg-12 text-center">
              <h4 className="mb-4">
                Subscribe to our newsletter for free and timely well-being tips.
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-10 mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NewsletterModal = ({ handleClose }) => {
  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <div className="text-center pb-4 pt-2">
          <img src={newsletter} width="150" height="80" />
        </div>
        <h4 className="text-center">Thank you for subscribing!</h4>
        <p className="text-center pb-3">
          Kindly check your email for more details
        </p>
      </Modal>
    </>
  );
};

export const NewsletterForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    setSubmitting(true);

    const firstName = values.firstName;
    const lastName = values.lastName;
    const email = values.email;

    try {
      await axios.post(
        // "http://localhost:4000/booking/book-a-supportive-listening-session",
        // "http://localhost:4000/subscriber/new-subscriber",
        "https://mindafrikserver.onrender.com/subscriber/new-subscriber",
        // formData
        // inputs
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
        }
      );
      // navigate("/");
      resetForm();
      setShowModal(true);
      // console.log(showModal);
    } catch (err) {
      const errorMessage = err.response?.data || "An error occurred";
      setErr(errorMessage);
    } finally {
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
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form
            className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
            style={{ backgroundColor: "#fcfcfc" }}
          >
            <div>
              {" "}
              <div className="align-items-center placeholderRadius">
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
            <div className="mt-4 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submitFormBtn btn"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {err && (
                <p className="mt-4 auth-error-message" style={{ color: "red" }}>
                  {err.message}
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
      {showModal && <NewsletterModal handleClose={() => setShowModal(false)} />}
      {/* {showModal && <NewsletterModal onClose={() => setShowModal(false)} />} */}
    </>
  );
};
