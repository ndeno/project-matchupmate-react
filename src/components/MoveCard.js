import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const MoveCard = props => {
  return (
    <Card>
      <Row className="move-detail">
        <Col sm={2}>{props.move.notation}</Col>
        <Col sm={2}>{props.move.speed}</Col>
        <Col sm={2}>{props.move.onHit}</Col>
        <Col sm={2}>{props.move.onBlock}</Col>
        <Col sm={2}>{props.move.hitLevel}</Col>
        <Col sm={2} />
      </Row>
    </Card>
  );
};

export default MoveCard;
