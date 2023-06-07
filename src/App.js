import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import { TestOneForm } from "./components/Forms/testoneform";
// import { Blog } from "./components/Forms/blog";
// import { CreateBlog } from "./components/Forms/createBlog";
// import { IndividualBlog } from "./components/Forms/individualBlog";
// import { CrudApp } from "./components/Forms/crudapplication";

import Home from "./pages/websitePages/homePage";
import About from "./pages/websitePages/aboutUsPage";
import Contact from "./pages/websitePages/contactUsPage";
import FAQPage from "./pages/websitePages/FAQpage";
import { Disclaimer } from "./pages/websitePages/disclaimerPage";
import { PrivacyPolicy } from "./pages/websitePages/privacyPolicyPage";
import { TermsOfService } from "./pages/websitePages/termsOfServicePage";

import { Assessment } from "./pages/websitePages/allAssessment/assessment";
import PsychologicalAssessment from "./pages/websitePages/allAssessment/psychologicalAssessmentpage";
import TakeaTest from "./pages/websitePages/allAssessment/take-a-testPage";
import { UnderstandingYourResult } from "./pages/websitePages/allAssessment/take-a-testPage";
import ResultPage from "./pages/websitePages/allAssessment/testResultPage";

import UnderConstruction from "./pages/websitePages/underConstruction";
import { Footer } from "./components/footer";
import { DashboardNavbar } from "./components/Navbar/dashBoardNavbar";

//email verification successful
import EmailVerificationSuccess from "./pages/authenticationPages/emailVerified";

//forms
import { AssesmentForm } from "./components/Forms/websiteForms";

//admin
import AdminDashboardCounselleesPage from "./pages/dashboardPages/admin/adminDashboardCounseleesPage";
import AdminDashboardCounsellorsPage from "./pages/dashboardPages/admin/adminDashboardCounselorsPage";
import AdminDashboardHomePage from "./pages/dashboardPages/admin/adminDashboardHomePage";
import AdminDashboardNotificationPage from "./pages/dashboardPages/admin/adminDashboardNotificationPage";

//Counsellor Dashboard Pages
import CounsellorDashboardHomePage from "./pages/dashboardPages/counsellor/counselorsDashboardHomePage";
import CounselorsDashboardCounseleesPage from "./pages/dashboardPages/counsellor/counselorsDashboardCounseleesPage";
import CounsellorDashboardNotificationPage from "./pages/dashboardPages/counsellor/counselorsDashboardNotificationPage";
import CounsellorProfile from "./pages/dashboardPages/counsellor/counselorsDashboardProfilePage";
import CounsellorNote from "./pages/dashboardPages/counsellor/counselorsDashboardNotePage";
import CounsellorsDetails from "./pages/websitePages/selectcounselorPage";

//Authentication pages
import SignInPage from "./pages/authenticationPages/signInPage";
import CounselleeSignUp from "./pages/authenticationPages/counseleeSignUpPage";
import ForgotPasswordPage from "./pages/authenticationPages/recoverPasswordPage";

//counsellee
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
        <Route path="FAQ" element={<FAQPage />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="termsOfService" element={<TermsOfService />} />
        <Route path="assessment" element={<Assessment />} />
        {/* <Route path="assessment" element={<Assessment />} /> */}
        <Route
          path="psychologicalAssessment"
          element={<PsychologicalAssessment />}
        />
        {/* Admin Dashboard */}
        <Route
          path="adminDashboardHomePage"
          element={<AdminDashboardHomePage />}
        />
        <Route
          path="adminDashboardCounselleesPage"
          element={<AdminDashboardCounselleesPage />}
        />
        <Route
          path="adminDashboardCounsellerPage"
          element={<AdminDashboardCounsellorsPage />}
        />
        <Route
          path="adminDashboardNotificationPage"
          element={<AdminDashboardNotificationPage />}
        />
        {/* Counsellors Dashboard */}
        <Route
          path="counsellorDashboard"
          element={<CounsellorDashboardHomePage />}
        />
        <Route path="counsellorProfile" element={<CounsellorProfile />} />
        <Route
          path="counsellorCounselleeList"
          element={<CounselorsDashboardCounseleesPage />}
        />
        <Route
          path="counsellorDashboardNotification"
          element={<CounsellorDashboardNotificationPage />}
        />
        <Route path="counsellorNote" element={<CounsellorNote />} />
        <Route path="counsellorsDetails" element={<CounsellorsDetails />} />
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
        <Route path="counselleeSession" element={<CounselleeSession />} />
        <Route path="counselleeTest" element={<CounselleeTestPage />} />

        {/* website */}
        <Route path="takeaTest" element={<TakeaTest />} />
        <Route
          path="understandingYourResult"
          element={<UnderstandingYourResult />}
        />
        <Route path="resultPage" element={<ResultPage />} />

        {/* Authentication pages */}
        <Route path="counselleeSignUp" element={<CounselleeSignUp />} />
        <Route path="signInPage" element={<SignInPage />} />
        <Route path="forgotPasswordPage" element={<ForgotPasswordPage />} />
        <Route path="email-verified" element={<EmailVerificationSuccess />} />
        {/* <Route path="TestOneForm" element={<TestOneForm />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="CreateBlog" element={<CreateBlog />} />
        <Route path="blog/:blogId" element={<IndividualBlog />} />
        <Route path="CrudApp" element={<CrudApp />} /> */}
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
