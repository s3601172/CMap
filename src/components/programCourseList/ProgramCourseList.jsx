import React, { Component } from "react";
import { Datatable } from "@o2xp/react-datatable";
import CourseService from "../API/programcourse/ProgramCourseService.js"
import PublishIcon from "@material-ui/icons/Publish";


import "../../bootstrap.css";
import "../../index.css";

class ProgramCourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {}
    };
    this.refreshList = this.refreshList.bind(this);
    this.getOption = this.getOption.bind(this);
    this.postCourse = this.postCourse.bind(this);
    this.postRequest = this.postRequest.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    ProgramCourseService.getProgramCourseList().then(response => {
      let resData = response.data;
      this.setState({
        option: this.getOption(resData)
      });
    });
  }

  postCourse(rowData) {
    let selectedLength = rowData.length;
    let data = rowData;
    
    if (selectedLength > 1){
      var i;
      for(i = 0; i < selectedLength; i++){
        this.postRequest(data[i]);
      }
    }else{
      console.log(data);
      this.postRequest(data[0]);
    }

    // this.props.history.push("/course-details");
  }

  postRequest(data){
    CourseService.addCourse(data)
    .then(response => {
      console.log(response);
      console.log(response.data);
    }
    );
  }

  getOption(data) {
    let options = {
      keyColumn: "courseCode",
      data: {
        columns: [
          {
            id: "courseCode",
            label: "Course Code",
            colSize: "50px"
          },
          {
            id: "title",
            label: "Course Name",
            colSize: "150px"
          },
          {
            id: "semester",
            label: "Semester",
            colSize: "150px"
          }
        ],
        rows: data
      },
      features: {
        canSelectRow: true,
        canSearch: true,
        selectionIcons: [
          {
            title: "Add Course(/s)",
            icon: <PublishIcon color="primary" />,
            onClick: rows => this.postCourse(rows)
            
          }
        ]
      },
      dimensions:{
        row:{
          height:"120px"
        },
        datatable:{
          height: "1200px"
        }
      }
    };

    return options;
  }

  render() {
    return (
      <div className="container">
        <div className="container centre bm-4">
          <h1>Program Course List</h1>
        </div>
        <Datatable options={this.state.option}/>
      </div>
    );
  }
}

export default ProgramCourseList;