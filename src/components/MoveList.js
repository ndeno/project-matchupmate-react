import React, { Component }  from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

class MoveList extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <Container>
        <Row>
          <Col>

          </Col>
          <Button id="back-button" onClick={this.props.__prev}>Back</Button>
        </Row>


        
      </Container>
    );
  }
}

export default MoveList;
