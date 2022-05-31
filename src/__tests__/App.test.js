import React from "react";
import { Thought } from "../Thought.js";
import { App } from "../App.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should have header text Passing Thoughts", () => {
  render(<App />);

  const header = screen.getByText("Passing Thoughts");
  expect(header).toHaveTextContent("Passing Thoughts");
});

test("Should have button enabled", () => {
  render(<Thought thought={{ text: "Hello" }} removeThought={() => {}} />);

  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
});
