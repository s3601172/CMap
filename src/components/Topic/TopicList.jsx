import React, { Component } from "react";

import "./Topic.css";

import Sidebar from "../sidebar/Sidebar";

class TopicList extends Component{
    render(){
        return(
            <div className = "centre">
                <Sidebar/>
                <h1>Topic List</h1>
                <input type="text" name="search"></input>
                <button type="submit">Search</button>
                <table>
                    <tr>
                        <th>Topic ID</th>
                        <th>Body of Knowledge Reference</th>
                        <th>Category</th>
                        <th>Topic</th>
                    </tr>

                    <tr>
                        <td>CMP.cf.1</td>
                        <td>MP.cf</td>
                        <td>Computing Essentials</td>
                        <td>Programming Fundamentals (Control and Data Typing)</td>
                    </tr>

                    <tr>
                        <td>CMP.ct.1</td>
                        <td>CMP.ct</td>
                        <td>Construction Technologies</td>
                        <td>API Design and Use</td>
                    </tr>
                </table>
            </div>
            
            
        )
    }
}
export default TopicList;
