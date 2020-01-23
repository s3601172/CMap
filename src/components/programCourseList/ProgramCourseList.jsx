import React from "react";
import "./ProgramCourseList.css";
import Sidebar from "../sidebar/Sidebar";

function ProgramCourseList() {
  return (
    <div className = "center">
      <Sidebar />
      <h1>P1 Bachelor of IT</h1>
      <table>
        <tr>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Course Type</th>
          <th>To Be Taken</th>
          <th>Select</th>
        </tr>

        <tr>
          <td>C1</td>
          <td>Programming 1</td>
          <td>Core</td>
          <td>Semester 1</td>
          <td>
            <input type="checkbox"></input>
          </td>
        </tr>

        <tr>
          <td>C2</td>
          <td>Software Engineering Fundamentals</td>
          <td>Core</td>
          <td>Semester 1</td>
          <td>
            <input type="checkbox"></input>
          </td>
        </tr>

        <tr>
          <td>G2</td>
          <td>Introduction to Graphics Design</td>
          <td>University Elective</td>
          <td>Semester 3</td>
          <td>
            <input type="checkbox"></input>
          </td>
        </tr>
      </table>

      <button type="button"> Deallocate Course</button>
    </div>
  );
}

export default ProgramCourseList;
