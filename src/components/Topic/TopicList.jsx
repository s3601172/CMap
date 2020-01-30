import React, { Component } from "react";

import "./Topic.css";

import Sidebar from "../sidebar/Sidebar";
import SearchableTable from "../Table/SearchableTable";

const columns = [
  { Header: "Topic ID", accessor: "id" },
  { Header: "Body of Knowledge Reference", accessor: "bokRef" },
  { Header: "Category", accessor: "category" },
  { Header: "Topic", accessor: "topic" }
];

//replace this with db data
let topicList = [
  {
    id: "CMP.cf.1",
    bokRef: "ACM-IEEE-SE2014",
    category: "Computing Essentials",
    topic: "Programming Fundamentals (Control and Data Typing)"
  },
  {
    id: "CMP.cf.2",
    bokRef: "ACM-IEEE-SE2014",
    category: "Computing Essentials",
    topic: "Algorithims, Data Structures and Complexity"
  },
  {
    id: "CMP.cf.3",
    bokRef: "ACM-IEEE-SE2014",
    category: "Computing Essentials",
    topic: "Problem Solving Techniques"
  },
  {
    id: "CMP.ct.1",
    bokRef: "ACM-IEEE-SE2014",
    category: "Construction Technologies",
    topic: "API Design and Use"
  },
  {
    id: "CMP.ct.2",
    bokRef: "ACM-IEEE-SE2014",
    category: "Construction Technologies",
    topic: "Code Reuse and Libraries"
  },
  {
    id: "CMP.ct.3",
    bokRef: "ACM-IEEE-SE2014",
    category: "Construction Technologies",
    topic: "Object-Oriented Runtime Issues (e.g., polymorphism and dynamic...)"
  },
  {
    id: "FND.mf.1",
    bokRef: "ACM-IEEE-SE2014",
    category: "Mathematical and Engineering Fundamentals",
    topic: "Functions, Relations and Sets"
  },
  {
    id: "FND.mf.2",
    bokRef: "ACM-IEEE-SE2014",
    category: "Mathematical and Engineering Fundamentals",
    topic: "Basic Logic (Propositional and Predicate)"
  },
  {
    id: "FND.mf.3",
    bokRef: "ACM-IEEE-SE2014",
    category: "Mathematical and Engineering Fundamentals",
    topic: "Proof Techniques (Direct, Contradiction, and Inductive)"
  },
  {
    id: "PRF.psy.1",
    bokRef: "ACM-IEEE-SE2014",
    category: "Professional Practice",
    topic: "Dynamics of Working in Teams and Groups"
  },
  {
    id: "PRF.psy.2",
    bokRef: "ACM-IEEE-SE2014",
    category: "Professional Practice",
    topic: "Individual Cognition (e.g., limits)"
  },
  {
    id: "PRF.psy.3",
    bokRef: "ACM-IEEE-SE2014",
    category: "Professional Practice",
    topic: "Cognitive Problem Complexity"
  }
];

class TopicList extends Component {
  render(){
    return(
      <div className = "centre">
        <Sidebar />
        <h1>Topic List</h1>
        <SearchableTable columns = {columns} data={topicList}/>
        <button type="submit">Add Topic</button>
      </div>
    )
  }
}



export default TopicList;
