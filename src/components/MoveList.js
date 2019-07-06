import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import chars from "../model/Chars";

class MoveList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movesForSelectedChar : [] 
    }
  }

  componentWillMount(){
    let movelist = []; 
    for(const c in chars){
        if(chars[c].charName ===  this.props.selectedChar){
          movelist = chars[c].moves;
        }
    }
    this.setState({movesForSelectedChar : movelist })
  }

  render() {
    // let listOfCharacterMoves = this.state.movesForSelectedChar.map((listItems, i)=> {
      
    // })



    return (

      <Container className="movelist-container">
        <Row>
          <Col sm={12}  />
          <Col sm={12}  >
            <Button
              id="back-button"
              onClick={this.props.__prev}>
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MoveList;
