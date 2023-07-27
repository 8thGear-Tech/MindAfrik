//external import
//Website Buttons

// SendBtn
// BookNowBtn
// ProceedBtn
// GetInTouchBtn
// SaveBtn
//TakeATestBtn
// StartYourAssessmentBtn
// TakeAssessmentBtn
// BookASessionBtn
//ContactBtn
//SubscribeBtn

// DashboardButtons
// BookASessionNowBtn
// ScheduleASessionBtn

// StartADiscussionBtn

// StartChattingBtn
//SaveBtn
// ContinueBtn
//AddToCalendar
//ViewProfile
// SubmitBtn

//CheckStatus
//RemoveNote
//EditNote
//ViewProfile
// EditProfile
// RemoveUser
// AddUser

import { Link } from "react-router-dom";
import { AssesmentForm } from "../Forms/websiteForms";

import Button from "react-bootstrap/Button";

export const BookASessionBtn = () => {
  return (
    <>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc02gsz28SwYWwPIQoj7iIry4XY9W0hxyCqioQiXeVxjNZFkw/viewform"
        target="_blank"
      >
        {" "}
        <Button className="BookaSessionBtn">Book a Session</Button>
      </a>
      {/* <a href="/counsellorsDetails">
        {" "}
        <Button className="BookaSessionBtn">Book a Session</Button>
      </a> */}
    </>
  );
};
// export const BookaSessionBtn = () => {
//   return (
//     <>
//       <a href="https://bit.ly/MindafrikCounsellingSession" target="_blank">
//         {" "}
//         <Button className="BookaSessionBtn">Book a Session</Button>
//       </a>
//     </>
//   );
// };
//Opeyemi
export const CheckStatusBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="CheckStatusBtn">Check Status</Button>
      </a>
    </>
  );
};
export const RemoveNoteBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="RemoveNoteBtn">Remove Note</Button>
      </a>
    </>
  );
};
export const EditNoteBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="EditNoteBtn">Edit Note</Button>
      </a>
    </>
  );
};
export const ViewProfileBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        View Profile
        {/* <Button className="ViewProfileBtn">View Profile</Button> */}
      </a>
    </>
  );
};
export const EditProfileBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="EditProfileBtn">Edit Profile</Button>
      </a>
    </>
  );
};
export const RemoveUserBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="RemoveUserBtn">Remove User</Button>
      </a>
    </>
  );
};
export const AddUserBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="AddUserBtn">Add User</Button>
      </a>
    </>
  );
};
export const TakeAssessmentBtn = () => {
  return (
    <>
      <a href="/psychologicalAssessment" target="_blank">
        {" "}
        <Button className="TakeAssessmentBtn">Take Assessment </Button>
      </a>
      {/* <a href="/assessment" target="_blank">
        {" "}
        <Button className="TakeAssessmentBtn">Take Assessment </Button>
      </a> */}
    </>
  );
};
// export const BookASessionBtn = () => {
//   return (
//     <>
//       <a href="" target="_blank">
//         {" "}
//         <Button className="BookASessionBtn">Book A Session</Button>
//       </a>
//     </>
//   );
// };

export const ContactBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="ContactBtn">Contact Us</Button>
      </a>
    </>
  );
};
export const SubscribeBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="SubscribeBtn">Subscribe</Button>
      </a>
    </>
  );
};
export const DashboardButtons = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="DashboardButtons">DashboardButtons</Button>
      </a>
    </>
  );
};
export const BookASessionNowBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="BookASessionNowBtn">Book a Session Now</Button>
      </a>
    </>
  );
};
export const ScheduleASessionBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="ScheduleASessionBtn">Schedule a Session</Button>
      </a>
    </>
  );
};

export const SendBtn = () => {
  return (
    <div>
      <Button className="sendBtn">Send</Button>{" "}
    </div>
  );
};
export const SubmitFormBtn = () => {
  return (
    <div>
      <Button className="sendBtn">Submit</Button>{" "}
    </div>
  );
};

export const StartADiscussionBtn = () => {
  return (
    <div className="mt-2">
      <Button className="StartADiscussionBtn">Start A Discussion</Button>{" "}
    </div>
  );
};

export const BookNowBtn = () => {
  return (
    <div className="mt-2">
      <Button className="bookNowBtn">Book Now</Button>{" "}
    </div>
  );
};
export const ProceedBtn = () => {
  return (
    <div className="mt-2">
      <Button className="proceedBtn">Proceed</Button>{" "}
    </div>
  );
};
export const GetInTouchBtn = () => {
  return (
    <div className="mt-2">
      <Button className="getInTouchBtn">Get In Touch</Button>{" "}
    </div>
  );
};

export const StartChattingBtn = () => {
  return (
    <div className="mt-2">
      <Button className="StartChattingBtn">Start Chatting</Button>{" "}
    </div>
  );
};

export const SaveBtn = () => {
  return (
    <div className="mt-2">
      <Button className="saveBtn">Save</Button>{" "}
    </div>
  );
};
export const TakeATestBtn = () => {
  return (
    <div className="mt-2">
      <Button className="takeATestBtn">Take A Test</Button>{" "}
    </div>
  );
};
export const StartYourAssessmentBtn = () => {
  return (
    <div className="mt-2">
      <a href="/psychologicalAssessment">
        {" "}
        <Button className="startYourAssessmentBtn">
          Start Your Assessment
        </Button>
      </a>{" "}
      {/* <a href="/assessment">
        {" "}
        <Button className="startYourAssessmentBtn">
          Start Your Assessment
        </Button>
      </a>{" "} */}
      {/* <Button className="SaveBtn">Save</Button>{" "} */}
    </div>
  );
};
export const ContinueBtn = () => {
  return (
    <div className="mt-2">
      <Link to="/psychologicalAssessment">
        <Button className="ContinueBtn">Continue</Button>
      </Link>
    </div>
  );
};
export const AddToCalendarBtn = () => {
  return (
    <div className="mt-2">
      <Button className="AddToCalendarBtn">Add To Calendar</Button>{" "}
    </div>
  );
};
export const SubmitTestBtn = () => {
  return (
    <div className="mt-2">
      <a href="/resultPage">
        <Button className="SubmitBtn">Submit</Button>{" "}
      </a>
    </div>
  );
};
export const SubmitBtn = () => {
  return (
    <div className="mt-2">
      <a href="#">
        <Button className="SubmitBtn">Submit</Button>{" "}
      </a>
    </div>
  );
};
export const GetStartedBtn = () => {
  return (
    <div className="mt-2">
      <Link to="/signInPage">
        {" "}
        <Button className="GetStartedBtn">Get Started</Button>
      </Link>
    </div>
  );
};
