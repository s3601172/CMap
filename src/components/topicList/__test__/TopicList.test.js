import React from "react";
import ReactDOM from "react-dom";
import TopicList from "../TopicList.jsx";

test("Renders Without Crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<TopicList/>, div);
    ReactDOM.unmountComponentAtNode(div);
})