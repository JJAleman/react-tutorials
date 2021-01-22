import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return;
  <div>
    <h1>This is a title!</h1>
    <h4>Hello this is John and this is my first component</h4>
  </div>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
