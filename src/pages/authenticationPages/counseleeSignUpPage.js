import { Link } from "react-router-dom";
import { SignUpAsCounselleeForm } from "../../components/Forms/AuthenticationForms";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

//images
import mindafrikfulllogo from "../../assets/images/logo/mindafrik-full-logo-250.png";

const CounselleeSignUp = () => {
  return (
    <>
      <Container fluid className="">
        <Row
          className="d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionOneBgColor text-center align-items-center py-5 d-none d-lg-block d-md-block d-sm-none d-xs-none">
            <div className="py-5">
              {" "}
              {/* <h3 className="">Welcome to</h3> */}
              <img variant="top" src={mindafrikfulllogo} className="py-5" />
            </div>
          </Col>
          <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionTwooBgColor p-5">
            <Link to="/" className="text-black">
              <KeyboardBackspaceOutlinedIcon />
            </Link>
            <h4 className="text-center pb-3">Create An Account</h4>
            <SignUpAsCounselleeForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CounselleeSignUp;
