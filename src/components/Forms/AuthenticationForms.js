// // SignInForm
// // ForgotPasswordForm
// // SignUpAsCounselorForm
// // SignUpAsCounseleeForm
// //SubscribeToNewsletterForm

import React, { useState } from "react";
import { SubmitBtn } from "../../components/Buttons/actionBtn";

export const CounselorForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (
      email &&
      password &&
      confirmpassword &&
      fullname &&
      phonenumber &&
      gender &&
      birthdate &&
      state &&
      country
    ) {
      const person = {
        email,
        password,
        confirmpassword,
        fullname,
        phonenumber,
        gender,
        birthdate,
        state,
        country,
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFullname("");
      setPhoneNumber("");
      setGender("");
      setBirthDate("");
      setState("");
      setCountry("");
      setPeople("");
    } else {
      alert("empty values");
    }
  };
  return (
    <form className="w-50 mx-auto mt-5 text-dark councellor" onSubmit={Handle}>
      <h4 className="h4 text-dark text-center">SignUp as a Counsellor</h4>
      <h6 className="h6 text-dark text-start mb-3">Account Information</h6>
      <div className="mb-3 ">
        <input
          type="text"
          className="form-control border-dark"
          id="exampleInputEmail"
          aria-describedby="EmailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          aria-errormessage="it should be a valid email"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control border-dark"
          id="exampleInputPassword"
          aria-describedby="PasswordHelp"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          aria-errormessage="password should be 8-20 character and at least 1 letter and 1 special character"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control border-dark"
          id="exampleInputConfirmPassword"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          aria-errormessage="passwords dont match"
        />
      </div>
      <h6 className="h6 text-dark text-start mb-3">Personal Information</h6>

      <div className="mb-3">
        <input
          type="text"
          className="form-control border-dark"
          id="exampleInputFullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Full name"
        />
      </div>

      <div className="mb-3">
        <input
          type="integar"
          className="form-control border-dark"
          id="exampleInputPhoneNumber"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone number"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control border-dark"
          id="exampleInputGender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          className="form-control border-dark"
          id="exampleInputBirthDate"
          value={birthdate}
          onChange={(e) => setBirthDate(e.target.value)}
          placeholder="Date of birth"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control border-dark"
          id="exampleInputState"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control border-dark"
          id="exampleInputCountry"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
      </div>

      <div className="Container">
        <div className="text-center py-4 ">
          <SubmitBtn />
        </div>
      </div>
    </form>
  );
};
