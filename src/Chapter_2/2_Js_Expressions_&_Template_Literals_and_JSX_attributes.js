import React from "react"
import ReactDOM from "react-dom"

//Js Expressions,Template Literals & JSX Attributes
let name="saurav"
let age= 22

// we can write the expressions in{}
//You can write simple mathematical operations to variable to states to complicated operations with ternary operators and it will return the result

// and in template literals we can use the variables and state in backtiks and use variables in ${"any varaible"}

// JSX Attributes:- JSX attributes are the properties of html elements in JSX it also gives us the warning about attributes & we have to use camelCase for writing the attributes in react 
ReactDOM.render(
    <>
        <h1 contentEditable="true">My name is {name}</h1>
        <p>My age is {age}</p>
        <p/>The sum of no. {12+25}
        <h3>{`My name is ${name} and i am ${age} year old`}</h3>
        <img src="https://picsum.photos/200"/>
    </>,
    
    document.getElementById("root")
)


 