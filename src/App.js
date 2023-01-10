import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import UnderConstruction from "./pages/websitePages/underConstruction";
import { Evaluation } from "./components/allCards/PsychologicalAssessment";
import { NavSection } from "./components/Navbar/guestNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavSection />} />
        <Route path="cards" element={<Evaluation />} />
      </Routes>
    </BrowserRouter>
  );
}

{
}

export default App;
