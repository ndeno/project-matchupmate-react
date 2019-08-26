import React, { Component } from "react";
import "./App.css";

import { Container, Row } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer"
import CharList from "./components/CharList";
import MoveList from "./components/MoveList";

import chars from "./model/Chars";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charList: chars,
      currentView: 0,
      selectedChar: ""
    };

    this.__next = this.__next.bind(this);
    this.__prev = this.__prev.bind(this);
    this.charSelect = this.charSelect.bind(this);
  }

  __next() {
    let newCurrentView = 1;
    this.setState({ currentView: newCurrentView });
  }

  __prev() {
    let newCurrentView = 0;
    this.setState({ currentView: newCurrentView });
    this.setState({ selectedChar: "" });
  }

  charSelect(newChar) {
    let newCharToUpdate = newChar;
    this.setState({ selectedChar: newCharToUpdate });
  }

  render() {
    return (
      <div className="App">
        <Header currentView={this.state.currentView} />
        <Container sm={12} className="text-center is-center">
          <Row className="justify-content-md-center charlist-container" sm={12}>
            {this.state.currentView === 0 && (
              <CharList
                className="char-list"
                chars={this.state.charList}
                __next={this.__next}
                charSelect={this.charSelect}
                {...this.state}
              />
            )}
          </Row>
          <Row className="justify-content-md-center" sm={12}>
            {this.state.currentView === 1 && (
              <MoveList
                className="move-list"
                selectedChar={this.state.selectedChar}
                __prev={this.__prev}
              />
            )}
          </Row>
        </Container>
        <Footer currentView={this.state.currentView} __prev={this.__prev}></Footer>
      </div>
    );
  }
}

export default App;
