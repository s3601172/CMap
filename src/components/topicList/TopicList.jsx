import React, { Component } from "react";
import { Datatable } from "@o2xp/react-datatable";
import TopicService from "../API/topic/TopicService.js";

import "../../bootstrap.css";
import "../../index.css";

class TopicList extends Component {
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
    TopicService.getTopicList().then(response => {
      let resData = response.data;
      this.setState({
        option: this.getOption(resData)
      });
      console.log(resData);
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
            colSize: "80px"
          },
          {
            id: "area",
            label: "Knowledge Area",
            colSize: "150px"
          },
          {
            id: "unit",
            label: "Knowledge Unit",
            colSize: "50px"
          },
          {
            id: "id",
            label: "Topic ID",
            colSize: "50px"
          },
          {
            id: "topic",
            label: "Topic Name",
            colSize: "50px"
          },
          {
            id: "outcomeLevel",
            label: "Outcome Level",
            colSize: "50px"
          },
          {
            id: "preReqLevel",
            label: "Prerequisite Level",
            colSize: "50px"
          }
        ],
        rows: data
      },
      features:{
        canSelectRow:true
      }
    };

    return options;
  }

  render() {
    return (
      <div className="container">
        <div className="container centre bm-4">
          <h1>Topic List</h1>
        </div>
        <Datatable options={this.state.option} />
      </div>
    );
  }
}

export default TopicList;
