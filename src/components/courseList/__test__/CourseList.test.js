import React from "react";
import ReactDOM from "react-dom";
import CourseList from "../CourseList.jsx";

test("Renders Without Crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<CourseList/>, div);
    ReactDOM.unmountComponentAtNode(div);
})