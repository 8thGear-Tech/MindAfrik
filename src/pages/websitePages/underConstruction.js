//internal import
import { NavbarSection } from "../../components/Navbar/guestNavbar";

//buttons
import { BookaSessionBtn } from "../../components/Buttons/actionBtn";
import { TakeAssessmentBtn } from "../../components/Buttons/actionBtn";
import { BookASessionBtn } from "../../components/Buttons/actionBtn";
import { ContactBtn } from "../../components/Buttons/actionBtn";
import { SubscribeBtn } from "../../components/Buttons/actionBtn";
import { BookASessionNowBtn } from "../../components/Buttons/actionBtn";
import { ScheduleASessionBtn } from "../../components/Buttons/actionBtn";
//images
import underconstructionhero from "../../assets/images/hero/underconstructionhero.png";
import CounselorProfileForm from "../../components/Forms/UserProfileForm";
//icons
import { PhoneIcon } from "../../assets/icons/socialIcons";
import { Mailicon } from "../../assets/icons/socialIcons";
import { HowItWorks } from "../../components/allCards/homePageCard";
import { WhyChooseUsCard } from "../../components/allCards/homePageCard";
import { TestimonialsCard } from "../../components/allCards/homePageCard";

const UnderConstruction = () => {
  return (
    <>
      <div className="px-3">
        {" "}
        <NavbarSection />
        <div className="px-4 container-fluid underconstructionPageBg pb-4">
          <div className="row align-items-center justify-content-center mt-3">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h1 className="headerFontColor d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                Launching Our Site Soon!
              </h1>
              <h2 className="headerFontColor d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                Launching Our Site Soon!
              </h2>
              <h4 className="headerFontColor">Thank you for visiting.</h4>
              <p className="d-flex">
                At Mindafrik, our deepest purpose and drive is in empowering
                people to create and live the life they want through supportive
                listening and professional counselling.
              </p>
              <h3 className="headerFontColor">Our services are focused on:</h3>
              <div className=" ">
                <ul>
                  <li class="paragraphText ">
                    Relationship, Family and Marriage counselling
                  </li>
                  <li class="paragraphText ">Trauma Informed Care and</li>
                  <li class="paragraphText ">Mental Health</li>
                </ul>
              </div>
              <div className="text-center mb-4">
                <BookaSessionBtn />
                <howItWorksCard />
                <TakeAssessmentBtn />
                <BookASessionBtn />
                <ContactBtn />
                <SubscribeBtn />
                <BookASessionNowBtn />
                <ScheduleASessionBtn />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
              <img
                src={underconstructionhero}
                className="mx-lg-auto img-fluid "
                alt=""
                loading=""
              />
            </div>
            <div className="pt-3">
              <div className="d-flex justify-content-center">
                {" "}
                <PhoneIcon />
                <a href="tel:2349131862169" className="text-decoration-none">
                  <p className="paragraphColor mx-3">+2349131862169</p>
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <Mailicon />{" "}
                <a
                  href="mailto:info@mindafrik.com"
                  className="text-decoration-none"
                >
                  <p className="paragraphColor mx-3">info@mindafrik.com</p>
                </a>
              </div>
              <HowItWorks />
              <WhyChooseUsCard />
              <TestimonialsCard />
              <CounselorProfileForm />
            </div>
          </div>
        </div>
      </div>
      //{" "}
    </>
  );
};

export default UnderConstruction;
