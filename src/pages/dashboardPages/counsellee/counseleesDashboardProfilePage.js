// external import
import Table from "react-bootstrap/Table";

import { CounselleeDashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";
import { CounseleeProfileForm } from "../../../components/Forms/UserProfileForm";

//images
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import profile from "../../../assets/images/hero/profile.png";

const CounselleeProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-cente">
          <div className="col-lg-3">
            <CounselleeDashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <DashboardNavbar />
              </div>
              <div className="d-flex justify-content-center">
                <Profile />
              </div>
              <div className="col-lg-6 py-5 ps-5">
                <h4 className="text-center">Personal Information</h4>
                <CounseleeProfileForm />
              </div>
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
      <div className="w-75">
        {" "}
        <div className="card py-4 mt-4">
          <div className="d-flex align-items-center justify-content-center justify-content-evenly">
            <img src={profile} alt="" className="" />
            <h4>Hello, Peter Uche</h4>
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

export default CounselleeProfile;
