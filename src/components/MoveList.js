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

    this.handleClick = this.handleClick.bind(this);
    this.selectedMoveSort = this.selectedMoveSort.bind(this);
  }

  handleClick(e, notation) {
    e.preventDefault();
    let passedNotation = notation;
    this.selectedMoveSort(passedNotation);
  }

  selectedMoveSort(notation) {
    let sortedMovelist = this.state.movesForSelectedChar.map(move => {
      let returnedMove = move;
      if (move.notation === notation) {
        returnedMove.selected = true;
        return returnedMove;
      } else {
        let returnedMove = move;
        returnedMove.selected = false;
        return returnedMove;
      }
    });
    sortedMovelist.sort((a, b) => (a.selected > b.selected ? -1 : 0));
    this.setState({ movesForSelectedChar: sortedMovelist });
  }

  componentDidMount() {
    let movelist = [];
    for (const c in chars) {
      if (chars[c].charName === this.props.selectedChar) {
        movelist = chars[c].moves;
      }
    }
    movelist.sort((a, b) => (a.topMove > b.topMove ? -1 : 0));
    this.setState({ movesForSelectedChar: movelist });
  }

  render() {
    let listOfCharacterMoves = this.state.movesForSelectedChar.map(
      (listItems, i) => (
        <MoveCard key={i} move={listItems} handleClick={this.handleClick} />
      )
    );

    return (
      <Container className="movelist-container">
        <Row className="movelist-header">
          <Col sm={2}>Input</Col>
          <Col sm={2}>Speed</Col>
          <Col sm={2}>On Hit</Col>
          <Col sm={2}>On Block</Col>
          <Col sm={2}>Hit Level</Col>
          <Col sm={2}>Select</Col>
          <Col sm={2} />
        </Row>
        <Row className="movelist-row scrollable" id="movelist-row">
          <Col sm={12}>{listOfCharacterMoves}</Col>
        </Row>
        <Row className="movelist-footer justify-content-md-center">
          <Button id="back-button movelist-footer-button" onClick={this.props.__prev}>
            Back
          </Button>
        </Row>
      </Container>
    );
  }
}

export default MoveList;
