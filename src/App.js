import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import UnderConstruction from "./pages/websitePages/underConstruction";
import { EvaluationCard } from "./components/allCards/PsychologicalAssessment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="cards" element={<EvaluationCard />} />
      </Routes>
    </BrowserRouter>
  );
}

{
}

export default App;
