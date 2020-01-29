import React ,{Component} from './node_modules/react';
import {BrowserRouter as Router, Route,Switch,Link} from './node_modules/react-router-dom'
import "./Addtopic.css"
import Sidebar from "../sidebar/Sidebar"

class addT extends Component{
    render() {
        return(
            <div className="addTopic">
            </div>
        )
    }
}

class add extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos :
            [
                {BOKRr:'TEst',Category:'Computing Essentials' ,TopicID:'1', Topic:'Test',PreReq:'Test',Outcome:'test',Hour:5}
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
                                <th>Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr>
                                            <td>{todo.BOKRr}</td>
                                            <td>{todo.Category}</td>
                                            <td>{todo.TopicID}</td>
                                            <td>{todo.PreReq}</td>
                                            <td>{todo.Outcome}</td>
                                            <td>{todo.Hours}</td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <Link to="/programCourseDetail"><button className="btn btn-outline-primary" >Add Topic</button> </Link>
                </div>
            </div>
        )
    }
}

class addTp extends Component{
    render() {
        return (
            <div>TopicList</div>
        )
    }
}

export default addTopic;
