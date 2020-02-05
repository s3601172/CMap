import React, {Component} from "react";
import TopicService from "../API/topic/TopicService.js";

import "../../bootstrap.css";
import "../../index.css";

class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: [],
      total: null,
      perPage: 10,
      currentPage: 1
    };
    
    this.renderTableData = this.renderTableData.bind(this);
    this.refreshList = this.refreshList.bind(this);
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

  renderTableData() {
    return this.state.topicList.map((topicList, index) => {
      const { bokRef, area, unit, id, topic} = topicList;
      return (
        <tr key={id}>
          <td><input type="checkbox"></input></td>
          <td>{bokRef}</td>
          <td>{area}</td>
          <td>{unit}</td>
          <td>{topic}</td>
          <td>
              <select className="custom-select">
              <option value="remembering">Remembering</option>
              <option value="understanding">Understanding</option>
              <option value="applying">Applying</option>
              <option value="analyzing">Analyzing</option>
              <option value="evaluating">Evaluating</option>
              <option value="creating">Creating</option>
              </select>
          </td>
          <td>
            <select className="custom-select">
            <option value="remembering">Remembering</option>
            <option value="understanding">Understanding</option>
            <option value="applying">Applying</option>
            <option value="analyzing">Analyzing</option>
            <option value="evaluating">Evaluating</option>
            <option value="creating">Creating</option>
            </select>
          </td>
        </tr>
      );
    });
  }

  render() {
    return( 
      <div className="container centre">
        <h1>Topic List</h1>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Search</span>
          <input type="text" className="form-control"></input>
        </div>
      
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th><input type="checkbox"></input></th>
              <th>Book of Knowledge Reference</th>
              <th>Area</th>
              <th>Unit</th>
              <th>Topic Name</th>
              <th>Prerequisite Level</th>
              <th>Outcome Level</th>
            </tr>
          </thead>

          <tbody>
            {this.renderTableData()}             
          </tbody>
        </table>

        <div className="pagination">
          <span className="page-item page-link">&laquo;</span>
          <span className="page-item page-link">1</span>
          <span className="page-item page-link">2</span>
          <span className="page-item page-link">3</span>
          <span className="page-item page-link">4</span>
          <span className="page-item page-link">&raquo;</span>
        </div>
          <button className="btn btn-outline-dark">Add Topic(/s)</button>
      </div>
      
    );
  }
}

export default TopicList;

