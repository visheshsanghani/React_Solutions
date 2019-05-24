import React from "react";
import ReactDOM from "react-dom";


const App = () => {

  return(
    <div style={{backgroundColor : 'red',color: 'green' , width: '60px'}}>Hi There</div>

);
};

ReactDOM.render(<App />, document.querySelector("#root"));
