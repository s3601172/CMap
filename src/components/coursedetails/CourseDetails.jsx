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
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    CourseService.getCourseDetails().then(response => {
      return TopicService.getTopicDetails(
        response.data[0].courseTopicId.topicCode
      ).then(response => {
        this.setState({
          option: response.data
        })
      });
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
            colSize: "400px"
          },
          {
            id: "preReqLevel",
            label: "Prerequisite Level"
          },
          {
            id: "outcomeLevel",
            label: "Outcome Level"
          }
        ],
        rows: data
      },
      features: {
        canSelectRow: true,
        canSearch: true,
        selectionIcons: [
          {
            title: "Add Topic(/s)",
            icon: (
              <button className="btn btn-outline-primary">Add Topic(/s)</button>
            ),
            onClick: rows => this.postTopic(rows)
          }
        ]
      },
      dimensions: {
        row: {
          height: "120px"
        },
        datatable: {
          height: "1200px",
          width: "1200px"
        }
      }
    };

    return options;
  }

  render() {
    return (
      <div className="container">
        <div className="container centre bm-4">
          <h1>C1111 Dummy Course</h1>
        </div>
        <Datatable options={this.state.option} />
      </div>
    );
  }
}

export default CourseDetails;
