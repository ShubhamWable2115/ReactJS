import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";  
 
//below is the react element not good way to write react code
//we will use jsx to write react code in better way and it will convert into react element by babel compiler

//react element nothing but a object which describe the UI
//when we render in DOM it will convert into html element

// const heading= react.createElement("h1", {id : "heading"}, "hello Shubham is here");
// console.log(heading);
//to render to the root element 
// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//rendering means converting react element into html element and showing on the screen



///jsx is a syntax extension for javascript which allows us to write html like code in javascript and it will convert into react element by babel compiler
//jsx is not a string it is not html it is a syntax which looks like html but it is not html

//facebook developed jsx and it is used in react to write react code in better way we can write the react
//code without jsx also 
//jsx is seperatly devloped by facebook and it is used in react to write react code in better way we can write the react
//jsx and react is not same thing jsx is different from react it is syntax and use in the react 

//jsx is not a html inside the javascript it is the html like syntax

//jsx code is transpiled before it reaches the js engine by babel compiler and it will convert into react element 
const jsxheading =<h1 id="heading" className="heading"> shubham is revising all the concept of the react </h1>

const root=createRoot(document.getElementById("root"));
root.render(jsxheading);

//js engine understand only javascript code means ES6 or ecmascript language not the jsx code so we need to convert jsx code 
// into react element and then react element will convert into html element and show on the screen