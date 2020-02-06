import React, {Component} from "react";
import SearchableTable from "../searchableTable/SearchableTable";
import CourseService from "../API/course/CourseService.js";

import "../../bootstrap.css";

const columns = [
    { Header: "Course Code", accessor: "courseCode" },
    { Header: "Course Name", accessor: "courseName"},
    { Header: "To be taken", accessor: "tobetaken" }
  ];
  
  class CourseList extends Component {
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
  
    addCourseBtn(){
      this.props.history.push("/add-course");
    }
  
    render() {
      return (
        <div className="centre">
          <h1>Course List</h1>
          <SearchableTable columns={columns} data={this.state.courseList} />
          <button className="btn btn-outline-dark" type="submit">
            Add Course
          </button>
        </div>
      );
    }
  }

  export default CourseList;