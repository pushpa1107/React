const heading = React.createElement("div", {class :"parent"},[
    React.createElement("div", {class:"child"},[
                React.createElement("h1",{class:"heading"}, "Hello, welcome to react heading inside"),
      React.createElement("h1",{class:"heading"}, "Hello, welcome to react heading inside"),
    ]),
    React.createElement("div", {class:"child"},[
       React.createElement("h1",{class:"heading"}, "Hello, welcome to react heading inside"),
       React.createElement("h1",{class:"heading"}, "Hello, welcome to react heading inside"),
    ])
   ]);


const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(heading)

