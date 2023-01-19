// HomePageHero
// AboutUsHero
// PsychologicalAssessmentHero
import PsychologicalAssessmentphoto from "../Image/Psychological Assessment Hero .png";

const PsychologicalAssessmentHero = () => {
  return (
    <>
      <div className="container">
        <div className=" row">
          <div className="col-6">
            <h4>You don't feel good?</h4>
            <h6>We can help you find yourself</h6>
            <p>
              Mental test is self care and development for healthy connection
              between your soul and body. Mental test is self care and
              development for healthy connection between your soul and body.
            </p>
          </div>
          <div className="col-6">
            <img
              style={{ width: "20rem" }}
              src={PsychologicalAssessmentphoto}
              className=" AssessmentPhoto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PsychologicalAssessmentHero;
{
  /* <div className="row ">
        <div className="col-lg-6 col-md-12 col-sm-12 ">
          <p className="d-flex">
            Mental test is self care and development for healthy connection
            between your soul and body. Mental test is self care and development
            for healthy connection between your soul and body
          </p>
        </div>
      </div>
      <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
        <img>src={PsychologicalAssessmentphoto}</img>
      </div> */
}
