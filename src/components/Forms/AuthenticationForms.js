// // SignInForm
// // ForgotPasswordForm
// // SignUpAsCounselorForm
// // SignUpAsCounseleeForm
// //SubscribeToNewsletterForm

// import React, { useState } from "react";
// import { SubmitBtn } from "../../components/Buttons/actionBtn";

// export const CounselorForm = () => {
//   const [ values, setValues ] = useState( {

//     email:"",
//     password:"",
//     fullname:"",
//     phonenumber:"",
//     gender:"",
//     birthdate:"",
//     state:"",
//     country:"",
//   });
//   {
//     id: 1,
//       name;"email",
//       type; "text",
//         placeholder;"email",
//     },
//   {
//     id: 2,
//       name; "password",
//       type; "password",
//         placeholder;"email",
//     },
//   {
//     id: 3,
//       name; "fullname",
//       type; "text",
//         placeholder;"fullname",
//     },
//   {
//     id: 4,
//       name; "phonenumber",
//       type; "numbers",
//         placeholder;"phonenumber",
//     },
//   {
//     id: 5,
//       name; "gender",
//       type; "text",
//         placeholder;"gender",
//     },
//   {
//     id: 6,
//       name; "birthdate",
//       type; "text",
//         placeholder;"birthdate",
//     },
//   {
//     id: 7,
//       name; "state",
//       type; "text",
//         placeholder;"state",
//     },
//   {
//     id: 8,
//       name; "country",
//       type; "text",
//         placeholder;"gender",
//     };

//   const Handle = (e) => {
//     e.preventDefault();
//     // if (
//     //   email &&
//     //   password &&
//     //   confirmPassword &&
//     //   fullName &&
//     //   phoneNumber &&
//     //   gender &&
//     //   birthDate &&
//     //   state &&
//     //   country
//     // ) {
//       const person = {
//         email,
//         password,
//         confirmPassword,
//         fullName,
//         phoneNumber,
//         gender,
//         birthDate,
//         state,
//         country,
//       };
//       console.log(person);
//       setPeople((people) => {
//         return [...people, person];
//       });
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       setFullName("");
//       setPhoneNumber("");
//       setGender("");
//       setBirthDate("");
//       setState("");
//       setCountry("");
//       setPeople("");
//     } else {
//       alert("empty values");
//     }
//   };
//   return (
//     <form className="w-50 mx-auto mt-5 text-dark" onSubmit={Handle}>
//       <h3 className="h4 text-dark text-center">SignUp As A Councellor</h3>
//       <div className="mb-3">
//         <label for="exampleInputEmail" className="form-label"></label>
//         <input
//           type="text"
//           placeholder="Email Address"
//           className="form-control border-secondary"
//           id="exampleInputEmail"
//           aria-describedby="emailHelp"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label for="exampleInputPassword" className="form-label"></label>
//         <input
//           className="form-control border-secondary"
//           placeholder="Password"
//           id="exampleInputPassword"
//           aria-describedby="passwordHelp"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label for="exampleInputConfirmPassword" className="form-label"></label>
//         <input
//           className="form-control border-secondary"
//           placeholder="Confirm Password"
//           id="exampleInputConfirmPassword"
//           aria-describedby="passwordHelp"
//           value={password}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label for="exampleInputFullName" className="form-label"></label>
//         <input
//           className="form-control border-secondary"
//           placeholder="Full Name"
//           id="exampleInputFullName"
//           aria-describedby="fullNameHelp"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label for="examplePhoneNumber" className="form-label"></label>
//         <input
//           className="form-control border-secondary"
//           placeholder="Phone Number"
//           id="exampleInputPhoneNumber"
//           aria-describedby="phoneNumberHelp"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label for="exampleGender" className="form-label"></label>
//         <input
//           className="form-control border-secondary"
//           placeholder="Gender"
//           id="exampleInputGender"
//           aria-describedby="genderHelp"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label for="exampleBirthDate" className="form-label"></label>
//         <input
//           className="form-control border-secondary"
//           placeholder="Date of Birth"
//           id="exampleInputBirthDate"
//           aria-describedby="birthDateHelp"
//           value={birthDate}
//           onChange={(e) => setBirthDate(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label for="exampleState" className="form-label"></label>
//         <input
//           className="form-control border-secondary"
//           placeholder="State"
//           id="exampleInputState"
//           aria-describedby="stateHelp"
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label for="exampleCountry" className="form-label"></label>
//         <input
//           className="form-control border-secondary"
//           placeholder="Country"
//           id="exampleInputCountry"
//           aria-describedby="countryHelp"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//         />
//       </div>

//       <div className="Container">
//         <div className="text-center py-4 ">
//           <SubmitBtn />
//         </div>
//       </div>
//     </form>
//   );
// };
