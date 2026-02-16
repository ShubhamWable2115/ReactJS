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
// const jsxheading =(<h1 id="heading" className="heading"> shubham 
// is revising all the concept of the react </h1>);

// const root=createRoot(document.getElementById("root"));
// root.render(jsxheading);

//js engine understand only javascript code means ES6 or ecmascript language not the jsx code so we need to convert jsx code 
// into react element and then react element will convert into html element and show on the screen

//babel is a compiler that converts jsx code into react element and then react element will convert into html element and show on the screen



//let us start the Component in react
//two types of component in react
//1. functional component - new way to write reect coode 
//2. class component    - old way to write code in react .



///this is the simple react element
const heading1 = () => (
    <h1> helllo from the react element </h1>
)
/// this is the functional component in react 
const HeadingComponent =() =>{
    return(<h1> this is the react functional component </h1>)
}

//this is the cll
const FooterComponent =() => <div>This is the foorter component </div>


// by this approach we can render the react element 
// root.render(heading1);

//by this approach we can render the functional component
// root.render(<HeadingComponent/>);




// lets do some practice of jsx and react component

const FirstComponent = () =>{
    return <h1>This is the first component</h1>
}

const SecondComponent = () =>(
   <div>
    <FirstComponent/>
    <h1>This is the second component</h1>
   </div>
);

root.render(<SecondComponent/>);