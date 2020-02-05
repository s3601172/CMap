import React, {Component} from "react";
import TopicService from "../API/topic/TopicService.js";
import Pagination from "react-bootstrap/Pagination";

import "../../bootstrap.css";
import "../../index.css";

class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: [],
      selectedList: [],
      selectedIndex: 0
    };
    
    this.renderTableData = this.renderTableData.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.selectId = this.selectId.bind(this);
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

  selectId(e, id){
    if(e.target.checked === true){
      this.setState({
        selectedList: this.state.selectedList.concat(id),
        selectedIndex: this.state.selectedIndex + 1
      })
    }else if(e.target.checked === false){
      this.setState({
        selectedList: this.state.selectedList.splice(this.state.selectedIndex),
        selectedIndex: this.state.selectedIndex - 1
      })
    }
  }  

  renderTableData() {
    return this.state.topicList.map((topicList, index) => {
      const { bokRef, area, unit, id, topic} = topicList;
      return (
          <tr key={id}>
            <td><input onChange={(e) => this.selectId(e,{id})} type="checkbox"></input></td>
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
      <div className="container centre mt-5">
        <h1>Topic List</h1>
        <div className="input-group-prepend mt-4 mb-4">
          <span className="input-group-text">Search</span>
          <input type="text" className="form-control"></input>
        </div>
      
        <form>
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

          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <button type="submit" className="btn btn-outline-dark">Add Topic(/s)</button>
        </form>
      </div>
      
    );
  }
}

export default TopicList;

