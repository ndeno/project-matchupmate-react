import React from "react";
import { mount, shallow } from "enzyme";
import CharButton from "../CharButton";

import { Button } from "react-bootstrap";

it("renders without crashing", () => {
  const wrapper = shallow(<CharButton />);
});

describe("CharButton", () => {
  let wrapper;
  let buttonTextName = "Kazuya";

  beforeEach(() => {
    wrapper = shallow(<CharButton name={buttonTextName} />);
  });

  it("should return a Button component", () => {
    expect(wrapper.type()).toBe(Button);
  });
});

let mockNext = jest.fn(); 

const defaultMockProps = {
  ___next: mockNext
}

describe("CharButton", () => {
 
  let wrapper;
  let cardTextName = "Kazuya";

  beforeEach(() => {
    wrapper = shallow(<CharButton name={cardTextName} {...defaultMockProps}/>);
  });

  it("calls the handleClick function when clicked", () => {
    const mockCallback = jest.fn();
    CharButton.prototype.handleClick = mockCallback;
    const mountedCardWithCallback = mount(
      <CharButton name={cardTextName} handleClick={mockCallback} __next={mockNext} {...defaultMockProps} />
    );
    mountedCardWithCallback.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1); //two ways to say the same thing
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
