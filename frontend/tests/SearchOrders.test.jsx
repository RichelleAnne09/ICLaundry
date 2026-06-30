import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import SearchOrders from "../components/SearchOrders";

describe("SearchOrders", () => {
  it("should render search textbox", () => {
    // Arrange
    const handleSearchChange = vi.fn();

    render(
      <SearchOrders
        onSearchChange={handleSearchChange}
      />
    );

    // Act
    const input = screen.getByRole("textbox", {
      name: /search orders/i,
    });

    // Assert
    expect(input).toBeInTheDocument();
  });

  it("should render empty textbox initially", () => {
    // Arrange
    const handleSearchChange = vi.fn();

    render(
      <SearchOrders
        onSearchChange={handleSearchChange}
      />
    );

    // Act
    const input = screen.getByRole("textbox", {
      name: /search orders/i,
    });

    // Assert
    expect(input).toHaveValue("");
  });

  it("should update textbox value when user types", async () => {
    // Arrange
    const user = userEvent.setup();

    render(
      <SearchOrders
        onSearchChange={vi.fn()}
      />
    );

    const input = screen.getByRole("textbox", {
      name: /search orders/i,
    });

    // Act
    await user.type(input, "ORD001");

    // Assert
    expect(input).toHaveValue("ORD001");
  });

  it("should call onSearchChange when user types order number", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleSearchChange = vi.fn();

    render(
      <SearchOrders
        onSearchChange={handleSearchChange}
      />
    );

    const input = screen.getByRole("textbox", {
      name: /search orders/i,
    });

    // Act
    await user.type(input, "ORD001");

    // Assert
    expect(handleSearchChange)
      .toHaveBeenLastCalledWith("ORD001");
  });

  it("should call onSearchChange when user types customer name", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleSearchChange = vi.fn();

    render(
      <SearchOrders
        onSearchChange={handleSearchChange}
      />
    );

    const input = screen.getByRole("textbox", {
      name: /search orders/i,
    });

    // Act
    await user.type(input, "Juan");

    // Assert
    expect(handleSearchChange)
      .toHaveBeenLastCalledWith("Juan");
  });

  it("should clear textbox when user removes all text", async () => {
    // Arrange
    const user = userEvent.setup();

    render(
      <SearchOrders
        onSearchChange={vi.fn()}
      />
    );

    const input = screen.getByRole("textbox", {
      name: /search orders/i,
    });

    // Act
    await user.type(input, "ORD001");
    await user.clear(input);

    // Assert
    expect(input).toHaveValue("");
  });
});