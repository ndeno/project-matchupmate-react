import React from "react";
import { shallow } from "enzyme";
import MoveList from "../MoveList";
import {Button} from "react-bootstrap"



describe("smoke test", ()=>{
  it("renders without crashing", () => {
    const wrapper = shallow(<MoveList />);
  });
})

describe("Child props", ()=>{
  let wrapper;
  

  beforeEach(() => {
    wrapper = shallow(<MoveList selectedChar={'Kazuya'} />);
    
  });

  describe("Button element", () => {
    let buttonElement;

    beforeEach(() => {
      buttonElement = wrapper.props().children;
    });

    it("has a button element", ()=>{
      expect(buttonElement.type).toBe(Button);
    });
    it("has a button element", ()=>{
      expect(buttonElement.type).toBe(Button);
    });
    it("has a button element", ()=>{
      expect(buttonElement.props.children).toBe('Back');
    });

  });



});

describe("Recieves props", ()=>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoveList selectedChar={'Kazuya'} />);
  });

  //no need to test for this
  // it('recieves selectedChar',()=>{
  //   expect(wrapper.instance().props.selectedChar).toBe("Kazuya");
  // })
})


