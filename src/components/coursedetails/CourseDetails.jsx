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
      option: {},
      topicDetails: []
    };
    this.refreshList = this.refreshList.bind(this);
    this.getOption = this.getOption.bind(this);
    this.getTopics = this.getTopics.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    CourseService.getCourseDetails().then(response => {
      let resData = response.data;
      var topicCodeList = [];

      for (var i = 0; i < resData.length; i++) {
        topicCodeList.push(resData[i].courseTopicId.topicCode);
      }

      this.getTopics(topicCodeList);
    });
  }

  getTopics(data) {
    let topicDetails = [];

    for (var i = 0; i < data.length; i++) {
      TopicService.getTopicDetails(data[i]).then(response => {
        topicDetails.push(response.data);
        //bad code re-renders multiple times
        this.setState({
          option: this.getOption(topicDetails)
        });
      });
    }
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
            values: ["None Required", "Remembering", "Understanding", "Applying", "Analayzing", "Evaluating", "Creating"]
          },
          {
            id: "outcomeLevel",
            label: "Outcome Level",
            editable: true,
            inputType: "select",
            values: ["Remembering", "Understanding", "Applying", "Analayzing", "Evaluating", "Creating"]
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
          },
          {
            title: "Save Changes",
            icon: <button className="btn btn-outline-primary">Save Changes</button>,
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
          </div>
      </div>  
    );
  }
}

export default CourseDetails;
