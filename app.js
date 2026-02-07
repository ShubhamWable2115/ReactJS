
  const parent =  React.createElement
  ("h1", 
    {id:"parent"}, 

   React.createElement("div",{id :"child"},[
    React.createElement("h1", {}, "this is the H! tag"),
    React.createElement("h2",{}, " this is the H2 tag"),
   ]),
   React.createElement("div",{id :"child2"},[
    React.createElement("h1", {}, "this is the H1 tag"),
    React.createElement("h2",{}, " this is the H2 tag"),
   ]))
    const root = ReactDOM.createRoot(document.getElementById("root"));   

    root.render(parent);


    /// create this type of structure using the react

    // <div id="parent">
    //   <div id="child1">
    //     <h1>hello</h1>
    //     <h2>SHUBHAM</h2>
    //   </div>
    //   <div id="child2">
    //     <h1>welcome to  react </h1>
    //     <h1>world</h1>
    //   </div>
    // </div>

     


    