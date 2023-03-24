import React from"react"
import sData from "./Props_data_5"
import Shows from "./Props_5";
const Netflix=()=>{
    return (
        <Shows
          key={sData[1].id}
          imgsrc={sData[1].imgsrc}
          title={sData[1].title}
          sname={sData[1].sname}
          links={sData[1].links}
        />
      );
}
export default Netflix;