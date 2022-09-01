import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import categoryData from "./data/categoryData";
import App from "./App";

const numOfProducts = categoryData.length;
const nameOfProduct = categoryData[0].name;

test("App snapshot test", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
//1
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Shop By Category/i);
  expect(linkElement).toBeInTheDocument();
});
//2 number

test("Number of items = 9", () => {
  expect(numOfProducts).toBe(9);
});
//3 number
test("Number of items to be greater than or equal to 8", () => {
  expect(numOfProducts).toBeGreaterThanOrEqual(8);
});
//4 string
test("There is a Choc in product name", () => {
  expect(nameOfProduct).toMatch(/Choc/);
});
//5
test("The product name should contain Choclates", () => {
  expect(nameOfProduct).toContain("Choclates");
});
//6 arrays

describe("array tests", () => {
  const data2 = ["choclate"];
  test("The list of products contains choclate", () => {
    expect(["choclate"]).toEqual(expect.arrayContaining(data2));
  });
});
//7 objects-ckeck the key
describe("object tests", () => {
  test("The list of products to have a property name", () => {
    expect(categoryData[0]).toHaveProperty("name");
  });
  //8 objects - key and value
  test("The first product to have a property url item and value of CandyBars", () => {
    expect(categoryData[0]).toHaveProperty("category_url_item", "CandyBars");
  });
});
