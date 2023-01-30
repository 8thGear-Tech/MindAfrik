//external import
import { NavSection } from "../../components/Navbar/guestNavbar";
import { FAQ } from "../../components/FAQ";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FAQPage = () => {
  return (
    <>
      <NavSection />
      <FAQ />
    </>
  );
};

export default FAQPage;
