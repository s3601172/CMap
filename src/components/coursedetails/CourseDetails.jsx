import React, { Component } from "react";

import { Datatable } from "@o2xp/react-datatable";
import TopicService from "../API/topic/TopicService.js";
import CourseService from "../API/course/CourseService.js";

import "../../bootstrap.css";
import "../../index.css";

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {}
    };
    this.refreshList = this.refreshList.bind(this);
    this.getOption = this.getOption.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    TopicService.getCourseTopicList("C1111").then(response => {
      this.setState({
        option: this.getOption(response.data)
      });
      console.log(response.data);
    });
  }

  saveChanges(rows){
    CourseService.getCourseTopicLevel("C1111", rows[0].id).then(response => {
      if ((rows[0].outcomeLevel === response.data[0].outcomeLevel) && (rows[0].preReqLevel === response.data[0].preReqLevel)){
        console.log("No Changes: Data is the same");
      } else{
        CourseService.updateCourseTopicLevel(rows[0]).then(response =>{
          console.log("Updated");
        });
      }
    })
  }

  getOption(data) {
    let options = {
      keyColumn: "id",
      data: {
        columns: [
          {
            id: "bokRef",
            label: "Book of Knowledge Reference",
            colSize: "25px"
          },
          {
            id: "area",
            label: "Knowledge Area",
            colSize: "15px"
          },
          {
            id: "unit",
            label: "Knowledge Unit",
            colSize: "15px"
          },
          {
            id: "id",
            label: "Topic ID",
            colSize: "7px"
          },
          {
            id: "topic",
            label: "Topic Name",
            colSize: "30px"
          },
          {
            id: "preReqLevel",
            label: "Prerequisite Level",
            colSize: "10px",
            editable: true,
            inputType: "select",
            values: [
              "None Required(0)",
              "Remembering(1)",
              "Understanding(2)",
              "Applying(3)",
              "Analyzing(4)",
              "Evaluating(5)",
              "Creating(6)"
            ]
          },
          {
            id: "outcomeLevel",
            label: "Outcome Level",
            colSize:"10px",
            editable: true,
            inputType: "select",
            values: [
              "Remembering(1)",
              "Understanding(2)",
              "Applying(3)",
              "Analyzing(4)",
              "Evaluating(5)",
              "Creating(6)"
            ]
          }
        ],
        rows: data
      },
      dimensions:{
        datatable:{
          width: "100%",
          height: "950px"
        }
      },
      features: {
        canSelectRow: true,
        canSearch: true,
        canEdit: true,
        selectionIcons: [
          {
            title: "Save Changes",
            icon:(<button className="btn btn-outline-primary">Save Changes</button>),
            onClick: rows => this.saveChanges(rows)
          },
          {
            title: "Remove Topics",
            icon: (
              <button className="btn btn-outline-danger">Remove Topic</button>
            ),
            onClick: rows => console.log(rows)
          }
        ]
      }
    };

    return options;
  }

  render() {
    return (
      <div>
        <div className="container centre bm-4">
          <h1>C1111 Dummy Course</h1>
        </div>
        <Datatable options={this.state.option} />
        <div className="container centre mt-4">
          <button className="btn btn-outline-primary">Add New Topic</button>
        </div>
      </div>
    );
  }
}

export default CourseDetails;
