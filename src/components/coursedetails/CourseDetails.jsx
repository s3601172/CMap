import React, { Component } from "react";

import { Datatable } from "@o2xp/react-datatable";
import TopicService from "../API/topic/TopicService.js";

import "../../bootstrap.css";
import "../../index.css";

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {},
    };
    this.refreshList = this.refreshList.bind(this);
    this.getOption = this.getOption.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    TopicService.getCourseTopicList("C1111").then(response =>{
      this.setState({
        option: this.getOption(response.data)
      })
    });
  }

  getOption(data) {
    let options = {
      keyColumn: "id",
      data: {
        columns: [
          {
            id: "bokRef",
            label: "Book of Knowledge Reference",
            colSize: "100px"
          },
          {
            id: "area",
            label: "Knowledge Area",
            colSize: "150px"
          },
          {
            id: "unit",
            label: "Knowledge Unit",
            colSize: "150px"
          },
          {
            id: "id",
            label: "Topic ID",
            colSize: "50px"
          },
          {
            id: "topic",
            label: "Topic Name",
            colSize: "20px"
          },
          {
            id: "preReqLevel",
            label: "Prerequisite Level",
            editable: true,
            inputType: "select",
            values: ["None Required(0)", "Remembering(1)", "Understanding(2)", "Applying(3)", "Analyzing(4)", "Evaluating(5)", "Creating(6)"]
          },
          {
            id: "outcomeLevel",
            label: "Outcome Level",
            editable: true,
            inputType: "select",
            values: ["Remembering(1)", "Understanding(2)", "Applying(3)", "Analyzing(4)", "Evaluating(5)", "Creating(6)"]
          }
        ],
        rows: data
      },
      features: {
        canSelectRow: true,
        canSearch: true,
        canEdit: true,
        selectionIcons: [
          {
            title: "Remove Topics",
            icon: <button className="btn btn-outline-danger">Remove Topic</button>,
            onClick: rows => console.log(rows)
          }
        ]
      }
    };

    return options;
  }

  render() {
    return (
      <div className="container">
        <div className="container centre bm-4">
          <h1>C1111 Dummy Course</h1>
          <Datatable options={this.state.option} />
          <button className="btn btn-outline-primary">Add New Topic</button>
          <button className="btn btn-outline-primary">Save Changes</button>
          </div>
      </div>  
    );
  }
}

export default CourseDetails;
