// external import
import Table from "react-bootstrap/Table";

import { CounsellorDashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";

//images
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import { Button } from "react-bootstrap";

const CounsellorDashboardNotificationPage = () => {
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
          <div>
            <h4 className="mt-5">
              <b>Notifications</b>
            </h4>
          </div>
          {/* <div className="">
            <Button style={{ backgroundColor: "#08BA47" }}>2 New</Button>
          </div> */}
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

export default CounsellorDashboardNotificationPage;
