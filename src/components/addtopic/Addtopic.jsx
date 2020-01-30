import React ,{Component} from 'react';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import "./Addtopic.css"
import Sidebar from "../sidebar/Sidebar";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class add extends Component{
    constructor(props){
        super(props)
        this.state = {
            title :
            [
                {BOKRr:'Test',Category:'Computing Essentials' ,TopicID:'1', Topic:'Test',PreReq:'',Outcome:'',Hours:''}
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
                                            <td><Select displayEmpty={true}>
                                            <MenuItem>{title.PreReq}</MenuItem>
                                            <MenuItem>{'Test'}</MenuItem>
                                            <MenuItem>{'Test'}</MenuItem>
                                            <MenuItem>{'Testt'}</MenuItem>
                                            </Select></td>
                                           <td> <Select displayEmpty={true}>
                                            <td><MenuItem>{title.Outcome}</MenuItem></td>
                                            <MenuItem>{'Testt'}</MenuItem>
                                            <MenuItem>{'Testt'}</MenuItem>
                                            <MenuItem>{'Testt'}</MenuItem>
                                            </Select></td>
                                            <td><Select displayEmpty={true}>
                                            <MenuItem>{title.Hours}</MenuItem>
                                            <MenuItem>{'10'}</MenuItem>
                                            <MenuItem>{'20'}</MenuItem>
                                            <MenuItem>{'30'}</MenuItem>
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

export default add;
