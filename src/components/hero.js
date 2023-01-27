import aboutUsHeroImage from "../assets/images/hero/aboutUsHeroImage.png";
// HomePageHero
// AboutUsHero
// PsychologicalAssessmentHero
import AssessmentHero from "../../src/Image/AssesmmentHero.png";
import { NavbarSection } from "../components/Navbar/guestNavbar";

import { GetStartedBtn } from "../components/Buttons/actionBtn";

import homehero from "../assets/images/hero/homehero.png";

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

export const HomePageHero = () => {
  return (
    <>
      <div className="container-fluid HomePageHeroBg d-flex align-items-center">
        <div className="px-5 container-fluid HomePageHeroBgg d-flex py-5">
          <div className="row align-items-center justify-content-center px-4 py-3">
            <div className="col-lg-7 col-md-7 col-sm-12 pt-3">
              <h1 className="d-none d-lg-block d-md-none d-sm-none d-xs-none">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
                <br />
              </h1>
              <h2 className=" d-xs-block d-sm-block d-md-block d-lg-none">
                Employability Skills Training
                <br />
              </h2>
              <p className="mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aperiam ex iusto ipsam cupiditate iure.
              </p>
              <div className="text-start mb-4">
                {" "}
                <GetStartedBtn />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <img
                src={homehero}
                className="d-block mx-lg-auto img-fluid"
                alt=""
                loading=""
                width="500rem"
              />
            </div>
          </div>
          {/* <div className="px-3"> */}
          {/* <div className="container pt-3 px-5"> */}
          {/* <div className="row d-flex">
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

            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <img src={homehero} width="500rem" />
            </div>
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

// export const HomePageHero = () => {
//   return (
//     <>
//       <div className="container-fluid HomePageHeroBg d-flex align-items-center">
//         <div className="px-3 container-fluid HomePageHeroBgg d-flex pt-3 pb-4">
//           <div className="row justify-content-center ">
//             <div className="col-lg-6 col-md-6 col-sm-12 mt-5 align-item-center">
//               <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
//               <br></br>
//               <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Molestias aperiam ex iusto ipsam cupiditate iure.
//               </p>
//               <div className="text-start mb-4">
//                 {" "}
//                 <GetStartedBtn />
//               </div>
//             </div>

//             <div className="col-lg-6 col-md-6 col-sm-12 text end">
//               <img src={homehero} width="500rem" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
