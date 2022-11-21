//internal import
import { NavbarSection } from "../components/navbar";

//buttons
import { JoinOurListBtn } from "../components/Buttons/actionBtn";

//images
import underconstructionhero from "../assets/images/hero/underconstructionhero.png";

//icons
import { PhoneIcon } from "../assets/icons/socialIcons";
import { Mailicon } from "../assets/icons/socialIcons";

const UnderConstruction = () => {
  return (
    <>
      <SectionOne />
    </>
  );
};

const SectionOne = () => {
  return (
    <>
      <div className="px-4 container-fluid underconstructionPageBg py-4">
        <NavbarSection />
        <div className="row align-items-center justify-content-center mt-4">
          <div className="col-lg-6 col-md-7 col-sm-12">
            <h1 className="headerFontColor">Launching soon!</h1>
            <h4 className="headerFontColor">Thank you for visiting.</h4>
            <p className="d-flex">
              At Mindafrik, our deepest purpose and drive is helping to support
              the stability of people struggling with disturbed minds,confused
              and dark thoughts through supportive listening and professional
              counseling for their best life ahead.
            </p>
            <div className="d-flex">
              {" "}
              <PhoneIcon />
              <a href="tel:2348133199953" className="text-decoration-none">
                <p className="paragraphColor mx-3">+2348133199953</p>
              </a>
            </div>
            <div className="d-flex">
              <Mailicon />{" "}
              <a
                href="mailto:info@mindafrik.com"
                className="text-decoration-none"
              >
                <p className="paragraphColor mx-3">info@mindafrik.com</p>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-10">
            <img
              src={underconstructionhero}
              className="mx-lg-auto img-fluid"
              alt=""
              loading=""
            />
          </div>
          <div className="pt-5">
            <h3 className="headerFontColor text-center">
              Our services are focused on:
            </h3>
            <div className="d-flex justify-content-center ">
              <ul>
                <li class="paragraphText ">
                  Relationship, Family and Marriage counselling
                </li>
                <li class="paragraphText ">Trauma Informed Care and</li>
                <li class="paragraphText ">Mental Health</li>
              </ul>
            </div>
            <div className="text-center">
              <JoinOurListBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
