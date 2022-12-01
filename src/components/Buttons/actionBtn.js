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
