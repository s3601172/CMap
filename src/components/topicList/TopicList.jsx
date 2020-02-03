import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopicService from "../API/topic/TopicService.js";

import "../../bootstrap.css";
import "../../index.css";

import Sidebar from "../sidebar/Sidebar";
import SearchableTable from "../searchableTable/SearchableTable";

const columns = [
  { Header: "Body of Knowledge Reference", accessor: "bokRef" },
  { Header: "Area", accessor: "area" },
  { Header: "Unit", accessor: "unit" },
  { Header: "Topic ID", accessor: "id" },
  { Header: "Topic", accessor: "topic" }
];

class TopicList extends Component {
  constructor(props){
      super(props);
      this.state = {
        topicList: []
      };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    TopicService.getTopicList().then(response=>{
      this.setState({
        topicList: response.data
      })
    })
  }

  render() {
    return (
      <div className="centre">
        <Sidebar />
        <h1>Topic List</h1>
        <SearchableTable columns={columns} data={this.state.topicList} />
        <Link to="add-topic">
          <button className="btn btn-outline-dark" type="submit">
            Add Topic
          </button>
        </Link>
      </div>
    );
  }
}

export default TopicList;
