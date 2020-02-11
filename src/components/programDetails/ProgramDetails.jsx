import React, { Component } from "react";
import { Datatable } from "@o2xp/react-datatable";

import ProgramService from "../API/program/ProgramService.js";
import "./ProgramDetails.css";

class ProgramDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {}
    };
    this.refreshList = this.refreshList.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    ProgramService.getProgramList().then(response => {
      let resData = response.data;
      this.setState({
        option: this.getOption(resData)
      });
    });
  }

  getOption(data) {
    let options = {
      keyColumn: "programID.code",
      data: {
        columns: [
          {
            id: "programID.code",
            label: "Program Code",
            colSize: "100px"
          },
          {
            id: "name",
            label: "Program Name",
            colSize: "150px"
          },
          {
            id: "target",
            label: "Program Target",
            colSize: "150px"
          }
        ],
        rows: data
      }
    };

    return options;
  }

  render() {
    return (
      <div className="container centre">
        <div className="container centre bm-4">
          <h1>Program Details</h1>
        </div>
        <Datatable options={this.state.option} />
        <button className="btn btn-outline-dark">View Courses Allocated to this Program</button>
      </div>
    );
  }
}

export default ProgramDetails;
