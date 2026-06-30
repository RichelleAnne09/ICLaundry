import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import AddonQuantityControl from "../components/AddonQuantityControl.jsx";

describe("AddonQuantityControl", () => {
  it("should display quantity", () => {
    // Arrange
    render(
      <AddonQuantityControl
        quantity={2}
        maxStock={10}
        onIncrease={vi.fn()}
        onDecrease={vi.fn()}
      />
    );

    // Act
    const quantity =
      screen.getByText("2");

    // Assert
    expect(quantity)
      .toBeInTheDocument();
  });

  it("should call onIncrease when plus button is clicked", async () => {
    // Arrange
    const user =
      userEvent.setup();

    const handleIncrease =
      vi.fn();

    render(
      <AddonQuantityControl
        quantity={2}
        maxStock={10}
        onIncrease={
          handleIncrease
        }
        onDecrease={vi.fn()}
      />
    );

    const plusButton =
      screen.getByRole(
        "button",
        {
          name: "+",
        }
      );

    // Act
    await user.click(
      plusButton
    );

    // Assert
    expect(
      handleIncrease
    ).toHaveBeenCalledTimes(
      1
    );
  });

  it("should call onDecrease when minus button is clicked", async () => {
    // Arrange
    const user =
      userEvent.setup();

    const handleDecrease =
      vi.fn();

    render(
      <AddonQuantityControl
        quantity={2}
        maxStock={10}
        onIncrease={vi.fn()}
        onDecrease={
          handleDecrease
        }
      />
    );

    const minusButton =
      screen.getByRole(
        "button",
        {
          name: "-",
        }
      );

    // Act
    await user.click(
      minusButton
    );

    // Assert
    expect(
      handleDecrease
    ).toHaveBeenCalledTimes(
      1
    );
  });

  it("should disable minus button when quantity is zero", () => {
    // Arrange
    render(
      <AddonQuantityControl
        quantity={0}
        maxStock={10}
        onIncrease={vi.fn()}
        onDecrease={vi.fn()}
      />
    );

    const minusButton =
      screen.getByRole(
        "button",
        {
          name: "-",
        }
      );

    // Assert
    expect(
      minusButton
    ).toBeDisabled();
  });

  it("should disable plus button when quantity reaches max stock", () => {
    // Arrange
    render(
      <AddonQuantityControl
        quantity={10}
        maxStock={10}
        onIncrease={vi.fn()}
        onDecrease={vi.fn()}
      />
    );

    const plusButton =
      screen.getByRole(
        "button",
        {
          name: "+",
        }
      );

    // Assert
    expect(
      plusButton
    ).toBeDisabled();
  });

  it("should render both control buttons", () => {
    // Arrange
    render(
      <AddonQuantityControl
        quantity={1}
        maxStock={10}
        onIncrease={vi.fn()}
        onDecrease={vi.fn()}
      />
    );

    // Act
    const buttons =
      screen.getAllByRole(
        "button"
      );

    // Assert
    expect(buttons)
      .toHaveLength(2);
  });
});