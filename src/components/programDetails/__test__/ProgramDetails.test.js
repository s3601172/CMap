import React from "react";
import ReactDOM from "react-dom";
import ProgramDetails from "../ProgramDetails.jsx";

test("Renders Without Crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<ProgramDetails/>, div);
    ReactDOM.unmountComponentAtNode(div);
})