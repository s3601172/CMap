import React, { Component } from "react";

import Sidebar from "../sidebar/Sidebar";
import "./Topic.css";

class AddTopic extends Component {
  render() {
    return (
      <div className="centre">
        <Sidebar />
        <h1>Add Topic</h1>
        <table>
          <thead>
            <tr>
              <th>Topic ID</th>
              <th>Body of Knowledge Reference</th>
              <th>Category</th>
              <th>Topic</th>
              <th>Pre-Req Level</th>
              <th>Outcome Level</th>
              <th>Hours</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>CMP.cf.1</td>
              <td>MP.cf</td>
              <td>Computing Essentials</td>
              <td>Programming Fundamentals (Control and Data Typing...)</td>
              <td>
                <select>
                  <option value="knowledge">Knowledge</option>
                  <option value="comprehension">Comprehension</option>
                  <option value="application">Application</option>
                </select>
              </td>
              <td>
                <select>
                  <option value="knowledge">Knowledge</option>
                  <option value="comprehension">Comprehension</option>
                  <option value="application">Application</option>
                </select>
              </td>
              <td>
                <select>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Add Topic</button>
      </div>
    );
  }
}

export default AddTopic;
