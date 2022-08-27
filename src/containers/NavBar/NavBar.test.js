import { shallow } from "enzyme";
import React from "react";

import beers from "../../data/beerData";
import NavBar from "./NavBar";

describe("Nav Bar tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavBar />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render a button", () => {
    expect(component.find("button").length).toEqual(1);
  });
});
