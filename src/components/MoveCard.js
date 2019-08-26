import React from "react";
import { Row, Col } from "react-bootstrap";

const MoveCard = props => {

  let topMoveRender = "justify-content-md-center move-detail-row";

  if(props.move.topMove === "true"){
    console.log("was a top move!!")
    topMoveRender += " top-move-row";
  }
 
  return (
      <Row className={topMoveRender} >
        <Col id="move-detail-notation" sm={2}>
          {props.move.notation}
        </Col>
        <Col id="move-detail-speed" sm={2}>
          {props.move.speed}
        </Col>
        <Col id="move-detail-on-hit" sm={2}>
          {props.move.onHit}
        </Col>
        <Col id="move-detail-on-block" sm={2}>
          {props.move.onBlock}
        </Col>
        <Col id="move-detail-hitlevel" sm={2}>
          {props.move.hitLevel}
        </Col>
        <Col id="move-select" sm={2}>
          <button
            notation={props.move.notation}
            className="move-select-button"
            id="move-select-button"
            onClick={e => props.handleClick(e, props.move.notation)}>
            -
          </button>
        </Col>
        <Col sm={2} />
      </Row>
  
  );
};

export default MoveCard;
