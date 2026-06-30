import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import StatusFilter from "../components/StatusFilter.jsx";

describe("StatusFilter", () => {
  it("should render all status tabs", () => {
    // Arrange
    const handleStatusChange = vi.fn();

    render(
      <StatusFilter selectedStatus="All" onStatusChange={handleStatusChange} />,
    );

    // Act
    const allButton = screen.getByRole("button", {
      name: /all/i,
    });

    const pendingButton = screen.getByRole("button", {
      name: /pending/i,
    });

    const washingButton = screen.getByRole("button", {
      name: /washing/i,
    });

    const dryingButton = screen.getByRole("button", {
      name: /drying/i,
    });

    const foldingButton = screen.getByRole("button", {
      name: /folding/i,
    });

    const readyButton = screen.getByRole("button", {
      name: /ready for pick-up/i,
    });

    const releasedButton = screen.getByRole("button", {
      name: /released/i,
    });

    // Assert
    expect(allButton).toBeInTheDocument();
    expect(pendingButton).toBeInTheDocument();
    expect(washingButton).toBeInTheDocument();
    expect(dryingButton).toBeInTheDocument();
    expect(foldingButton).toBeInTheDocument();
    expect(readyButton).toBeInTheDocument();
    expect(releasedButton).toBeInTheDocument();
  });

  it("should call onStatusChange when Pending is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleStatusChange = vi.fn();

    render(
      <StatusFilter selectedStatus="All" onStatusChange={handleStatusChange} />,
    );

    const pendingButton = screen.getByRole("button", {
      name: /pending/i,
    });

    // Act
    await user.click(pendingButton);

    // Assert
    expect(handleStatusChange).toHaveBeenCalledWith("Pending");
  });

  it("should call onStatusChange when Washing is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleStatusChange = vi.fn();

    render(
      <StatusFilter selectedStatus="All" onStatusChange={handleStatusChange} />,
    );

    const washingButton = screen.getByRole("button", {
      name: /washing/i,
    });

    // Act
    await user.click(washingButton);

    // Assert
    expect(handleStatusChange).toHaveBeenCalledWith("Washing");
  });
});
