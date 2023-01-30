import { NavSection } from "../../components/Navbar/guestNavbar";
import { AboutUsHero } from "../../components/hero";
import { TeamCard } from "../../components/allCards/AboutUsCards";
import { AdvisoryBoardOnHoverCard } from "../../components/allCards/AboutUsCards";
import { CoreValuesCards } from "../../components/allCards/AboutUsCards";
import Info from "../../data/allCards/AboutUsCard.json";
import ValuesData from "../../data/allCards/dashboardCards.json";

const About = () => {
  return (
    <>
      <NavSection />
      <AboutUsHero />
      <TeamCard />
      <AdvisoryTeamPic />
      <CoreValues />
    </>
  );
};

const AdvisoryTeamPic = () => {
  return (
    <div className="container-fluid advisoryBg">
      <div className="row d-flex justify-content-center mt-5">
        <h3 className="text-center pt-5 pb-3">Advisory Board</h3>
        {Info.FirstHoverCard.map((firstHoverCard) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center"
              key={firstHoverCard.id}
            >
              <AdvisoryBoardOnHoverCard
                {...firstHoverCard}
              ></AdvisoryBoardOnHoverCard>
            </div>
          );
        })}
      </div>
    </div>
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
