// external import
import Table from "react-bootstrap/Table";

import { CounselleeDashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";

//images
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";

const CounselleeNotification = () => {
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
          <p className="mt-5">Notifications</p>
        </div>{" "}
        <Table responsive>
          <tbody>
            <tr>
              <td>
                <MarkChatUnreadOutlinedIcon />
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit
                amet
              </td>
              <td>1m ago</td>
            </tr>
            <tr>
              <td>
                <MarkChatUnreadOutlinedIcon />
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit
                amet
              </td>
              <td>1m ago</td>
            </tr>
            <tr>
              <td>
                <MarkChatUnreadOutlinedIcon />
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit
                amet
              </td>
              <td>1m ago</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CounselleeNotification;
