// Michael
// counseleeProfileForm

//Awelewa
// counselorProfileForm
// counseleeProfile
// counselorsprofile

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
          <div className="align-item m-5 ">
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
