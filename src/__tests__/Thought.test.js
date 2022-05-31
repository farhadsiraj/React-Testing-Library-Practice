import React from "react";
import { Thought } from "../Thought.js";
import { AddThoughtForm } from "../AddThoughtForm.js";
import { App } from "../App.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

test('"Oreos are delicious" should not appear', () => {
  render(<App />);

  const emptyThought = screen.queryByText("Oreos are delicious");
  expect(emptyThought).toBeNull();
});

test("Should show new thought to be present", async () => {
  render(<App />);

  const addThoughtInput = screen.getByRole("textbox");
  const addButton = screen.getByText("Add");
  userEvent.type(addThoughtInput, "Oreos are delicious");
  userEvent.click(addButton);

  const thought = await screen.findByText("Oreos are delicious");
  expect(thought).toBeInTheDocument();
});

test("Clicking the x button should remove a thought", async () => {
  render(<App />);

  const button = screen.getAllByText("×")[0];

  userEvent.click(button);

  const removedThought = screen.queryByText(
    "This is a place for your passing thoughts."
  );
  expect(removedThought).toBeNull();
});

test("Should add a new thought", () => {
  render(<App />);

  const input = screen.getByRole("textbox");
  const submit = screen.getByText("Add");

  userEvent.type(input, "Did I forget my keys?");
  userEvent.click(submit);

  const thought = screen.getByText("Did I forget my keys?");
  expect(thought).toBeInTheDocument();
});

test("Should show Thought to be removed", async () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  const submit = screen.getByText("Add");
  userEvent.type(input, "I have to call my mom.");
  userEvent.click(submit);

  // fix this logic!
  await waitFor(() => {
    const thought = screen.queryByText("I have to call my mom.");
    expect(thought).toBeNull();
  });
});
