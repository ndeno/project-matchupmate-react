import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";
import { Navbar } from "react-bootstrap";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should return a Navbar component", () => {
    expect(wrapper.type()).toBe(Navbar);
  });

  it("should have the correct properties", () => {
    expect(wrapper.props().bg).toEqual("light");
    expect(wrapper.props().expand).toEqual("lg");
  });

  describe("Brand element", () => {
    let brandElement;

    beforeEach(() => {
      brandElement = wrapper.props().children;
    });

    it("should be the correct type", () => {
      expect(brandElement.type).toBe(Navbar.Brand);
    });

    it("should have the appropriate text", () => {
      expect(brandElement.props.children).toBe("Matchup Mate");
    });
  });
});
