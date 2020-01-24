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
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Course Type</th>
          <th>To Be Taken</th>
        </tr>

        <tr>
          <td>C1</td>
          <td>Programming 1</td>
          <td>Core</td>
          <td>Semester 1</td>
        </tr>

        <tr>
          <td>C2</td>
          <td>Software Engineering Fundamentals</td>
          <td>Core</td>
          <td>Semester 1</td>
        </tr>

        <tr>
          <td>G2</td>
          <td>Introduction to Graphics Design</td>
          <td>University Elective</td>
          <td>Semester 3</td>
        </tr>
      </table>

      <button type="button"> Add Course</button>
      <button type="button"> Remove Course</button>
    </div>
  );
}

export default ProgramCourseList;
