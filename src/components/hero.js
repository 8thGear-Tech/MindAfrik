import aboutUsHeroImage from "../assets/images/hero/aboutUsHeroImage.png";
// HomePageHero
// AboutUsHero
// PsychologicalAssessmentHero
import AssessmentHero from "../../src/Image/AssesmmentHero.png";

export const AboutUsHero = () => {
  return (
    <div className="container-fluid aboutHeroColor">
      <div className="row px-5 align-items-center">
        <div className="col-lg-7 col-md-7 col-sm-12">
          <h1 className="aboutUsHeroText text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            rerum.
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            similique atque laboriosam cum nostrum doloribus officiis magnam
            debitis Dolorem culpa dolor vel atque quam quidem exercitationem.
          </p>
        </div>
        <img
          src={aboutUsHeroImage}
          alt=""
          className="col-lg-5 col-md-5 col-sm-12"
        />
      </div>
    </div>
  );
};

// export const ExploreCards = (props) => {
//   const { exploreParagraphtext, exploreIcon } = props;
//   return (
//     <Card style={{ width: "22rem" }}>
//       <Card.Body>
//         <div className="row">
//           <Card.Text className="col-lg-10 col-md-10 col-sm-10 d-none d-md-block">
//             {exploreParagraphtext}
//           </Card.Text>

//           {/* To appear on mobile start*/}
//           <Card.Text className="text-center d-md-none d-xs-block">
//             Feeling Overwhelmed? Talk to our Therapists. they are here to help
//             you.
//           </Card.Text>
//           {/* To appear on mobile end */}

//           <div className="col-lg-2 col-md-2 col-sm-2 videoIcon d-none d-md-block">
//             {exploreIcon}
//           </div>

//           {/* To appear on mobile start*/}
//           <div className="text-center d-md-none d-xs-block">
//             <ScheduleASessionIcon />
//           </div>
//           {/* To appear on mobile end*/}
//         </div>
//         <div className="d-none d-md-block">
//           <Button className="scheduleASession">Go somewhere</Button>
//         </div>

//         {/* To appear on mobile start */}
//         <div className="text-center my-2 d-md-none d-xs-block">
//           <Button className="">Go somewhere</Button>
//         </div>
//         {/* To appear on mobile end */}
//       </Card.Body>
//     </Card>
//   );
// };

export const PsychologicalAssessmentHero = () => {
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
