import React from "react";
import { shallow } from "enzyme";
import { Card, Row, Col } from "react-bootstrap";

import MoveCard from "../MoveCard";

// import { Container, Row, Col, Button } from "react-bootstrap";
let mockProps = {
  index: 1,
  notation: "ff2",
  speed: "i10",
  onHit: "+3",
  onBlock: "-0",
  hitLevel: "h"
};

describe("smoke test", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<MoveCard move={mockProps} />);
  });
});

describe("MoveCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MoveCard move={mockProps} />);
  });

  it("is a bootstrap card element", () => {
    expect(wrapper.type()).toBe(Card);
  });

  describe("Row element heading", () => {
    let rowElement;

    beforeEach(() => {
      rowElement = wrapper.props().children[0];
    });

    it("should have ", () => {
      //expect(rowElement).toBe(Row);
    });
  });
  describe("Row element detail", () => {
    let rowElement;

    beforeEach(() => {
      rowElement = wrapper.find(".move-detail");
    });

    it("should exist ", () => {
      expect(rowElement);
      expect(rowElement).toHaveLength(1);
    });

    it("should have 6 columns ", () => {
      expect(rowElement.children()).toHaveLength(6);
    });
  });
});

describe("MoveCard details", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoveCard move={mockProps} />);
  });

  describe("Row element details", () => {
    let rowHeader, rowElement;

    beforeEach(() => {
      rowHeader = wrapper.find(".move-header");
      rowElement = wrapper.find(".move-detail");
    });

    it("is a col element", () => {
      expect(rowElement.childAt(0).type()).toBe(Col);
    });

    describe("Row element detail", () => {
      let notationDetailElement,
        speedDetailElement,
        onHitDetailElement,
        onBlockDetailElement,
        hitLevelDetailElement;

      beforeEach(() => {
        notationDetailElement = rowElement.childAt(0);
        speedDetailElement = rowElement.childAt(1);
        onHitDetailElement = rowElement.childAt(2);
        onBlockDetailElement = rowElement.childAt(3);
        hitLevelDetailElement = rowElement.childAt(4);
      });

      it("contains notation text detail ", () => {
        expect(notationDetailElement.text()).toBe("ff2");
      });

      it("remaining row text detail is correct", () => {
        expect(speedDetailElement.text()).toBe("i10");
        expect(onHitDetailElement.text()).toBe("+3");
        expect(onBlockDetailElement.text()).toBe("-0");
        expect(hitLevelDetailElement.text()).toBe("h");
      });
    });
  });
});
