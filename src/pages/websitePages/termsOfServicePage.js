import { NavSection } from "../../components/Navbar/guestNavbar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import { ContinueBtn } from "../../../components/Buttons/actionBtn";
// import { ContactBtn } from "../../../components/Buttons/actionBtn";

// const TakeaTest = () => {
//   return (
//     <>
//       <NavSection />
//       <TakeaTestPage />
//     </>
//   );
// };

export const TermsOfService = () => {
  return (
    <>
      <div>
        <NavSection />{" "}
        <div className="container">
          <div className="row py-5 my-5">
            <div className="justify-content-center text-center">
              <h3 className="">Terms of Service</h3>
              {/* <hr style={{ width: "331px" }} className="text-center" /> */}
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              {/* <h5 className="">hello</h5> */}
              {/* <ContactBtn /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
