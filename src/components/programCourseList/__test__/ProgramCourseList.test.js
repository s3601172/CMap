import React from "react";
import ReactDOM from "react-dom";
import ProgramCourseList from "../ProgramCourseList.jsx";

test("Renders Without Crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<ProgramCourseList/>, div);
    ReactDOM.unmountComponentAtNode(div);
})