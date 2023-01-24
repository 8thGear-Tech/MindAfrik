// external import
import Table from "react-bootstrap/Table";

//internal import
import { DashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";

import { CounselorsDashboardCard } from "../../../components/allCards/dashBoardcards";

import { ViewProfileBtn } from "../../../components/Buttons/actionBtn";

//images
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import userone from "../../../assets/images/adminDashboardPage/userone.png";

const CounsellorDashboardHomePage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <DashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <DashboardNavbar />
              </div>
              <div className="">
                {" "}
                <CounselorsDashboardCard />
              </div>
              <div className="">
                <RegisteredUsersList />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const RegisteredUsersList = () => {
  return (
    <>
      {" "}
      <div className="">
        <div className="d-flex">
          <p className="mt-5">Schedule List</p>
        </div>{" "}
        <Table striped responsive>
          <tbody>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Debbie Luchinar amet</td>
              <td>2-september-2022</td>
              <td>
                <ViewProfileBtn />
              </td>
              <td>
                <AccountCircleOutlinedIcon />
              </td>
            </tr>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Debbie Luchinar amet</td>
              <td>2-september-2022</td>
              <td>
                {" "}
                <ViewProfileBtn />
              </td>
              <td>
                <AccountCircleOutlinedIcon />
              </td>
            </tr>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Debbie Luchinar amet</td>
              <td>2-september-2022</td>
              <td>
                {" "}
                <ViewProfileBtn />
              </td>
              <td>
                <AccountCircleOutlinedIcon />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CounsellorDashboardHomePage;
