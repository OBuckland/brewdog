import { shallow } from "enzyme";
import React from "react";

import beers from "../../data/beerData";
import Card from "./Card";

describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beers[0];
    component = shallow(<Card beer={testBeer} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render a title", () => {
    expect(component.find("h4").length).toEqual(1);
  });

  it("should return the correct title", () => {
    expect(component.find("h4").text()).toEqual(testBeer.name);
  });

  it("should render a description", () => {
    expect(component.find("p").length).toEqual(1);
  });

  it("should return the correct tagline", () => {
    expect(component.find("p").text()).toEqual(testBeer.tagline);
  });

  it("should render an image", () => {
    expect(component.find("img").length).toEqual(1);
  });

  it("should return the correct image", () => {
    expect(component.find("img").prop("src")).toBe(testBeer.image_url);
  });
});
