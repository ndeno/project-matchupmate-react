import React from "react";
import CharButton from "./CharButton";
import { Col } from "react-bootstrap";

const CharList = props => {
  let listOfChars = props.chars;
  let thisList = listOfChars.map((listItem, i) => (
    <Col className="charlist-col" sm={12}>
      <CharButton
        className="char-button"
        key={i}
        name={listItem.charName}
        __next={props.__next}
        {...props}>
        <div key={i} />
      </CharButton>
    </Col>
  ));

  return thisList;
};

export default CharList;
