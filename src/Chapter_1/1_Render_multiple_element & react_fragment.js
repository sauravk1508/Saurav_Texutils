import React from "react";

import ReactDOM from "react-dom";
// render multiple element in the ReactDOM.render():
//method 1: we can use the div tag for writing the multiple element in ReactDom.render()
ReactDOM.render(
  <div>
    <h1> Saurav1</h1>
    <p>lorem</p>
    <h2>react Js</h2>
  </div>,
  document.getElementById("root")
);
console.log("saurav");
//method_2: we can simple use the [] instead of <div></div> tag we can write the all the elements in [] like an array we have to put comma after every element
ReactDOM.render(
  [<h1> Saurav1</h1>, 
  <p>lorem </p>, 
  <h2>react Js</h2>],
  document.getElementById("root")
);
console.log("saurav");

// React_fragment
// we can also use react fragment instead of div tag because by the div tag ther is extra div in the html code 
ReactDOM.render(
  <React.Fragment>
  <h1> Saurav1</h1>
  <p>lorem 32 </p>
  <h2>react Js</h2>
  </React.Fragment>,
  document.getElementById("root")
);
console.log("saurav");
