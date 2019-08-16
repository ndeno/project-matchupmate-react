import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import MoveCard from "./MoveCard";
import chars from "../model/Chars";

class MoveList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movesForSelectedChar: []
    };
  }

  componentDidMount() {
    let movelist = [];
    for (const c in chars) {
      if (chars[c].charName === this.props.selectedChar) {
        movelist = chars[c].moves;
      }
    }
    this.setState({ movesForSelectedChar: movelist });
  }

  

  render() {
    let listOfCharacterMoves = this.state.movesForSelectedChar.map(
      (listItems, i) => <MoveCard key={i} move={listItems} />
    );

    return (
      <Container className="movelist-container">
        <Row className="movelist-header">
          <Col sm={2}>Input</Col>
          <Col sm={2}>Speed</Col>
          <Col sm={2}>On Hit</Col>
          <Col sm={2}>On Block</Col>
          <Col sm={2}>Hit Level</Col>
          <Col sm={2} />
        </Row>
        <Row className="movelist-row">
          <Col sm={12}>{listOfCharacterMoves}</Col>
          <Col sm={12}>
            <Button id="back-button" onClick={this.props.__prev}>
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MoveList;
