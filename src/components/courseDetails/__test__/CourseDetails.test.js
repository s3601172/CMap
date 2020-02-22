import React from "react";
import ReactDOM from "react-dom";
import CourseDetails from "../CourseDetails.jsx";

test("Renders Without Crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<CourseDetails/>, div);
    ReactDOM.unmountComponentAtNode(div);
})