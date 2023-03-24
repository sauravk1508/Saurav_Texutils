import React, { useState } from "react";

const Textform = (props) => {
  // for Dark_mode

  // for the other specifications
  const handleUpClick = () => {
    // console.log("clicked")
    let upCase = text.toUpperCase();
    setText(upCase);
    props.showAlert(" : Converted to Uppercase","success" )
  };

  const LoClick = () => {
    let upCase = text.toLowerCase();
    setText(upCase);
    props.showAlert(" : Converted to Lowercase","success" )
  };

  const emClick = () => {
    setText(" ");
    props.showAlert(" : Text Cleared","success" )
  };

  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const btnStyle = {
    display: "flex",
    justifyContent: "right"
  }

  return (
    <>
      <div className="container" >
        <div className="container-1">
          <h1>{props.heading}</h1>


          <div className="mb-3">
            <textarea
              className="form-control"
              style={{
                backgroundColor: props.mode === "light" ? "dark" : "light",
                color: props.mode === 'black' ? 'aqua' : 'black',
                border: "solid black"
              }}
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}

            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-success mx-1" onClick={LoClick}>
            Convert To Lowercase
          </button>
          <button className="btn btn-danger mx-1 my-2" onClick={emClick}>
            Clear Text
          </button>
        </div>
        <div className="conataine-3 my-4">
          <h1>Text Summary</h1>
          <p>
            <b>{text.split(" ").length}</b> Words <b>{text.length}</b>{" "}
            Characters
          </p>
          <p>
            <b>{0.008 * text.split(" ").length}</b> Minutes to read
          </p>
          <h2>Preview</h2>
          <p>
            <i>{text}</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Textform;
