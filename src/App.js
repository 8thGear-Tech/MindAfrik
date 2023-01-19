import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import UnderConstruction from "./pages/websitePages/underConstruction";
// import { EvaluationCard } from "./components/allCards/PsychologicalAssessment";
import Website from "./components/Forms/websiteForms";
import HeroSection from "./components/hero";
import Testing from "./pages/websitePages/aboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Testing />} />
        <Route path="testing" element={<Website />} />
        <Route path="herosection" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  );
}

{
}

export default App;
