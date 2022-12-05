import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import UnderConstruction from "./pages/websitePages/underConstruction";
import { SendBtn } from "./components/Buttons/actionBtn";
import { BookNowBtn } from "./components/Buttons/actionBtn";
import { ProceedBtn } from "./components/Buttons/actionBtn";
import { GetInTouchBtn } from "./components/Buttons/actionBtn";
import { SaveBtn } from "./components/Buttons/actionBtn";
import { TakeATestBtn } from "./components/Buttons/actionBtn";
import { StartYourAssessmentBtn } from "./components/Buttons/actionBtn";

function App() {
  return (
    <BrowserRouter>
      <SendBtn />
      <BookNowBtn />
      <ProceedBtn />
      <GetInTouchBtn />
      <SaveBtn />
      <TakeATestBtn />
      <StartYourAssessmentBtn />
      {/* <Routes>
        <Route path="/" element={<UnderConstruction />} />
      </Routes> */}
    </BrowserRouter>
  );
}

{
}

export default App;
