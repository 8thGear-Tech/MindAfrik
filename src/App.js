import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import UnderConstruction from "./pages/websitePages/underConstruction";
import { Evaluation } from "./components/allCards/PsychologicalAssessment";
import { Footer } from "./components/footer";
import { DashboardNavbar } from "./components/Navbar/dashBoardNavbar";

//Admin Dashboard Pages
import CounsellorDashboardHomePage from "./pages/dashboardPages/counsellor/counselorsDashboardHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounsellorDashboardHomePage />} />
        {/* <Route path="/" element={<DashboardNavbar />} /> */}
        <Route path="cards" element={<Evaluation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
