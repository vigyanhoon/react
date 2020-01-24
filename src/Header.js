import React, { Component} from "react";
import Some from "./Some.js";

class Header extends Component{

  constructor() {
    super()
    this.state = {
      name:"pandey"
    }
  }

  changeName = () => {
    this.setState({
        name:"sanjay"
    })
  }

  render(){
    return(
      <div>
        <h1 onClick={this.changeName}> Header </h1>
        <p>{this.state.name}</p>
        <Some name={this.state.name}/>
      </div>
    );
  }
}

export default Header;
