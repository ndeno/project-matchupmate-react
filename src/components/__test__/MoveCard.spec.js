import React from "react";
import { shallow } from "enzyme";
import { Card, Row } from "react-bootstrap";

import MoveCard from "../MoveCard";

// import { Container, Row, Col, Button } from "react-bootstrap";

describe("smoke test", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<MoveCard />);
  });
});

describe("MoveCard", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MoveCard />);
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

