import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Asteroid from "../Asteroid";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("check for Input", () => {
  render(<Asteroid />);
  const InputEl = screen.getByTestId("AsteroidInput");
  expect(InputEl).toBeDefined();
});

beforeEach(() => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          status: 200,
          data: {
            nbPages: 2,
            near_earth_objects: [
              {
                name: "demo",
                nasa_jpl_url: "http://test.com",
                is_potentially_hazardous_asteroid: true,
              },
            ],
          },
        }),
    });
  }) as jest.Mock;
});

test("snapshot", () => {
  render(<Asteroid />);
  const snap = screen;
  expect(snap).toMatchSnapshot();
});

test("to be truthy", () => {
  render(<Asteroid />);
  const truthy = screen;
  expect(truthy).toBeTruthy();
});

test("test case for on submit", () => {
  render(<Asteroid />);
  const submit = screen.getByText("Submit");
  fireEvent.click(submit);
  expect(submit).toBeDefined();
});

test("entering value in input works", () => {
  render(<Asteroid />);
  const input: any = screen.getByTestId("AsteroidInput");
  fireEvent.change(input, {
    target: {
      value: "2000433",
    },
  });
  fireEvent.click(screen.getByTestId("submit"));
  // const randomBtn: any = screen.getByTestId("random");
  // fireEvent.click(randomBtn);

  expect(input.value).toBe("2000433");
});

test("check random function", () => {
  render(<Asteroid />);
  const randomBtn: any = screen.getByTestId("random");

  fireEvent.click(randomBtn);
  // const randomBtn: any = screen.getByTestId("random");
  // fireEvent.click(randomBtn);

  expect(randomBtn).toBeDefined();
});
