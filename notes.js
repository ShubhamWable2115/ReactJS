//every thing we are rendering in react we render inside the root element
//we can use the react.createElement to create the element and then we can use the reactDOM to render it in the root element
//react is a library that allows us to create user interfaces using components
//reactDOM is a library that allows us to render react components in the browser
//we can use the react.createElement to create the element and then we can use the reactDOM to render it in the root element


//  const heading =  React.createElement("h1", {}, "hwllo world from react");
// this is the code that creates a heading element with the text "hwllo world from react"
//and the second argument is an empty object which is used to pass props to the element
//the first argument is the type of the element we want to create
//the second argument is an object that contains the props we want to pass to the element
//the third argument is the children of the element
//in this case we are not passing any props or children so we can leave it empty


//props are the children and the attributes as we pass in it 

//react.createElement is a function that creates a react element
//and it is nothing but a javascript object  creates HTML that react can understand
//it is not a real DOM element but a virtual DOM element
//reactDOM is a library that allows us to render react components in the browser



// what is the react.rnder method?
//reactDOM.render is a method that allows us to render a react element in the DOM
//it takes two arguments the first argument is the react element we want to render
//and the second argument is the DOM element where we want to render the react element






//   const parent =  React.createElement
//   ("h1", 
//     {id:"parent"}, 

//    React.createElement("div",{id :"child"},[
//     React.createElement("h1", {}, "this is the H! tag"),
//     React.createElement("h2",{}, " this is the H2 tag"),
//    ]))
//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(parent);

//created this type of structure using the react this means the nested react elements structure

//before JSX we usethe react create element to create the html dom structure 