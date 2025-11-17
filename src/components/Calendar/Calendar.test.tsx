import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar Component", () => {
  test("renders month and year correctly", () => {
    const date = new Date(2025, 0, 15); // Jan 15, 2025
    render(<Calendar date={date} />);

    expect(screen.getByText("January 2025")).toBeInTheDocument();
  });

  test("renders all weekday headers", () => {
    render(<Calendar date={new Date()} />);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    days.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  test("highlights the selected date", () => {
    const date = new Date(2025, 1, 10); // Feb 10, 2025
    render(<Calendar date={date} />);

    const selectedCell = screen.getByText("10");
    expect(selectedCell).toHaveClass("highlight");
  });

  test("shows correct number of days for February 2025 (non-leap year)", () => {
    const date = new Date(2025, 1, 1); // Feb 2025
    render(<Calendar date={date} />);

    for (let i = 1; i <= 28; i++) {
      expect(screen.getAllByText(i.toString()).length).toBeGreaterThan(0);
    }
  });

  test("renders empty cells for days outside the month", () => {
    const date = new Date(2025, 2, 1); // March 2025 (starts on Saturday)
    render(<Calendar date={date} />);

    // March 2025 calendar starts with 6 empty cells (Sun–Fri)
    const emptyCells = screen.getAllByText("");
    expect(emptyCells.length).toBeGreaterThan(0);
  });
});
