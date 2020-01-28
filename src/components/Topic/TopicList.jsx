import React, { Component } from "react";

import "./Topic.css";

import Sidebar from "../sidebar/Sidebar";
//replace this with db data
let topicList = [
  {
    id: "CMP.cf.1",
    bokRef: "MP.cf",
    category: "Computing Essentials",
    topic: "Programming Fundamentals (Control and Data Typing)"
  },
  {
    id: "CMP.ct.1",
    bokRef: "CMP.ct",
    category: "Construction Technologies",
    topic: "API Design and Use"
  }
];

class TopicList extends Component {
  render() {
    return (
      <div className="centre">
        <Sidebar />
        <h1>Topic List</h1>
        <input type="text" name="search"></input>
        <button type="submit">Search</button>
        <table>
          <thead>
            <tr>
              <th>Topic ID</th>
              <th>Body of Knowledge Reference</th>
              <th>Category</th>
              <th>Topic</th>
            </tr>
          </thead>

          <tbody>
            {topicList.map(topics => (
              <tr>
                <td>{topics.id}</td>
                <td>{topics.bokRef}</td>
                <td>{topics.category}</td>
                <td>{topics.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TopicList;
