import { NavSection } from "../../components/Navbar/guestNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import counsellorimage from "../../assets/images/psychologicalassessment/counsellorimage.png";
import { BookNowBtn } from "../../components/Buttons/actionBtn";
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
  const { image, name, qualification, role, price } = props;
  return (
    <>
      <div className="counsellorCardBorder w-50 py-4 mx-auto">
        <div className="d-flex justify-content-center justify-content-evenly">
          <div className="col-lg-6">
            {" "}
            <img src={image} alt="" className="" />
          </div>

          <div className="col-lg-4">
            <h3 className="pt-3">{name}</h3>
            <p className="pt-2">{qualification}</p>
            <p className="pt-2">{role}</p>
            <h5 className="pt-3">{price}</h5>
            <BookNowBtn />
          </div>
        </div>
      </div>
    </>
  );
};
const CounsellorsCard = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
        </h3>
        {counsellorList.counsellorList.map((list) => {
          return (
            <>
              <div className="row sectionOneBgColor py-5" key={list.id}>
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
