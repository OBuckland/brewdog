import { shallow } from "enzyme";
import React from "react";

import Filters from "./Filters";

describe("Filter tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Filters />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render a div", () => {
    expect(component.find("div").length).toEqual(3);
  });

  it("should render radio input elements", () => {
    expect(component.find("input").at(0).prop("type")).toBe("radio");
  });

  it("should render a label", () => {
    expect(component.find("label").length).toEqual(3);
  });

  it("should render correct label", () => {
    expect(component.find("label").at(1).text()).toBe(" Classic Range ");
  });

  //   it("should render a description", () => {
  //     expect(component.find("p").length).toEqual(1);
  //   });

  //   it("should return the correct description", () => {
  //     expect(component.find("p").text()).toEqual(testBeer.description);
  //   });

  //   it("should render an image", () => {
  //     expect(component.find("img").length).toEqual(1);
  //   });

  //   it("should return the correct image", () => {
  //     expect(component.find("img").prop("src")).toBe(testBeer.image_url);
  //   });
});
