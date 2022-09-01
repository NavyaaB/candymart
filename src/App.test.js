import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import productsData from "./data/productsData";
import App from "./App";

const numOfProducts = productsData.length;
const nameOfProduct = productsData[0].name;

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

test("Number of items = 15", () => {
  expect(numOfProducts).toBe(15);
});
//3 number
test("Number of items to be greater than or equal to 12", () => {
  expect(numOfProducts).toBeGreaterThanOrEqual(12);
});
//4 string
test("There is a ca in product name", () => {
  expect(nameOfProduct).toMatch(/ca/);
});
//5
test("The product name should contain cake", () => {
  expect(nameOfProduct).toContain("cake");
});
//6 arrays

describe("array tests", () => {
  const data2 = ["cake"];
  test("The list of products contains cake", () => {
    expect(["cake"]).toEqual(expect.arrayContaining(data2));
  });
});
//7 objects-ckeck the key
describe("object tests", () => {
  test("The list of products to have a property name", () => {
    expect(productsData[0]).toHaveProperty("name");
  });
  //8 objects - key and value
  test("The first product to have a property price and value of 20", () => {
    expect(productsData[0]).toHaveProperty("price", 20);
  });
});
