import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CharButton extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.__next();
  } 

  render(){
    return (
     <Button className={'char-button'} onClick={this.handleClick}>
      {this.props.name}
     </Button>
    );
  }
 
};

export default CharButton;
