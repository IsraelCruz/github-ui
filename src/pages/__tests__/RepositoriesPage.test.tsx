import React from "react";
import ReactDOM from "react-dom";
import RepositoriesPage from "./../RepositoriesPage";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("RepositoriesPage renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RepositoriesPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("RepositoriesPage renders with correct elements", () => {
  it("RepositoriesPage renders with Search Bar", () => {
    const wrapper = shallow(<RepositoriesPage />);
    expect(wrapper.exists("SearchBar")).toBeTruthy();
  });

  it("RepositoriesPage renders with types Dropdown", () => {
    const wrapper = shallow(<RepositoriesPage />);
    expect(wrapper.exists('DropdownFilter[filterName="Type"]')).toBeTruthy();
  });

  it("RepositoriesPage renders with Languages Dropdown", () => {
    const wrapper = shallow(<RepositoriesPage />);
    console.log(wrapper.debug());
    expect(
      wrapper.exists('DropdownFilter[filterName="Language"]')
    ).toBeTruthy();
  });
});

describe("RepositoriesPage functions work correctly", () => {
  it("RepositoriesPage search function finds data correctly", () => {
    const wrapper = shallow(<RepositoriesPage />);
    const instance = wrapper.instance();

    wrapper.setState({
      repoData: [
        { name: "Rick" },
        { name: "Morty" },
        { name: "Summer" },
        { name: "Jerry" },
        { name: "Beth" }
      ]
    });

    wrapper.instance().search("Rick");

    expect(wrapper.state().currentData).toEqual([{name: "Rick"}]);
  });
});
