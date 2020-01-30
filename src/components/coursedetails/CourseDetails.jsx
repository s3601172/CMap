import Table from "../table/Table"
import React ,{Component} from 'react';
import "./CourseDetails.css";

const columns = [
    { Header: "Topic ID", accessor: "id" },
    { Header: "Body of Knowledge Reference", accessor: "bokRef" },
    { Header: "Category", accessor: "category" },
    { Header: "Topic", accessor: "topic" },
    { Header: "Pre-RequireLevel", accessor: "PreLevel" },
    { Header: "Outcome Level", accessor: "OLevel" },
    { Header: "Hours", accessor: "Hours" }
  ];

//replace this with db data
let coursedetail = [
    {
      id: "CMP.cf.1",
      bokRef: "ACM-IEEE-SE2014",
      category: "Computing Essentials",
      topic: "Programming Fundamentals (Control and Data Typing)",
      PreLevel:"Knowledge",
      OLevel:"Application",
      Hours:20
    },
    {
      id: "CMP.ct.1",
      bokRef: "ACM-IEEE-SE2014",
      category: "Construction Technologies",
      topic: "API Design and Use",
      PreLevel:"N/A",
      OLevel:"Comphension",
      Hours:10
    }
    
  ];

class CourseDetails extends Component{
    render(){
        return(
          <div className = "centre">
            <h1>C1 Programming 1</h1>
            <Table columns = {columns} data={coursedetail}/>
            <button type="submit">Add New Topic</button>
          </div>
        )
      }
}  
export default CourseDetails