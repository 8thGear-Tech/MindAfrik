import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/websitePages/homePage";
import PsychologicalAssessment from "./pages/websitePages/assessment/psychologicalAssessmentpage";
import UnderConstruction from "./pages/websitePages/underConstruction";
import { Footer } from "./components/footer";
import { DashboardNavbar } from "./components/Navbar/dashBoardNavbar";

//Admin Dashboard Pages
import CounsellorDashboardHomePage from "./pages/dashboardPages/counsellor/counselorsDashboardHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="psychologicalAssessment"
          element={<PsychologicalAssessment />}
        />

        {/* Counsellors Dashboard */}
        <Route
          path="counsellorDashboard"
          element={<CounsellorDashboardHomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
