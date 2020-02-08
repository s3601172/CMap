import React, { Component } from "react";
import { Datatable } from "@o2xp/react-datatable";
import TopicService from "../API/topic/TopicService.js"
import PublishIcon from "@material-ui/icons/Publish";
import axios from "axios";

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
    this.postTopic = this.postTopic.bind(this);
    this.postRequest = this.postRequest.bind(this);
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
    });
  }

  postTopic(rowData) {
    let selectedLength = rowData.length;
    let data = rowData;

    if (selectedLength > 1){
      var i;
      for(i = 0; i < selectedLength; i++){
        this.postRequest(data[i]);
      }
    }else{
      this.postRequest(data[0]);
    }

    // this.props.history.push("/course-details");
  }

  postRequest(data){
    axios
    .post("http://localhost:8080/add-course-topic", data)
    .then(response => {
      console.log(response);
      console.log(response.data);
    }
    );
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
            title: "Add Topic(/s)",
            icon: <PublishIcon color="primary" />,
            onClick: rows => this.postTopic(rows)
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
          <h1>Topic List</h1>
        </div>
        <Datatable options={this.state.option}/>
      </div>
    );
  }
}

export default TopicList;
