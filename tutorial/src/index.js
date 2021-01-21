import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return <h4>Hello this is John and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
