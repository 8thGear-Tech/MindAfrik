// // AssessmentForm
// // TakeATestForm
// //ContactForm
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// const CounselorProfileForm = () => {
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [dateofbirth, setDateOfBirth] = useState("");
//   const [gender, setGender] = useState("");
//   const [academicdegree, setAcademicDegree] = useState("");

//   const [people, setPeople] = useState([]);

//   const Handle = (e) => {
//     e.preventDefault();
//     if (
//       firstname &&
//       lastname &&
//       email &&
//       phoneNumber &&
//       address &&
//       dateofbirth &&
//       gender &&
//       academicdegree
//     ) {
//       const person = {
//         firstname,
//         lastname,
//         email,
//         phoneNumber,
//         address,
//         dateofbirth,
//         gender,
//         academicdegree,
//       };
//       console.log(person);
//       setPeople((people) => {
//         return [...people, person];
//       });
//       setFirstName("");
//       setLastName("");
//       setEmail("");
//       setPhoneNumber("");
//       setAddress("");
//       setDateOfBirth("");
//       setGender("");
//       setAcademicDegree("");
//       setPeople("");
//     } else {
//       alert("empty values");
//     }
//   };

//   return (
//     <>
//       <Form onSubmit={Handle}>
//         <div className="row">
//           <Form.Group className=" col-3 mb-3" controlId="formFirstName">
//             <Form.Label>First Name</Form.Label>
//             <input
//               type="text"
//               className="form-control border-width"
//               value={firstname}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className=" col-3 mb-3" controlId="formLastName">
//             <Form.Label>Last Name</Form.Label>
//             <input
//               type="text"
//               className="form-control border-width"
//               value={lastname}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </Form.Group>
//         </div>
//         <div className="row">
//           <Form.Group className=" col-3 mb-3" controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <input
//               type="text"
//               className="form-control border-width"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className=" col-3 mb-3" controlId="formPhoneNumber">
//             <Form.Label>Phone Number</Form.Label>
//             <input
//               type="text"
//               className="form-control border-width"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </Form.Group>
//         </div>
//         <div className="row">
//           <Form.Group className=" col-3 mb-3" controlId="formAdress">
//             <Form.Label>Address</Form.Label>
//             <input
//               type="text"
//               className="form-control border-width"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className=" col-3 mb-3" controlId="formDateOfBirth">
//             <Form.Label>Date of Birth</Form.Label>
//             <input
//               type="text"
//               className="form-control border-width"
//               value={dateofbirth}
//               onChange={(e) => setDateOfBirth(e.target.value)}
//             />
//           </Form.Group>
//         </div>

//         <div className="row">
//           <Form.Group className=" col-3 mb-3" controlId="formGender">
//             <Form.Label>Gender</Form.Label>
//             <input
//               type="text"
//               className="form-control border-width"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group className=" col-3 mb-3" controlId="formAcademicDegree">
//             <Form.Label>Academic Degree</Form.Label>
//             <input
//               type="text"
//               className="form-control border-width"
//               value={academicdegree}
//               onChange={(e) => setAcademicDegree(e.target.value)}
//             />
//           </Form.Group>
//         </div>
//         <div className="m-5 ">
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </div>
//       </Form>
//     </>
//   );
// };
// export default CounselorProfileForm;
// import React, { useState } from "react";
// import logo from "../../assets/images/logo.png";
// import { SubmitFormBtn } from "../Buttons/ContactBtn";

// // //ManagedServicesRequestForm
// // //ProjectDeliveryRequestForm
// // //CoworkingSpaceForm

// const CoworkingSpaceForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [addressOfUser, setAddressOfUser] = useState("");
//   const [nameOfBusiness, setNameOfBusiness] = useState("");
//   const [natureOfBusiness, setNatureOfBusiness] = useState("");
//   const [website, setWebsite] = useState("");
//   const [durationQuantity, setDurationQuantity] = useState("");
//   // const [GroupSelect, setGroupSelect] = useState("");
//   const [date, setdate] = useState("");

