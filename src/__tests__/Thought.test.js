import "regenerator-runtime/runtime";
import React from "react";
import { Thought } from "../Thought.js";
import { AddThoughtForm } from "../AddThoughtForm.js";
import { App } from "../App.js";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

test('"Oreos are delicious" should not appear', () => {
  render(<App />);

  const emptyThought = screen.queryByText("Oreos are delicious");
  expect(emptyThought).toBeNull();
});

test("Should show new thought to be present", async () => {
  render(<App />);

  const addThoughtInput = screen.getByRole("input");
  const addButton = screen.getByRole("submit");
  userEvent.type(addThoughtInput, "Oreos are delicious");
  userEvent.click(addButton);

  const thought = await screen.findByText("Oreos are delicious");
  expect(thought).toBeInTheDocument();
});
