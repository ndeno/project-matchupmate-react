import React from "react";
import { shallow } from "enzyme";
import MoveList from "../MoveList";
import MoveCard from "../MoveCard";
import { Container, Row, Col, Button } from "react-bootstrap";

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
    let rowHeader;

    beforeEach(() => {
      rowHeader = wrapper.props().children[0];
    });

    it("contains notation text detail ", () => {
      let notationHeaderElement = rowHeader.props.children[0];
      expect(notationHeaderElement.props.children).toBe("Input");
    });

    it("remaining row text detail is correct", () => {
      let speedHeaderElement = rowHeader.props.children[1];
      let onHitHeaderElement = rowHeader.props.children[2];
      let onBlockHeaderElement = rowHeader.props.children[3];
      let hitLevelHeaderElement = rowHeader.props.children[4];
      expect(speedHeaderElement.props.children).toBe("Speed");
      expect(onHitHeaderElement.props.children).toBe("On Hit");
      expect(onBlockHeaderElement.props.children).toBe("On Block");
      expect(hitLevelHeaderElement.props.children).toBe("Hit Level");
    });
  });

  describe("Row element", () => {
    let rowElement;

    beforeEach(() => {
      rowElement = wrapper.props().children[1];
      // console.log(wrapper.debug())
      // rowElement = wrapper.find('div.movelist-row');
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

    describe("Col element", () => {
      let secondColElement;

      beforeEach(() => {
        secondColElement = rowElement.props.children[1];
      });

      it("is a col component", () => {
        // console.log(wrapper.debug());
        expect(secondColElement.type).toBe(Col);
      });
      describe("Button element", () => {
        let buttonElement;

        beforeEach(() => {
          buttonElement = secondColElement.props.children;
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
});

describe("Recieves props", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoveList selectedChar={"Kazuya"} />);
  });
});