//   const [people, setPeople] = useState([]);

//   const Handle = (e) => {
//     e.preventDefault();
//     if (
//       name &&
//       email &&
//       phoneNumber &&
//       addressOfUser &&
//       nameOfBusiness &&
//       natureOfBusiness &&
//       website &&
//       durationQuantity &&
//       date
//     ) {
//       const person = {
//         name,
//         email,
//         phoneNumber,
//         addressOfUser,
//         nameOfBusiness,
//         natureOfBusiness,
//         website,
//         durationQuantity,
//         date,
//       };
//       console.log(person);
//       setPeople((people) => {
//         return [...people, person];
//       });
//       setName("");
//       setEmail("");
//       setPhoneNumber("");
//       setAddressOfUser("");
//       setNameOfBusiness("");
//       setNatureOfBusiness("");
//       setdate("");
//       setWebsite("");
//       setDurationQuantity("");
//       setPeople("");
//     } else {
//       alert("empty values");
//     }
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="prop"
//         data-bs-toggle="modal"
//         data-bs-target="#staticBackdrop"
//       >
//         co-working space
//       </button>

//       <div
//         class="modal fade"
//         id="staticBackdrop"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabindex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-md">
//           <div class="modal-content">
//             <div class="modal-header m-2">
//               <img
//                 src={logo}
//                 width={40}
//                 className=""
//                 id="staticBackdropLabel"
//               />
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <form onSubmit={Handle}>
//                 <div>
//                   <h4 class=" pink request mb-3 ">
//                     The 8thGear Hub-Space Booking Form
//                   </h4>

//                   <div className="mb-3 ">
//                     <label for="InputName" className="form-label"></label>
//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputName"
//                       aria-describedby="titleHelp"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="Full name ( First name first )"
//                     />
//                   </div>

//                   <div className="mb-3 ">
//                     <label for="InputEmail" className="form-label"></label>
//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputEmail"
//                       aria-describedby="titleHelp"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Email"
//                     />
//                   </div>

//                   <div className="mb-3  ">
//                     <label
//                       for="InputPhoneNumber"
//                       className="form-label"
//                     ></label>
//                     <input
//                       type="phone number"
//                       className="form-control border-primary"
//                       id="InputPhoneNumber"
//                       aria-describedby="titleHelp"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                       placeholder="Phone Number (Whatsapp)"
//                     />
//                   </div>

//                   <div className="mb-3 ">
//                     <label
//                       for="InputaddressOfUser"
//                       className="form-label"
//                     ></label>

//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputaddressOfUser"
//                       aria-describedby="titleHelp"
//                       value={addressOfUser}
//                       placeholder="Address Of User"
//                       onChange={(e) => setAddressOfUser(e.target.value)}
//                     />
//                   </div>

//                   <div className="mb-3 ">
//                     <label
//                       for="InputnameOfBusiness"
//                       className="form-label"
//                     ></label>

//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputnameOfBusiness"
//                       aria-describedby="titleHelp"
//                       value={nameOfBusiness}
//                       placeholder="Name Of Business"
//                       onChange={(e) => setNameOfBusiness(e.target.value)}
//                     />
//                   </div>

//                   <div className="mb-3 ">
//                     <label
//                       for="InputnatureOfBusiness"
//                       className="form-label"
//                     ></label>

//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputnatureOfBusiness"
//                       aria-describedby="titleHelp"
//                       value={natureOfBusiness}
//                       placeholder="Nature Of Business"
//                       onChange={(e) => setNatureOfBusiness(e.target.value)}
//                     />
//                   </div>

//                   <div className="mb-3 ">
//                     <label for="Inputwebsite" className="form-label"></label>

//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="Inputwebsite"
//                       aria-describedby="titleHelp"
//                       value={website}
//                       placeholder="Website and social media handles"
//                       onChange={(e) => setWebsite(e.target.value)}
//                     />
//                   </div>

