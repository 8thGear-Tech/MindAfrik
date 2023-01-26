import { NavSection } from "../../components/Navbar/guestNavbar";
import { AboutUsHero } from "../../components/hero";
import { CoreValuesCards } from "../../components/allCards/AboutUsCards";
import ValuesData from "../../data/allCards/dashboardCards.json";

const About = () => {
  return (
    <>
      <NavSection />
      <AboutUsHero />
      <CoreValues />
    </>
  );
};

const CoreValues = () => {
  return (
    <div className="container-fluid mt-5 mb-5 ">
      <h3 className="text-center mt-3">Core Values</h3>
      <div className="row d-flex text-center">
        {ValuesData.ValuesInfo.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
              <CoreValuesCards {...card}></CoreValuesCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
