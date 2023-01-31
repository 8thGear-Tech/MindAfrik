import AdvisoryData from "../../data/allCards/AboutUsCard.json";
import { AdvisoryBoardCard } from "../../components/allCards/AboutUsCards";

const AdvisoryTeamPic = () => {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-5">
        <h3 className="text-center pt-5 pb-3">Advisory Board</h3>
        {AdvisoryData.AdvisoryOverlay.map((AdvisoryOverlay) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mt-2 mb-5 d-flex justify-content-center"
              key={AdvisoryOverlay.id}
            >
              <AdvisoryBoardCard {...AdvisoryOverlay}></AdvisoryBoardCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AdvisoryTeamPic;
