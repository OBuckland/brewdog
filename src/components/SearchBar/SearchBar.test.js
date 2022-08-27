import { shallow } from "enzyme";
import React from "react";

import beers from "../../data/beerData";
import SearchBar from "./SearchBar";

describe("Search Bar tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    component = shallow(<SearchBar />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render an input element", () => {
    expect(component.find("input").length).toEqual(1);
  });

  it("should render the correct placeholder text", () => {
    const placeholderText = "Search...";
    expect(component.find("input").prop("placeholder")).toBe(placeholderText);
  });
});
