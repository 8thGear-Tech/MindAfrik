// external import
import Table from "react-bootstrap/Table";

import { DashboardSideNav } from "../../../components/Navbar/dashBoardNavbar";
import { DashboardNavbar } from "../../../components/Navbar/dashBoardNavbar";

//images
import userone from "../../../assets/images/adminDashboardPage/userone.png";

const AdminDashboardCounsellorsPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-cente">
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
        <div className="d-flex justify-content-between">
          <p className="">Registered Counsellors List</p>
          <p>Sort by</p>
        </div>{" "}
        <Table striped responsive>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Date of birth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Inioluwa Debbie</td>
              <td>07062916027</td>
              <td>ini123@gmail.com</td>
              <td>Female</td>
              <td>10/10/1990</td>
            </tr>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Inioluwa Debbie</td>
              <td>07062916027</td>
              <td>ini123@gmail.com</td>
              <td>Female</td>
              <td>10/10/1990</td>
            </tr>
            <tr>
              <td>
                <img src={userone} />
              </td>
              <td>Inioluwa Debbie</td>
              <td>07062916027</td>
              <td>ini123@gmail.com</td>
              <td>Female</td>
              <td>10/10/1990</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminDashboardCounsellorsPage;
