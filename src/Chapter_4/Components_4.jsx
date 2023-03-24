import React from "react";
import Heading from "./Heading";
import Para from "./Para";

// COMPONENTS
function Component() {
    return (
      <>
        <Heading />
        <Para />
        <ol>
          <li>Lucider</li>
          <li>Strangers things</li>
          <li>Dark</li>
          <li>Ghoul</li>
          <li>Imperfects</li>
        </ol>
      </>
    );
  }
  
  function favLang() {
    return "javascript";
  }
  
  function favFood() {
    return "pizza";
  }
  
  function favCountry() {
    return "India";
  }
export default Component;


export { favLang, favFood, favCountry };

