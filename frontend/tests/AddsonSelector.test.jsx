import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import AddonsSelector from "../components/AddsonSelector.jsx";

describe("AddonsSelector", () => {
  const mockAddons = [
    {
      id: 1,
      name: "Fabcon",
      stock: 10,
    },
    {
      id: 2,
      name: "Bleach",
      stock: 0,
    },
  ];

  it("should render all available add-ons", () => {
    // Arrange
    render(
      <AddonsSelector
        addons={mockAddons}
        onSelectAddon={vi.fn()}
      />
    );

    // Act
    const fabcon =
      screen.getByText("Fabcon");

    const bleach =
      screen.getByText("Bleach");

    // Assert
    expect(fabcon)
      .toBeInTheDocument();

    expect(bleach)
      .toBeInTheDocument();
  });

  it("should display stock quantity", () => {
    // Arrange
    render(
      <AddonsSelector
        addons={mockAddons}
        onSelectAddon={vi.fn()}
      />
    );

    // Act
    const stock10 =
      screen.getByText(
        "Stock: 10"
      );

    const stock0 =
      screen.getByText(
        "Stock: 0"
      );

    // Assert
    expect(stock10)
      .toBeInTheDocument();

    expect(stock0)
      .toBeInTheDocument();
  });

  it("should call onSelectAddon when Add button is clicked", async () => {
    // Arrange
    const user =
      userEvent.setup();

    const handleSelect =
      vi.fn();

    render(
      <AddonsSelector
        addons={mockAddons}
        onSelectAddon={
          handleSelect
        }
      />
    );

    const addButtons =
      screen.getAllByRole(
        "button",
        { name: /add/i }
      );

    // Act
    await user.click(
      addButtons[0]
    );

    // Assert
    expect(handleSelect)
      .toHaveBeenCalledWith(
        mockAddons[0]
      );
  });

  it("should disable Add button when stock is zero", () => {
    // Arrange
    render(
      <AddonsSelector
        addons={mockAddons}
        onSelectAddon={vi.fn()}
      />
    );

    // Act
    const addButtons =
      screen.getAllByRole(
        "button",
        { name: /add/i }
      );

    // Assert
    expect(
      addButtons[1]
    ).toBeDisabled();
  });

  it("should display no add-ons message when list is empty", () => {
    // Arrange
    render(
      <AddonsSelector
        addons={[]}
        onSelectAddon={vi.fn()}
      />
    );

    // Act
    const message =
      screen.getByText(
        "No add-ons available"
      );

    // Assert
    expect(message)
      .toBeInTheDocument();
  });

  it("should render Add-ons heading", () => {
    // Arrange
    render(
      <AddonsSelector
        addons={mockAddons}
        onSelectAddon={vi.fn()}
      />
    );

    // Act
    const heading =
      screen.getByText("Add-ons");

    // Assert
    expect(heading)
      .toBeInTheDocument();
  });
});