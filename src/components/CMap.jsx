import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import Homepage from "./homepage/Homepage";
import ProgramDetails from "./programDetails/ProgramDetails";
import ProgramCourseList from "./programCourseList/ProgramCourseList";
import CourseList from "./courseList/CourseList";
import CourseDetails from "./courseDetails/CourseDetails";
import TopicList from "./topicList/TopicList";
import AddTopic from "./addTopic/AddTopic";

function CMap(){
    return(
        <div>
        <Router>
            <Sidebar/>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/homepage" component={Homepage}/>
                <Route path="/program-details" component={ProgramDetails}/>
                <Route path="/program-course-list" component={ProgramCourseList}/>
                <Route path="/course-list" component={CourseList}/>
                <Route path="/course-details" component={CourseDetails}/>
                <Route path="/topic-list" component={TopicList}/>
                <Route path="/add-topic" component={AddTopic}/>
            </Switch>
        </Router>
      </div>
    );
}

export default CMap;