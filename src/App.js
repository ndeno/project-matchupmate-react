import React, { Component } from "react";
import "./App.css";

import { Container, Row} from "react-bootstrap";

import Header from "./components/Header";
import CharList from "./components/CharList";

import chars from "./model/Chars";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charList: chars,
      currentView: 0
    };

    this.__next = this.__next.bind(this);
    this.__prev = this.__prev.bind(this);
  }

  __next() {
    let newCurrentView = this.state.currentView; 
    newCurrentView++; 
    this.setState({ currentView: newCurrentView });
  }

  __prev(){
    let currentView = this.state.currentView; 
    this.setState({ currentView: currentView--});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container className="text-center is-center">
          <Row className="justify-content-md-center" sm={6}>
            <CharList chars={this.state.charList} __next={this.__next} {...this.state} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
