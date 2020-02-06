import React ,{Component} from 'react';
// import Table from "../table/Table"
import "./addTopic.css"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "../../bootstrap.css";


class AddTopic extends Component{
    constructor(props){
        super(props)
        this.state = {
            title :
            [
                {BOKRr:'ACM-IEEE-SE2014',Category:'Computing Essentials' ,TopicID:'1', Topic:'Programming Fundamentals (Control and Data Typing)',PreReq:'',Outcome:''}
            ]
        }
    }

    render() {
        return (
            <div className ="center">
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
                                            <td><Select displayEmpty={true}>
                                            <MenuItem>{title.PreReq}</MenuItem>
                                            <MenuItem>{"Knowledge"}</MenuItem>
                                            <MenuItem>{"Comprehension"}</MenuItem>
                                            <MenuItem>{"Application"}</MenuItem>
                                            </Select></td>
                                           <td> <Select displayEmpty={true}>
                                            <td><MenuItem>{title.Outcome}</MenuItem></td>
                                            <MenuItem>{"Knowledge"}</MenuItem>
                                            <MenuItem>{"Comprehension"}</MenuItem>
                                            <MenuItem>{"Application"}</MenuItem>
                                            </Select></td>
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

export default AddTopic;
