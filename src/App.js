import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/websitePages/homePage";
import About from "./pages/websitePages/aboutUsPage";
import Contact from "./pages/websitePages/contactUsPage";
import { Assessment } from "./pages/websitePages/allAssessment/assessment";
import PsychologicalAssessment from "./pages/websitePages/allAssessment/psychologicalAssessmentpage";
import UnderConstruction from "./pages/websitePages/underConstruction";
import { Footer } from "./components/footer";
import { DashboardNavbar } from "./components/Navbar/dashBoardNavbar";

import AdminDashboardCounselleesPage from "./pages/dashboardPages/admin/adminDashboardCounseleesPage";
import AdminDashboardCounsellorsPage from "./pages/dashboardPages/admin/adminDashboardCounselorsPage";
import AdminDashboardHomePage from "./pages/dashboardPages/admin/adminDashboardHomePage";
import AdminDashboardNotificationPage from "./pages/dashboardPages/admin/adminDashboardNotificationPage";

//Admin Dashboard Pages
import CounsellorDashboardHomePage from "./pages/dashboardPages/counsellor/counselorsDashboardHomePage";
import CounselorsDashboardCounseleesPage from "./pages/dashboardPages/counsellor/counselorsDashboardCounseleesPage";
import CounsellorDashboardNotificationPage from "./pages/dashboardPages/counsellor/counselorsDashboardNotificationPage";
import CounsellorProfile from "./pages/dashboardPages/counsellor/counselorsDashboardProfilePage";

//counselle
import CounselleeDashboardHomePage from "./pages/dashboardPages/counsellee/counseleeDashboardHomePage";
import CounselleeProfile from "./pages/dashboardPages/counsellee/counseleesDashboardProfilePage";
import CounselleeSession from "./pages/dashboardPages/counsellee/counseleesDashboardSessionPage";
import CounselleeNotification from "./pages/dashboardPages/counsellee/counseleesDashboardNotificationPage";
import CounselleeTestPage from "./pages/dashboardPages/counsellee/counseleesDashboard_TakeATestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="assessment" element={<Assessment />} />
        <Route
          path="psychologicalAssessment"
          element={<PsychologicalAssessment />}
        />
        {/* Counsellors Dashboard */}
        <Route
          path="counsellorDashboard"
          element={<CounsellorDashboardHomePage />}
        />

        <Route
          path="counsellorCounselleeList"
          element={<CounsellorDashboardNotificationPage />}
        />
        <Route
          path="counsellorDashboardNotification"
          element={<CounsellorDashboardNotificationPage />}
        />
        <Route path="counsellorProfile" element={<CounsellorProfile />} />
        {/* Counsellee Dashboard */}
        <Route
          path="counselleeDashboard"
          element={<CounselleeDashboardHomePage />}
        />
        <Route path="counselleeProfile" element={<CounselleeProfile />} />
        <Route path="counselleeSession" element={<CounselleeSession />} />
        <Route
          path="counselleeNotification"
          element={<CounselleeNotification />}
        />
        <Route path="counselleeTest" element={<CounselleeTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
