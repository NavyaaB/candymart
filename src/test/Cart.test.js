import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";

describe("cart tests", () => {
  test("cart test should contain order id", () => {
    render(<Cart />);
    const orderIdElement = screen.getByText(/Order Id/i);
    expect(orderIdElement).toBeInTheDocument();
  });
});

// describe("test cart table", () => {
//   const wrapperCo = render(<Cart />);
//   const table = wrapper.find("table");
//   const row = table.find("tr");
//   const node = table.find(Node);

//   it("table grid", () => {
//     expect(table).toHaveLength(1);
//     expect(row).toHaveLength(1);
//     expect(node).toHaveLength(1);
//   });
// });
