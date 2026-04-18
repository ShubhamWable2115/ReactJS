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



//git notes
//just adding to git to see the changes in the git and how it works
//git is a version control system that allows us to track the changes in our code and collaborate with other developers
//git allows us to create branches and merge them back to the main branch
//git allows us to revert back to the previous version of our code if we make a mistake



///steps to add the commit to the git 
// firstly check the status of the git with the git ststus / or just type gut init 
// then if u want tot add all the files then type(git add .) or for the specific file then type 
// (git add filename)
//  then to give the comment to recognize afterwords that what changes i have done type git commit -m "commit message" 
/// after commiting the code simply go to our branch add the file that we change and then push the 
// code to the remote repository with the command git push origin branch name

//before pushing the 





//react has best rendering performance because of the virtual DOM and the reconciliation algorithm
//It render very fast because it only updates the parts of the DOM that have changed and it does not re-render the entire DOM tree like other frameworks do
//react uses a virtual DOM to keep track of the changes in the DOM and it uses a reconciliation algorithm to update the DOM efficiently
//react also uses a diffing algorithm to compare the virtual DOM with the real DOM and it updates only the parts of the DOM that have changed



///lets start with the useeffect hook in react
//useEffect is a hook that allows us to perform side effects in our components
//side effects are the operations that can cause changes in the state of the component or in the DOM
//useEffect takes two arguments the first argument is a function that contains the side effect and the second argument is an array of dependencies that tells react when to run the side effect
//if we pass an empty array as the second argument then the side effect will run only once when the component is mounted
//if we pass an array with some dependencies then the side effect will run every time any of the dependencies change
//if we do not pass any second argument then the side effect will run every time the component re-renders


//first argument is the callback function and the second argument is the dependency array 