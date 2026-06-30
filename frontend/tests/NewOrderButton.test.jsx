import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import NewOrderButton from "../components/NewOrderButton.jsx";

describe("NewOrderButton", () => {
  it("should render New Order button", () => {
    // Arrange
    const handleClick = vi.fn();

    render(
      <NewOrderButton
        onClick={handleClick}
      />
    );

    // Act
    const button =
      screen.getByRole("button", {
        name: /new order/i,
      });

    // Assert
    expect(button).toBeInTheDocument();
  });

  it("should call onClick when button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleClick = vi.fn();

    render(
      <NewOrderButton
        onClick={handleClick}
      />
    );

    const button =
      screen.getByRole("button", {
        name: /new order/i,
      });

    // Act
    await user.click(button);

    // Assert
    expect(handleClick)
      .toHaveBeenCalledTimes(1);
  });

  it("should allow multiple clicks", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleClick = vi.fn();

    render(
      <NewOrderButton
        onClick={handleClick}
      />
    );

    const button =
      screen.getByRole("button", {
        name: /new order/i,
      });

    // Act
    await user.click(button);
    await user.click(button);
    await user.click(button);

    // Assert
    expect(handleClick)
      .toHaveBeenCalledTimes(3);
  });
});