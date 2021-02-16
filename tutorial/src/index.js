import React from "react";
import ReactDom from "react-dom";
import Nested from "./components/index"
import Booklist from "./pages/booklist"



// stateless functional component
// always return JSX

// **********JSX Rules ***********
// 1. Always return a single element
// 2. Div/ section /article or fragment
// 3. use camelCase for html attribute
// 4. className instead of class
// 5. close every Element
// 6. formatting

function Greeting() {
  return (
    <div>
      <Nested />
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="/">hello world</a>
        </li>
      </ul>
      <Booklist />
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
