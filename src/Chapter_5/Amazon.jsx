import React from"react"
import sData from "./Props_data_5"
import Shows from "./Props_5";
const Amazon=()=>{
    return (
        <Shows
          key={sData[5].id}
          imgsrc={sData[5].imgsrc}
          title={sData[5].title}
          sname={sData[5].sname}
          links={sData[5].links}
        />
      );
}
export default Amazon;