import { findAllByRole, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { getName } from "@/pages";

import Home from "@/pages";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const home = screen.getByRole("heading", { name: "Home" });
    expect(home).toHaveTextContent("Home");
  });

  it("typing", () => {
    render(<Home />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Hello");
    expect(input).toHaveValue("Hello");
  });

  it("getTest", async () => {
    const result = await getName();
    expect(result).toBe("sangbin");
  });

  // it("renders test list", async () => {
  //   render(<Home />);
  //   const list = await screen.findAllByRole("listitem");
  //   expect(list).toHaveLength(2);
  //   expect(list[0]).toHaveTextContent("test1");
  //   expect(list[1]).toHaveTextContent("test2");
  // });
});
