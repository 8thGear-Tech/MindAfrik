import { NavSection } from "../../../components/Navbar/guestNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BookASessionBtn } from "../../../components/Buttons/actionBtn";
import { ContactBtn } from "../../../components/Buttons/actionBtn";

const ResultPage = () => {
  return (
    <>
      <NavSection />
      <Result />
    </>
  );
};

const Result = () => {
  return (
    <>
      <div className="container">
        <div className="row sectionOneBgColor py-5 my-5">
          <div className="justify-content-center text-center">
            <h3 className="">Anxiety & Depression Symptoms</h3>
            <h5 className="">Ade’s Results</h5>
            <h3 className="">High to Minimal Depression:</h3>
            <h3 className="">10/24</h3>
            <h5 className="">Depression can feel like:</h5>
            <p className="">
              Little interest in doing things , you’re one step closer to
              getting support to help you feel your best.
            </p>
            <p className="">
              Little interest in doing things , you’re one step closer to
              getting support to help you feel your best.
            </p>
            <p className="">
              Little interest in doing things , you’re one step closer to
              getting support to help you feel your best.
            </p>
            <h3 className="">Low to Minimal Depression:</h3>
            <h3 className="">10/24</h3>
            <h5 className="">Depression can feel like:</h5>
            <p className="">
              Little interest in doing things , you’re one step closer to
              getting support to help you feel your best.
            </p>
            <p className="">
              Little interest in doing things , you’re one step closer to
              getting support to help you feel your best.
            </p>
            <p className="">
              Little interest in doing things , you’re one step closer to
              getting support to help you feel your best.
            </p>
            {/* <h5 className="">hello</h5> */}
            <BookASessionBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
