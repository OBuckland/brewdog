import { shallow } from "enzyme";
import React from "react";

import App from "./App";

describe("App tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
