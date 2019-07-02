import React from "react";
import { shallow } from "enzyme";
import MoveList from "../MoveList";
import { Container, Row, Col } from "react-bootstrap";

describe("smoke test", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<MoveList />);
  });
});

describe("MoveList element", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoveList selectedChar={"Kazuya"} />);
  });

  it("is a container component", () => {
    expect(wrapper.type()).toBe(Container);
  });

  describe("Row element", () => {
    let rowElement;

    beforeEach(() => {
      rowElement = wrapper.props().children;
    });

    it("is a row component", () => {
      // console.log(wrapper.debug());
      expect(rowElement.type).toBe(Row);
    });

    describe("Col element", () => {
      let colElement;

      beforeEach(() => {
        colElement = rowElement.props.children[0];
      });

      it("is a col component", () => {
        // console.log(wrapper.debug());
        expect(colElement.type).toBe(Col);
      });
    });

    describe("Button element", () => {
      let buttonElement;

      beforeEach(() => {
        buttonElement = rowElement.props.children[1];
      });

      it("has a button element", () => {
        expect(buttonElement.type).toBe(Button);
      });
      it("has a button element", () => {
        expect(buttonElement.type).toBe(Button);
      });
      it("has a button element", () => {
        expect(buttonElement.props.children).toBe("Back");
      });
    });
  });
});

describe("Recieves props", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoveList selectedChar={"Kazuya"} />);
  });

  //no need to test for this
  // it('recieves selectedChar',()=>{
  //   expect(wrapper.instance().props.selectedChar).toBe("Kazuya");
  // })
});
