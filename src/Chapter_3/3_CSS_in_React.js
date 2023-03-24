import React from "react"
import ReactDOM from "react-dom"
//importing css file
import "./index.css"

const img1="https://picsum.photos/250/300"
const img3="https://picsum.photos/300/300"
const img2="https://picsum.photos/400/300"

// inline css in JSX
// in jsx we apply insline jsx we have to write the styling in the atryle attribute in {} in the form of object(ket value pair), and we have to use the camelCase for writing the css in jsx

let style={
    margin:"50px 0px",
    color:"red",
    display:"flex",
    justifyContent:"center",
    textAlign:"center"
}
ReactDOM.render(
<>
    <h1 className="gallery" style={style}>My Image Gallery</h1>
    <div style={style}>
    <img className="img"src={img1}/>
    <img className="img"src={img2}/>
    <img className="img"src={img3}/>
    </div>
</>,
document.getElementById("root")
)