import { NavSection } from "../../components/Navbar/guestNavbar";
import { AboutUsHero } from "../../components/hero";
import { TeamCard } from "../../components/allCards/AboutUsCards";
import { CoreValuesCards } from "../../components/allCards/AboutUsCards";
import ValuesData from "../../data/allCards/dashboardCards.json";

const About = () => {
  return (
    <>
      <NavSection />
      <AboutUsHero />
      <TeamCard />
      <CoreValues />
    </>
  );
};

const CoreValues = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <h3 className="text-center mt-3 mb-4">Core Values</h3>
      <div className="row d-flex text-center">
        {ValuesData.ValuesInfo.map((card) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={card.id}>
              <CoreValuesCards {...card}></CoreValuesCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
