import React from "react";
import CharButton from "./CharButton";

const CharList = props => {
  let listOfChars = props.chars;
  let thisList = listOfChars.map((listItem, i) => (
    <CharButton
   
      key={i}
      name={listItem.charName}
      __next={props.__next}
      {...props}>
      <div key={i} />
    </CharButton>
  ));

  return thisList;
};

export default CharList;
