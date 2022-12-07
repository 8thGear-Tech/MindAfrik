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
import { ExploreCards } from "./components/allCards/dashBoardcards";
// import { EvaluationCard } from "./components/allCards/PsychologicalAssessment";

function App() {
  return (
    <BrowserRouter>
      {/* <SendBtn />
      <BookNowBtn />
      <ProceedBtn />
      <GetInTouchBtn />
      <SaveBtn />
      <TakeATestBtn />
      <StartYourAssessmentBtn /> */}
      <ExploreCards />
      {/* <Routes>
        <Route path="/" element={<UnderConstruction />} />
      </Routes> */}
      {/* <Route path="cards" element={<EvaluationCard />} /> */}
    </BrowserRouter>
  );
}

{
}

export default App;
