// HomePageHero
// AboutUsHero
// PsychologicalAssessmentHero
import AssessmentHero from "../../src/Image/AssesmmentHero.png";

const PsychologicalAssessmentHero = () => {
  return (
    <>
      <div className="container pt-3 px-5">
        <div className=" row">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5 align-items-center">
            <h1 className=" d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
              You don't feel good?
            </h1>
            <h2 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
              You don't feel good?{" "}
            </h2>
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
            <img src={AssessmentHero} className="mx-lg-auto img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};
export default PsychologicalAssessmentHero;
