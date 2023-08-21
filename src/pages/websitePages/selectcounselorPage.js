import { NavSection } from "../../components/Navbar/guestNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import counsellorimage from "../../assets/images/psychologicalassessment/counsellorimage.png";
import { BookNowBtn } from "../../components/Buttons/actionBtn";
import { Button } from "react-bootstrap";
import counsellorList from "../../data/pages/selectCounsellorPage.json";

const CounsellorsDetails = () => {
  return (
    <>
      <NavSection />
      <CounsellorsCard />
    </>
  );
};

const Counsellors = (props) => {
  const { image, name, qualification, role, price, link } = props;
  return (
    <>
      <div className="row justify-content-evenly px-5">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-3 pt-4">
            <div className="">
              <img src={image} className="img-fluid" />
            </div>
            <div className="card-body">
              <h4 className="pt-3">{name}</h4>
              <p className="pt-2">{qualification}</p>
              <p className="pt-2">{role}</p>
              <div className="mt-2">
                <a href={link}>
                  {" "}
                  <Button className="bookNowBtn">Book Now</Button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-4">
        <div className="justify-content-center align-items-center">
          <div className="col-lg-12 justify-content-center">
            {" "}
            <img src={image} alt="" className="" />
            <h3 className="pt-3">{name}</h3>
            <p className="pt-2">{qualification}</p>
            <p className="pt-2">{role}</p>
            <div className="mt-2">
              <a href={link}>
                {" "}
                <Button className="bookNowBtn">Book Now</Button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
const CounsellorsCard = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center pt-4 pb-2">Available Therapist</h3>
        {counsellorList.counsellorList.map((list) => {
          return (
            <>
              <div className="row pb-3" key={list.id}>
                <Counsellors {...list} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CounsellorsDetails;
