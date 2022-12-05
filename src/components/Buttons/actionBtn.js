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

import Button from "react-bootstrap/Button";

export const BookaSessionBtn = () => {
  return (
    <>
      <a href="https://bit.ly/MindafrikCounsellingSession" target="_blank">
        {" "}
        <Button className="BookaSessionBtn">Book a Session</Button>
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
      <Button className="startYourAssessmentBtn">START YOUR ASSESSMENT</Button>{" "}
    </div>
  );
};
