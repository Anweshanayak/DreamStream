import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./HR/NavBar";


function Dashboard() {
  return (
    <div className="container-fluid">
      {/* Use the Navbar component */}
      <Navbar />

      {/* Main Layout */}
      <div className="row" style={{ marginTop: "20px" }}>
        {/* Sidebar */}
        <div className="col-md-2 bg-light" style={{ padding: "20px" }}>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link className="nav-link active" to="/employee-management">
                Employee Management
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/attendance">
                Attendance
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/recruitment">
                Recruitment
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link" to="/performance">
                Performance
              </Link>
            </li>
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="col-md-10">
          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card shadow-sm text-center p-3">
                <h6>Total Volunteers</h6>
                <h3>100</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm text-center p-3">
                <h6>Active Volunteers</h6>
                <h3>100</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm text-center p-3">
                <h6>Hours Logged</h6>
                <h3>100</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-sm text-center p-3">
                <h6>Ongoing Projects</h6>
                <h3>3</h3>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card shadow-sm p-3">
                <h6>Key Achievements</h6>
                <div
                  className="bg-light"
                  style={{
                    height: "200px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#888",
                  }}
                >
                  Graph Placeholder
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow-sm p-3">
                <h6>Calendar</h6>
                <div
                  className="bg-light"
                  style={{
                    height: "200px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#888",
                  }}
                >
                  Calendar Placeholder
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Volunteer List</h6>
              <table className="table table-bordered mt-3">
                <thead>
                  <tr>
                    <th>Opportunity Name</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Signed Up</th>
                    <th>Activity Description</th>
                    <th>Date/Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emily Carter</td>
                    <td>Designer</td>
                    <td>Completed</td>
                    <td>15 of 20</td>
                    <td>Prepared Flyers</td>
                    <td>May 19, 4:15 PM</td>
                  </tr>
                  <tr>
                    <td>John Smith</td>
                    <td>Developer</td>
                    <td>In Progress</td>
                    <td>25 of 25</td>
                    <td>Food Bank Drive</td>
                    <td>May 19, 4:15 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;