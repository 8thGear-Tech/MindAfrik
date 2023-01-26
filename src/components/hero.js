// HomePageHero
// AboutUsHero
// PsychologicalAssessmentHero

import { NavbarSection } from "../components/Navbar/guestNavbar";

import { GetStartedBtn } from "../components/Buttons/actionBtn";

import homehero from "../assets/images/hero/homehero.png";

const HomePageHero = () => {
  return (
    <>
      <div className="px-3">
        {" "}
        <NavbarSection />
        <div className="container pt-3 px-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 align-item-center">
              <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
              <br></br>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aperiam ex iusto ipsam cupiditate iure.
              </p>
              <div className="text-start mb-4">
                {" "}
                <GetStartedBtn />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 text end">
              <img src={homehero} width="500rem" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageHero;
