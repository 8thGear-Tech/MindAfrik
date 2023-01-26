import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import UnderConstruction from "./pages/websitePages/underConstruction";
import HomePageHeroComponent from "./pages/websitePages/homePage";
// import { EvaluationCard } from "./components/allCards/PsychologicalAssessment";
// import { AdminStatisticsCard } from "./components/allCards/dashBoardcards";
import { CoreValues } from "./components/allCards/AboutUsCards";

import { TeamsCard } from "./components/allCards/AboutUsCards";
import { StartADiscussionBtn } from "../src/components/Buttons/actionBtn";
import { StartChattingBtn } from "../src/components/Buttons/actionBtn";
import { SaveBtn } from "../src/components/Buttons/actionBtn";
import { ContinueBtn } from "../src/components/Buttons/actionBtn";
import { GetStartedBtn } from "../src/components/Buttons/actionBtn";
function App() {
  return (
    <BrowserRouter>
      <CoreValues />
      <TeamsCard />

      <Routes>
        {/* <Route path="/" element={<CoreValues />} /> */}
        <Route path="/" element={<HomePageHeroComponent />} />
        {/* <Route path="/" element={<HomePageHeroComponent />} /> */}
        {/* <Route path="Adim-Dashboard-Card" element={<AdminStatisticsCard />} /> */}
        {/* <Route path="cards" element={<EvaluationCard />} /> */}
        {/* <Route path="/" element={<StartADiscussionBtn />} /> */}

        <Route path="Chatting-button" element={<StartChattingBtn />} />
        <Route path="save-button" element={<SaveBtn />} />
        <Route path="Continue-button" element={<ContinueBtn />} />
        <Route path="Get-Started-button" element={<GetStartedBtn />} />
        {/* <Route path="core-values" element={<CoreValues />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
