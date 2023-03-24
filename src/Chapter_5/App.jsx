import React from "react";
import Shows from "./Props_5";
import sData from "./Props_data_5";
import Netflix from "./Netflix"
import Amazon from "./Amazon";
import Navbar from "./Navbar";

                    ////////// CHAPTER_5: PROPS ///////

// If_else Condition in react js
// const favSeries= "amazon"

// const FavS=()=>{
//     if (favSeries==="netflix") {
//      return <Netflix/>
//     } else {
//       return <Amazon/>
//     }
// }

function card(val) {
  return (
    <Shows
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      links={val.links}
    />
  );
}
const App=()=>{
  return(
  <>
  <Navbar title="Netflix" about="About" more="Explore More"/>
    <div className="nav">LIST OF TOP 5 SERIES IN 2023</div>
    {sData.map(card)}
    {/* <FavS/> */}
  </>
  )
};


export default App;