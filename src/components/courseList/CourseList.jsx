import React from "react";
import "./CourseList.css";
import { CourseTypeMenu, ToBeTakenMenu, AllocateToMenu} from "./DropdownMenu";
import Sidebar from "../sidebar/Sidebar";

function CourseList() {
  return (
    <div className="center">
      <Sidebar />
      <h1>P1 Bachelor of IT</h1>
      <table>
        <tr>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Course Type</th>
          <th>To Be Taken</th>
          <th>Allocate To</th>
          <th>Select</th>
        </tr>

        <tr>
          <td>C56</td>
          <td>Advanced Programming Techniques</td>
          <td><CourseTypeMenu /></td>
          <td><ToBeTakenMenu /></td>
          <td><AllocateToMenu /></td>
          <td><input type="checkbox"></input></td>
        </tr>

        <tr>
          <td>C23</td>
          <td>Programming Internet of Things</td>
          <td><CourseTypeMenu /></td>
          <td><ToBeTakenMenu /></td>
          <td><AllocateToMenu /></td>
          <td><input type="checkbox"></input></td>
        </tr>

        <tr>
          <td>C297</td>
          <td>Database Concepts</td>
          <td><CourseTypeMenu /></td>
          <td><ToBeTakenMenu /></td>
          <td><AllocateToMenu /></td>
          <td><input type="checkbox"></input></td>
        </tr>
      </table>

      <button type="button"> Allocate Course</button>
    </div>
  );
}

export default CourseList;
