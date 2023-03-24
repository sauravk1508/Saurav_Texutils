import React from "react";


////////// CHAPTER_4 : COMPONENTS & Import Export in React ////////////

import Component, { favLang, favFood , favCountry}  from "./Components_4"
// COMPONENTS

// Functional components are simply js functions. we can create a functional component in react by writing a JS function. These functions may or may not receive data as parameters
const App=()=>(
  //redering components: react is also capable of renedering user-defined components. To render a component in react we can initailize an element with user-defined component and pass this element as the first parameter to ReactDOM.render() or directly pass the component as the first argument to the ReactDOM.render() method.

  <>
  <h1>{ favLang() }</h1>
  <h1>{ favFood()}</h1>
  <h1>{ favCountry()}</h1>
 <Component/>
 </>
  //In the above syntax, the App is the name of the user-defined component.
  // Note: The name of a component should always start with a capital letter. This is done to differentiate a component tag with html tags.
)
export default App;