import * as React from "react";
// import { Component } from "react";
//auth
import RequireAuth from "./components/requireAuth";
import PersistLogin from "./components/Forms/persistLogin";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";

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

//Sessions
import { SupportiveListeningSessionPage } from "./components/Forms/websiteForms";
import { NewsletterPage } from "./components/Forms/websiteForms";

import UnderConstruction from "./pages/websitePages/underConstruction";
import { Footer } from "./components/footer";
import { DashboardNavbar } from "./components/Navbar/dashBoardNavbar";

//email verification
import { PendingVerification } from "./pages/authenticationPages/emailVerified";
import EmailVerificationSuccess from "./pages/authenticationPages/emailVerified";

//forms
import { AssesmentForm } from "./components/Forms/websiteForms";

//admin
import AdminDashboardCounselleesPage from "./pages/dashboardPages/admin/adminDashboardCounseleesPage";
import AdminDashboardCounsellorsPage from "./pages/dashboardPages/admin/adminDashboardCounselorsPage";
import AdminDashboardHomePage from "./pages/dashboardPages/admin/adminDashboardHomePage";
import AdminDashboardNotificationPage from "./pages/dashboardPages/admin/adminDashboardNotificationPage";
import { Unauthorized } from "./pages/websitePages/unauthorized";

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
import CounsellorSignUp from "./pages/authenticationPages/counsellorSignUpPage";
import ForgotPasswordPage from "./pages/authenticationPages/recoverPasswordPage";
import { VerifyOTP } from "./pages/authenticationPages/recoverPasswordPage";

//counsellee
import CounselleeDashboardHomePage from "./pages/dashboardPages/counsellee/counseleeDashboardHomePage";
import CounselleeProfile from "./pages/dashboardPages/counsellee/counseleesDashboardProfilePage";
import CounselleeSession from "./pages/dashboardPages/counsellee/counseleesDashboardSessionPage";
import CounselleeNotification from "./pages/dashboardPages/counsellee/counseleesDashboardNotificationPage";
import CounselleeTestPage from "./pages/dashboardPages/counsellee/counseleesDashboard_TakeATestPage";
import { NavbarSection } from "./components/Navbar/guestNavbar";

const ROLES = {
  Admin: 1,
  Counsellor: 2,
  Counsellee: 3,
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Counsellee Dashboard */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["Counsellee"]} />}>
            {/* <Route element={<RequireAuth allowedRoles={[ROLES.Counsellee]} />}> */}
            <Route
              path="counselleeDashboard"
              element={<CounselleeDashboardHomePage />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
            <Route
              path="adminDashboardHomePage"
              element={<AdminDashboardHomePage />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={["Counsellor"]} />}>
            {/* <Route element={<RequireAuth allowedRoles={[ROLES.Counsellor]} />}> */}
            <Route
              path="counsellorDashboard"
              element={<CounsellorDashboardHomePage />}
            />
            <Route path="counsellorProfile" element={<CounsellorProfile />} />
          </Route>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/logout" element={<UnderConstruction />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="FAQ" element={<FAQPage />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="termsOfService" element={<TermsOfService />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="available-counsellors" element={<CounsellorsDetails />} />
        {/* <Route path="assessment" element={<Assessment />} /> */}
        <Route
          path="psychologicalAssessment"
          element={<PsychologicalAssessment />}
        />
        {/* Admin Dashboard */}
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* Persist Login */}
        {/* Protected Routes */}
        {/* <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
            
            <Route
              path="adminDashboardHomePage"
              element={<AdminDashboardHomePage />}
            />
          </Route>
        </Route> */}
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
        {/* <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["Counsellor"]} />}>
           
            <Route
              path="counsellorDashboard"
              element={<CounsellorDashboardHomePage />}
            />
          </Route>
        </Route> */}
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
        <Route path="sign-up-as-a-counsellee" element={<CounselleeSignUp />} />
        <Route path="sign-up-as-a-counsellor" element={<CounsellorSignUp />} />
        <Route path="signInPage" element={<SignInPage />} />
        <Route path="verify-email" element={<PendingVerification />} />
        <Route path="email-verified" element={<EmailVerificationSuccess />} />
        <Route path="forgotPasswordPage" element={<ForgotPasswordPage />} />
        <Route path="verify-otp" element={<VerifyOTP />} />
        {/* <Route path="TestOneForm" element={<TestOneForm />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="CreateBlog" element={<CreateBlog />} />
        <Route path="blog/:blogId" element={<IndividualBlog />} />
        <Route path="CrudApp" element={<CrudApp />} /> */}
        {/* Session */}
        <Route
          path="book-a-supportive-listening-session"
          element={<SupportiveListeningSessionPage />}
        />
        <Route path="subscribe-to-newsletter" element={<NewsletterPage />} />
      </Routes>

      {/* Footer conditional rendering */}
      {window.location.pathname.includes("sign-up-as-a-counsellee") ||
      window.location.pathname.includes("sign-up-as-a-counsellor") ||
      window.location.pathname.includes("signInPage") ||
      window.location.pathname.includes("counselleeDashboard") ||
      window.location.pathname.includes("adminDashboardHomePage") ||
      window.location.pathname.includes("counsellorDashboard") ? null : (
        <footer>
          <Footer />
        </footer>
      )}

      {/* <footer>
        <Footer />
      </footer> */}
    </BrowserRouter>
  );
}

export default App;
