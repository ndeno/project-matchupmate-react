import React, { Component }  from 'react';
import { Button } from "react-bootstrap";

class MoveList extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>
        <Button id="back-button" onClick={this.props.__prev}>Back</Button>
      </div>
    );
  }
}

export default MoveList;
