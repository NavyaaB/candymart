import { render, screen } from "@testing-library/react";
import AboutAndContact from "../components/AboutAndContact";

describe("aboutAndContact tests", () => {
  test("AboutAndContact test should contain About Us", () => {
    render(<AboutAndContact />);
    const linkElement = screen.getByText(/About Us/i);
    expect(linkElement).toBeInTheDocument();
  });
});
