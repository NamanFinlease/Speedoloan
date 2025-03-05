import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./navbar/Header";
import AboutUs from "./component/AboutUs";
import MainContent from "./navbar/MainContent";
import ContactUs from "./component/ContactUs";
import ApplyNow from "./component/ApplyNow";
import PrivacyPolicy from "./component/PrivacyPolicy";
import TermsAndConditions from "./component/TermsAndConditions";
import RepayLoan from "./component/RepayLoan";
import Footer from "./component/Footer";
import FAQs from "./component/FAQs";
import LendingPage from "./component/LendingPage";
import LoanForm from "./component/LoanForm";
import SuccessPage from "./component/SuccessPage";
import CancellationRefundPolicy from "./component/CancellationRefundPolicy";

// Custom layout to handle header and footer visibility
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/landing-page", "/success"];

  return (
    <>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <Outlet />
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that hide Header and Footer */}
        <Route path="/landing-page" element={<LendingPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/lead-form" element={<LoanForm />} />

        {/* Routes with Header and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TermsAndConditions />} />
          <Route path="/repay-now" element={<RepayLoan />} />
          <Route path="/faq" element={<FAQs />} />
          <Route
            path="/cancelation-refund"
            element={<CancellationRefundPolicy />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
