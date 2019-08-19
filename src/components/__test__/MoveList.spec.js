import React from "react";
import { shallow, mount } from "enzyme";
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
      expect(rowElement.type).toBe(Row);
    });

    describe("Col element", () => {
      let colElement;

      beforeEach(() => {
        colElement = rowElement.props.children[0];
      });

      it("is a col component", () => {
        expect(colElement.type).toBe(Col);
      });
    });

    describe("Col element", () => {
      let secondColElement;

      beforeEach(() => {
        secondColElement = rowElement.props.children[1];
      });

      it("is a col component", () => {
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

describe("Updates Sorted Order When Selected", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MoveList selectedChar={"Kazuya"} />);
  });

  describe("Row element", () => {
    let rowElement;
    let rowElementUpdated;
    let selectButton; 

    beforeEach(() => {
      rowElement = wrapper.find('#move-detail-notation').at(1);
      selectButton = wrapper.find('#move-select-button').at(2);
    });

    it("control test", () => {
      expect(rowElement.text()).toBe('1');
    });

    it("sorts the moves by selected clicks", () => {
      selectButton.simulate('click'); 
      wrapper.update();
      rowElementUpdated = wrapper.find('#move-detail-notation').at(1);
      expect(rowElementUpdated.text()).toBe('11');
    });
    
  });
});
