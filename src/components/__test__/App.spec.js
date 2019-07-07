import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import sinon from 'sinon';

import App from "../../App";
import CharList from "../../components/CharList";
import MoveList from "../../components/MoveList";

describe("app smoke test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("child components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("has a CharList", () => {
    wrapper.setState({ currentView: 0 });
    expect(wrapper.find(CharList)).toHaveLength(1);
  });

  it("has a MoveList", () => {
    wrapper.setState({ currentView: 1 });
    expect(wrapper.find(MoveList)).toHaveLength(1);
  });
});

describe("__next()", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("initial state of currentView to be zero", () => {
    expect(wrapper.instance().state.currentView).toBe(0);
  });

  it("increases the current view when called", () => {
    wrapper.instance().__next();
    expect(wrapper.instance().state.currentView).toBe(1);
  });

  it("only increases state to 1 and no further", () => {
    wrapper.instance().__next();
    wrapper.instance().__next();
    expect(wrapper.instance().state.currentView).toBe(1);
  });
});

describe("__prev()", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("does not decrease currentView below zero", () => {
    wrapper.instance().__prev();
    expect(wrapper.instance().state.currentView).toBe(0);
  });

  it("when currentView is one, __prev() reduces state to zero", () => {
    wrapper.instance().__next();
    wrapper.instance().__prev();
    expect(wrapper.instance().state.currentView).toBe(0);
  });

  it("invoking unselects the character", () => {
    wrapper.instance().charSelect("Kazuya");
    wrapper.instance().__prev();
    expect(wrapper.instance().state.currentView).toBe(0);
    expect(wrapper.instance().state.selectedChar).toBe("");
  });
});

describe("charSelect()", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("initial state of currentView to be zero", () => {
    expect(wrapper.instance().state.selectedChar).toBe("");
  });

  it("passing Kazuya causes selected Char to be Kazuya", () => {
    wrapper.instance().charSelect("Kazuya");
    expect(wrapper.instance().state.selectedChar).toBe("Kazuya");
  });

  it("passing Thomas causes selected Char to be Kazuya", () => {
    wrapper.instance().charSelect("Thomas");
    expect(wrapper.instance().state.selectedChar).toBe("Thomas");
  });
});

describe("Interacting with CharList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("clicks Kazuya button and selected character is set to Kazuya", () => {
    expect(wrapper.instance().state.selectedChar).toBe("");
    const component = wrapper.find("#Kazuya").at(1);
    component.simulate("click");
    expect(wrapper.instance().state.selectedChar).toBe("Kazuya");
    
  });
});

describe("Interacting with MoveList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  // it("clicks back button and prev has been called", () => {
  //   // TODO: Comeback
  //   const spy = sinon.spy();
  //   wrapper = mount(<App __prev={spy} />);
  //   wrapper.setState({currentView: 1, selectedChar: "Kazuya"});
  //   wrapper.update();
  //   const backComponent = wrapper.find("#back-button").at(1);
  //   backComponent.simulate("click");
    
  //   expect(spy.called).toBe(true);
  // });
});


