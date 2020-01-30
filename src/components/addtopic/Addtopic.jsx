import React ,{Component} from 'react';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import "./Addtopic.css"
import Sidebar from "../sidebar/Sidebar";

class add extends Component{
    constructor(props){
        super(props)
        this.state = {
            title :
            [
                {BOKRr:'Test',Category:'Computing Essentials' ,TopicID:'1', Topic:'Test',PreReq:'Test',Outcome:'test',Hours:'5'}
            ]
        }
    }
    render() {
        return (
            <div className ="center">
            <Sidebar/>
                <h1>Add Topic</h1>
                <div className="container">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Body of Knowledge Reference</th>
                                <th>Category</th>
                                <th>Topic ID</th>
                                <th>Topic</th>
                                <th>Pre-Req Level</th>
                                <th>Outcome Level</th>
                                <th>Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.title.map(
                                    title =>
                                        <tr>
                                            <td>{title.BOKRr}</td>
                                            <td>{title.Category}</td>
                                            <td>{title.TopicID}</td>
                                            <td>{title.Topic}</td>
                                            <td>{title.PreReq}</td>
                                            <td>{title.Outcome}</td>
                                            <td>{title.Hours}</td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <button className="btn btn-outline-primary" >Add Topic</button>
                </div>
            </div>
        )
    }
}

export default add;
