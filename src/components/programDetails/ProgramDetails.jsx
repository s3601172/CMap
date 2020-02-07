import React ,{Component} from 'react';
import {Link} from "react-router-dom";

import "./ProgramDetails.css";

class ProgramDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos :
            [
                {ProgramID:'P1',ProgramName:'Bachelor of IT' ,StandardDutation:8, DegreeType:'Undergraduate'}
            ]
        }
    }
    render() {
        return (
            <div className ="center">
                <h1>Program Detail</h1>
                <div className="container">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>ProgramID</th>
                                <th>ProgramName</th>
                                <th>StandardDuration</th>
                                <th>DegreeType</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr>
                                            <td>{todo.ProgramID}</td>
                                            <td>{todo.ProgramName}</td>
                                            <td>{todo.StandardDuration}</td>
                                            <td>{todo.DegreeType}</td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <Link to="/programCourseDetail"><button className="btn btn-outline-primary" >View Courses Alllocated to this Program </button> </Link>
                </div>
            </div>
        )
    }
}

export default ProgramDetails;
