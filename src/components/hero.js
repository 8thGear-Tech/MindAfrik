// HomePageHero
// AboutUsHero
// PsychologicalAssessmentHero
import AssessmentHero from "../../src/Image/AssesmmentHero.png";

const PsychologicalAssessmentHero = () => {
  return (
    <>
      <div className="container pt-3 px-4">
        <div className=" row">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 align-items-center">
            <h1>You don't feel good?</h1>
            <br></br>
            <h4>We can help you find yourself</h4>
            <br></br>
            <p>
              Mental test is self care and development for healthy connection
              between your soul and body. Mental test is self care and
              development for healthy connection between your soul and body.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img src={AssessmentHero} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PsychologicalAssessmentHero;
