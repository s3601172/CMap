import React ,{Component} from 'react';
import {Link} from "react-router-dom";
import SearchableTable from "../searchableTable/SearchableTable";
import CourseService from "../API/course/CourseService.js";
import "../../bootstrap.css";

const columns = [
    { Header: "Body of Knowledge Reference", accessor: "bokRef" },
    { Header: "Area", accessor: "area" },
    { Header: "Unit", accessor: "unit" },
    { Header: "Topic ID", accessor: "topicid" },
    { Header: "Topic", accessor: "topic" },
    { Header: "Pre-Require Level", accessor: "PreLevel" },
    { Header: "Outcome Level", accessor: "OLevel" },
    { Header: "Remove", accessor: "Remove"}
  ];

  class CourseDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
          courseList: []
        };
    }
  
    componentDidMount() {
      this.refreshList();
    }
  
    refreshList() {
      CourseService.getTopicList().then(response=>{
        this.setState({
          courseList: response.data
        })
      })
    }
  
    render() {
      return (
        <div className="centre">
          <h1>Course Details</h1>
          <SearchableTable columns={columns} data={this.state.courseList} />
          <Link to ="/topic-list"><button className="btn btn-outline-dark" type="submit">Add New Topic
          </button>
          </Link>
        </div>
      );
    }
  }
export default CourseDetails