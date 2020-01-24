import ReactDOM from "react-dom";
import React, { Component} from "react";

class Name extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return <div>name is {this.props.name}</div>
  }
}

export default Name;
