import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

const MoveCard = props => {
  return (
    <Card>
      <Row />
      <Row className='move-detail'>
          <Col sm={2}></Col>
          <Col sm={2}></Col>
          <Col sm={2}></Col>
          <Col sm={2}></Col>
          <Col sm={2}></Col>
          <Col sm={2}></Col>
      </Row>
    </Card>
  );
};

export default MoveCard;
