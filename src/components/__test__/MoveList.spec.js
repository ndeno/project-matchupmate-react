import React from "react";
import { shallow } from "enzyme";
import MoveList from "../MoveList";

import { Card } from "react-bootstrap";

it("renders without crashing", () => {
  const wrapper = shallow(<MoveList />);
});

