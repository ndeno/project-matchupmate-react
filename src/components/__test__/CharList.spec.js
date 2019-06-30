import React from "react";
import { shallow, mount } from "enzyme";
import CharList from "../CharList";
import chars from '../../model/Chars'
import CharCard from "../CharButton";

it("renders without crashing", () => {
  const wrapper =shallow(<CharList chars={chars}/>);
});

describe('CharList type', () => {
  let wrapper; 

  beforeEach(()=>{
    wrapper = mount(<CharList chars={chars}/>)
  }); 
  
  test('should render a CharList element',() => {
    expect(wrapper.children(CharCard).length).toEqual(1);
  });
});






