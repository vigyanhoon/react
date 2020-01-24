import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Header from "./Header.js";
import Name from "./Name.js";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Name name="san"/>
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;