//                   <div class="input-group mb-3 mt-5">
//                     <label class="input-group-text" for="inputGroupSelect">
//                       Services of interest
//                     </label>
//                     <select class="form-select" id="inputGroupSelect">
//                       <option selected>Choose...</option>
//                       <option value="1">
//                         Dedicated Desk(per month) - 35,000[10% discount for
//                         every additional team member]
//                       </option>
//                       <option value="3">
//                         Training Room(20 persons)(per hour) - N10,000
//                       </option>
//                       <option value="2">
//                         Virtual office plus(per month) - N20,000
//                       </option>
//                       <option value="4">Hotdesk(per week) - N12,000</option>
//                       <option value="5">Hotdesk(per day) - N3,000</option>
//                       <option value="5">Other : </option>
//                     </select>
//                   </div>

//                   <div className="mb-3 ">
//                     <label
//                       for="InputdurationQuantity"
//                       className="form-label"
//                     ></label>

//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputdurationQuantity"
//                       aria-describedby="titleHelp"
//                       value={durationQuantity}
//                       placeholder="Required Duration:how many hours,days,weeks or months?"
//                       onChange={(e) => setDurationQuantity(e.target.value)}
//                     />
//                   </div>

//                   <div class="input-group mb-3 mt-5">
//                     <label class="input-group-text" for="inputGroupSelect">
//                       Required Duration Unit
//                     </label>
//                     <select class="form-select" id="inputGroupSelect">
//                       <option selected>Choose...</option>
//                       <option value="1">Hours</option>
//                       <option value="2">Weeks</option>
//                       <option value="3">Months</option>
//                     </select>
//                   </div>

//                   <div className="mb-3">
//                     <label for="Inputdate" className="form-label"></label>

//                     <input
//                       type="Date"
//                       className="form-control border-primary"
//                       id="Inputdate"
//                       aria-describedby="titleHelp"
//                       value={date}
//                       onChange={(e) => setdate(e.target.value)}
//                       placeholder="date"
//                     />
//                   </div>

//                   <div class="input-group mb-3 mt-5">
//                     <label class="input-group-text" for="inputGroupSelect01">
//                       Optional Add-on services
//                     </label>
//                     <select class="form-select" id="inputGroupSelect01">
//                       <option selected>Choose...</option>
//                       <option value="1">Growth strategy & execution</option>
//                       <option value="2">Recruitment support service</option>
//                       <option value="3">
//                         Voice-overs,photography & videography
//                       </option>
//                       <option value="4">Website Development</option>
//                       <option value="5">Online Marketing Support</option>
//                       <option value="6">
//                         Business Advisory services(incubation)
//                       </option>
//                       <option value="7">
//                         Virtual receptionist/customer service set-up management
//                       </option>
//                       <option value="8">others</option>
//                     </select>
//                   </div>

//                   <div class="input-group mb-3 mt-5">
//                     <label class="input-group-text" for="inputGroupSelect01">
//                       How did you hear about us?
//                     </label>
//                     <select class="form-select" id="inputGroupSelect01">
//                       <option selected>Choose...</option>
//                       <option value="1">Linked in</option>
//                       <option value="2">Instagram</option>
//                       <option value="3">Whatsapp</option>
//                       <option value="3">Facebook</option>
//                       <option value="3">Twitter</option>
//                       <option value="3">Tik tok</option>
//                       <option value="3">Friends and family</option>
//                       <option value="3">others</option>
//                     </select>
//                   </div>

//                   <div class="col-12 mb-3">
//                     <div class="form-check">
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         id="gridCheck"
//                       />
//                       <label class="form-check-label" for="gridCheck">
//                         Terms And Conditions
//                       </label>
//                     </div>
//                   </div>

//                   <div class="col-12 mb-3">
//                     <div class="form-check">
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         id="gridCheck"
//                       />
//                       <label class="form-check-label" for="gridCheck">
//                         I Agree
//                       </label>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <SubmitFormBtn />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default CoworkingSpaceForm;
