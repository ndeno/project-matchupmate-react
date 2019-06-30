import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CharButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.charSelect(e.target.value); 
    this.props.__next();
  } 

  render(){
    return (
     <Button onClick={this.handleClick} value={this.props.name} id={this.props.name}>
      {this.props.name}
     </Button>
    );
  }
 
};

export default CharButton;
