import React from "react";
import ReactDOM from "react-dom";

// import "./Chapter_1/1_Render_multiple_element & react_fragment"

// import "./Chapter_2/2_Js_Expressions_&_Template_Literals_and_JSX_attributes.js"

// import "./Chapter_3/3_CSS_in_React.js"

// import "./Practice_Questions"
// // import keyword is used for adding or attaching the another file and using modules in the existing file

// ///////// BASIC OF REACT /////////

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // React Render
// // with the help of react render we an show the html content on the web page by sing function ReactDOM.render()
// ReactDOM.render(
//   <h1> Saurav</h1>, document.getElementById('root')
//   /*
//   this function take the 2 arguments:
//   1. HTML content which you want to show on page
//   2. HTML element where you want to put the HTML content (1st argument):
//   the location of HTML element is presnt in the index.html
//   */
// );
// // now we confused that how we use the html in the js file so it is held by react JSX it is stand for javascript XML.It is similar in appearance to html, hence provides a way to easily write html in react
// // for using the JSX we have to import React and ReactDOM in the file


//        //////// CHAPTER_4 : COMPONENTS & Import Export in React ////////////


// import App from "./Chapter_4/App"

// ReactDOM.render(

//   //rendering components: react is also capable of renedering user-defined components. To render a component in react we can initailize an element with user-defined component and pass this element as the first parameter to ReactDOM.render() or directly pass the component as the first argument to the ReactDOM.render() method.

//   <App />,document.getElementById("root")
// )



                  ////////CHAPTER_5 : PROPS////////

import App from "./Chapter_5/App"
import Textutils from "./Chapter_5/Textutils/Textutils";
ReactDOM.render(
  <>
  {/* //Project1_ Netflix_App */}
  {/* <App /> */}
  {/* //Project_2_ Textutile */}
  <Textutils/>
  </>,
  document.getElementById("root")
);





