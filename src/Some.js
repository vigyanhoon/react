import ReactDOM from "react-dom";
import React from "react";

function Some(props){
  if (props.name==="sanjay") {
    return null;
  }

  return <div>some is {props.name}</div>
}

export default Some;
