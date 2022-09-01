import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("footer tests", () => {
  test("Footer test should contain 2022", () => {
    render(<Footer />);
    const linkElement = screen.getByText(
      /© 2022 MyStore. All Rights Reserved./i
    );
    expect(linkElement).toBeInTheDocument();
  });
});
