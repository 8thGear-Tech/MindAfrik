// external import
import Table from "react-bootstrap/Table";

import { CounsellorDashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";
import CounselorProfileForm from "../../../components/Forms/UserProfileForm";

//images
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import profile from "../../../assets/images/hero/profile.png";

const CounsellorProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-cente">
          <div className="col-lg-3">
            <CounsellorDashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <DashboardNavbar />
              </div>
              <div className="">
                <Profile />
              </div>
              <div className="py-5 ps-5">
                <h4 className="mb-5">Personal Information</h4>
                <CounselorProfileForm />
              </div>
              {/* <div className="col-lg-6 py-5 ps-5">
                <h4 className="text-center">Personal Information</h4>
                <CounseleeProfileForm />
              </div> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <div className="w-75 justify-content-center">
        {" "}
        <div className="card py-4 mt-4 ">
          <div className="d-flex align-items-center justify-content-center justify-content-around">
            <img src={profile} alt="" className="" />
            <p>Hello, Peter Uche</p>
          </div>
        </div>{" "}
        <div className="d-flex justify-content-between">
          <a href="">Change Image</a>
          <a href="">Change Password</a>
        </div>
      </div>
    </>
  );
};

export default CounsellorProfile;
