// Michael
// counseleeProfileForm

//Awelewa
// counselorProfileForm
// counseleeProfile
// counselorsprofile

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SaveBtn } from "../../components/Buttons/actionBtn";

export const CounseleeProfileForm = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { name, email, number, dob, address, nextOfKin } = form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "please enter your name";
    if (!email || email === "") newErrors.email = "please enter your email";
    if (!number || number === "") newErrors.number = "please enter your number";
    if (!dob || dob === "") newErrors.dob = "please enter yor date of birth";
    if (!address || address === "")
      newErrors.address = "please enter your address";
    if (!nextOfKin || nextOfKin === "")
      newErrors.nextOfKin = "please enter your next of kin";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("form submitted");

      console.log(form);
    }
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3 py-2" controlId="formBasicName">
          <Form.Label>Name</Form.Label>

          <Form.Control
            type="name"
            className="placeholderRadius"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className=" placeholderRadius"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            className=" placeholderRadius"
            value={form.number}
            onChange={(e) => setField("number", e.target.value)}
            isInvalid={!!errors.number}
          />
          <Form.Control.Feedback type="invalid">
            {errors.number}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicNumber">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="number"
            className="placeholderRadius"
            value={form.dob}
            onChange={(e) => setField("dob", e.target.value)}
            isInvalid={!!errors.dob}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dob}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            className="placeholderRadius"
            value={form.address}
            onChange={(e) => setField("address", e.target.value)}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 py-2" controlId="formBasicNextofKin">
          <Form.Label>Next of Kin</Form.Label>
          <Form.Control
            type="text"
            className="placeholderRadius"
            value={form.nextOfKin}
            onChange={(e) => setField("nextOfKin", e.target.value)}
            isInvalid={!!errors.nextOfKin}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nextOfKin}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>{" "}
      <div className="my-3 text-center  " type="submit" onClick={handleSubmit}>
        <SaveBtn />
      </div>
    </>
  );
};

const CounselorProfileForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [academicdegree, setAcademicDegree] = useState("");

  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (
      firstname &&
      lastname &&
      email &&
      phoneNumber &&
      address &&
      dateofbirth &&
      gender &&
      academicdegree
    ) {
      const person = {
        firstname,
        lastname,
        email,
        phoneNumber,
        address,
        dateofbirth,
        gender,
        academicdegree,
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
      setDateOfBirth("");
      setGender("");
      setAcademicDegree("");
      setPeople("");
    } else {
      alert("empty values");
    }
  };

  return (
    <>
      <Form onSubmit={Handle}>
        <div className="g-0 ">
          <div className="row">
            <Form.Group className=" col-3 mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <input
                type="text"
                className="form-control border-width"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className=" col-3 mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <input
                type="text"
                className="form-control border-width"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className=" col-3 mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <input
                type="text"
                className="form-control border-width"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className=" col-3 mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <input
                type="text"
                className="form-control border-width"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className=" col-3 mb-3" controlId="formAdress">
              <Form.Label>Address</Form.Label>
              <input
                type="text"
                className="form-control border-width"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className=" col-3 mb-3" controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <input
                type="text"
                className="form-control border-width"
                value={dateofbirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="row">
            <Form.Group className=" col-3 mb-3" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <input
                type="text"
                className="form-control border-width"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </Form.Group>
            <Form.Group className=" col-3 mb-3" controlId="formAcademicDegree">
              <Form.Label>Academic Degree</Form.Label>
              <input
                type="text"
                className="form-control border-width"
                value={academicdegree}
                onChange={(e) => setAcademicDegree(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="col-lg-6 align-item text-center mt-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};
export default CounselorProfileForm;
