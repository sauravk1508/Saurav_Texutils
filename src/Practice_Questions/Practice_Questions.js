import React from "react"
import ReactDOM from "react-dom";
import "./index.css"

// Practice_1
// render the top five best webseries of netflix with using h1 tag, p tag and using ordered list

// ReactDOM.render(
//     <React.Fragment>
//         <h1> Top 5 Netflix Web Series </h1>
//         <p>List of Best Series</p>
//         <ol>
//             <li>Dark</li>
//             <li>Strangers Things</li>
//             <li>Lucifer</li>
//             <li>Squid Game</li>
//             <li>Khaki</li>
//         </ol>
//     </React.Fragment>,
//     document.getElementById("root")
// )

// Practice 2
// render the name using h1 tag and show the date and time using expressions
// let name= "saurav"
// let currdate= new Date().toLocaleDateString()
// let currTime= new Date().toLocaleTimeString()

// ReactDOM.render(
//     <React.Fragment>
//         <h1> My name is {name}</h1>
//         <p>Today date is : {currdate}</p>
//         <p>Current time is : {currTime}</p>
//     </React.Fragment>,
//     document.getElementById("root")
// )

// Practice 3
/*
1. show a heading that says hello sir, good morning if time is b/w 1 to 11am
2. good afternoon, if 12pm to 7pm
3. good night, if 7pm till midnight
4. apply CSS in it then dynamically change the color of greeting parts only using inline css style. 
*/
let currDate = new Date()
currDate = currDate.getHours()
let greeting = ""
const cssStyle={}

if (currDate >= 0 && currDate < 12) {
    greeting = "Good Morning"
    cssStyle.color="#d20707"
} else if (currDate >= 12 && currDate < 19) {
    greeting = "Good Afternoon"
    cssStyle.color="#27b5dc"
} else if (currDate >= 19 && currDate < 0) {
    greeting = "Good Night"
    cssStyle.color="#0b22ba"
}

ReactDOM.render(
    <>
    <div className="container">
        Hello Sir,<span style={cssStyle}>{greeting}</span>
    </div>
    </>, document.getElementById("root")
)