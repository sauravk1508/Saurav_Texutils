import React from "react";
import Img from "./Imgsrc"

let Shows = (props) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <Img imgsrc={props.imgsrc}/>
          <span className="ottName">{props.title}</span>
          <h3 className="serTit">{props.sname}</h3>
          <a href={props.links} target="_blank">
          <button>Watch Now </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Shows;
