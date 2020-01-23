import React, { Component } from "react";
import "./HomepageStyle.css";
import Sidebar from "../sidebar/Sidebar";

class Homepage extends Component {
  render(userType) {
    userType = "PMCC";

    if (userType === "PM") {
      return (
        <div className = "center">
          <Sidebar />
          <h1>Your Programs</h1>

          <table>
            <tr>
              <th>P1 Bachelor of Information Technology</th>
            </tr>

            <tr>
              <td>
                Undergraduate Information Technology Program
              </td>
            </tr>
          </table>
        </div>
      );
    } else if (userType === "CC") {
      return (
        <div className = "center">
          <Sidebar />
          <h1>Your Courses</h1>

          <table>
            <tr>
              <th>C1 Programming 1</th>
            </tr>

            <tr>
              <td>Introductory Java Course</td>
            </tr>
          </table>
        </div>
      );
    } else if (userType === "PMCC") {
      return (
        <div className = "center">
          <Sidebar />
          <h1>Your Programs</h1>

          <table>
            <tr>
              <th>P1 Bachelor of Information Technology</th>
            </tr>

            <tr>
              <td>Undergraduate Information Technology Program</td>
            </tr>
          </table>

          <h1>Your Courses</h1>

          <table>
            <tr>
              <th>C1 Programming 1</th>
            </tr>

            <tr>
              <td>Introductory Java Course</td>
            </tr>
          </table>
        </div>
      );
    }
  }
}

export default Homepage;
