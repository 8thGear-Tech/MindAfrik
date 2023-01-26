import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

export const MenuDividersExample = () => {
  return (
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
          <Dropdown.Item eventKey="1" className="border border-2 rounded-pill">
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
  );
};

export default MenuDividersExample;
// const AssesmentForm = () => {
//   return (
//     <>
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// AssesmentForm;
// import React, { useState } from "react";
// import {
//   MDBCollapse,
//   MDBContainer,
//   MDBListGroup,
//   MDBListGroupItem,
//   MDBTypography,
// } from "mdb-react-ui-kit";

// export const Assesmmentoption = () => {
//   const [collapse1, setCollapse1] = useState(false);
//   const [collapse2, setCollapse2] = useState(false);
//   const [collapse3, setCollapse3] = useState(false);

//   const toggleCollapse1 = () => setCollapse1(!collapse1);
//   const toggleCollapse2 = () => setCollapse2(!collapse2);
//   const toggleCollapse3 = () => setCollapse3(!collapse3);

//   return (
//     <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
//       <MDBListGroup>
//         <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse1} action>
//           <MDBTypography tag="h5">Question 1</MDBTypography>
//           <p className="mb-1">Short & concise version of the answer.</p>
//           <small>
//             <u>Learn more</u>
//           </small>
//           <MDBCollapse show={collapse1}>
//             Detailed and comprehensive answer goes here. pariatur cliche
//             reprehenderit, enim eiusmod high life accusamus terry richardson ad
//             squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
//             cred nesciunt sapiente ea proident.
//           </MDBCollapse>
//         </MDBListGroupItem>
//         <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse2} action>
//           <MDBTypography tag="h5">Question 2</MDBTypography>
//           <p className="mb-1">Short & concise version of the answer.</p>
//           <small>
//             <u>Learn more</u>
//           </small>
//           <MDBCollapse show={collapse2}>
//             Detailed and comprehensive answer goes here. pariatur cliche
//             reprehenderit, enim eiusmod high life accusamus terry richardson ad
//             squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
//             cred nesciunt sapiente ea proident.
//           </MDBCollapse>
//         </MDBListGroupItem>
//         <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse3} action>
//           <MDBTypography tag="h5">Question 3</MDBTypography>
//           <p className="mb-1">Short & concise version of the answer.</p>
//           <small>
//             <u>Learn more</u>
//           </small>
//           <MDBCollapse show={collapse3}>
//             Detailed and comprehensive answer goes here. pariatur cliche
//             reprehenderit, enim eiusmod high life accusamus terry richardson ad
//             squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
//             cred nesciunt sapiente ea proident.
//           </MDBCollapse>
//         </MDBListGroupItem>
//       </MDBListGroup>
//     </MDBContainer>
//   );
// };
