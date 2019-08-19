import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const MoveCard = props => {
  return (
    <Card>
      <Row className="move-detail">
        <Col id='move-detail-notation' sm={2}>{props.move.notation}</Col>
        <Col id='move-detail-speed' sm={2}>{props.move.speed}</Col>
        <Col id='move-detail-on-hit'sm={2}>{props.move.onHit}</Col>
        <Col id='move-detail-on-block'sm={2}>{props.move.onBlock}</Col>
        <Col id='move-detail-hitlevel'sm={2}>{props.move.hitLevel}</Col>
        <Col id='move-select'sm={2}><Button notation={props.move.notation} id='move-select-button' onClick={(e) => props.handleClick(e, props.move.notation)}>Select</Button></Col>
        <Col sm={2} />
      </Row>
    </Card>
  );
};

export default MoveCard;
