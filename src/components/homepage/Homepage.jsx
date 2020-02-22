import React, { Component } from "react";
import Card from "../dashboard/Card";

import "../../bootstrap.css";
import "../../index.css";

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      userType: "PMCC"
    };
  }

  render() {
    if (this.state.userType === "PM") {
      return (
        <div className="center">
          <Card 
            cardHeader="Assigned Programs"
            cardTitle="Bachelor of Computer Science(BP094GEN8)"
            cardDesc="Undergraduate Computer Science Program"
            cardBtn="Program Details"
          />
        </div>
      );
    } else if (this.state.userType === "CC") {
      return (
        <div className="center">
          <Card 
            cardHeader="Assigned Courses"
            cardTitle="Dummy Course (C1111)"
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            cardBtn="Course Details"
          />
        </div>
      );
    } else if (this.state.userType === "PMCC") {
      return (
        <div className="center">
          <Card 
            cardHeader="Assigned Programs"
            cardTitle="Bachelor of Computer Science(BP094GEN8)"
            cardDesc="Undergraduate Computer Science Program"
            url ="/program-details"
            cardBtn="Program Details"
          />

          <Card 
            cardHeader="Assigned Courses"
            cardTitle="Dummy Course (C1111)"
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            url="/course-details"
            cardBtn="Course Details"
          />
        </div>
      );
    }
  }
}

export default Homepage;
