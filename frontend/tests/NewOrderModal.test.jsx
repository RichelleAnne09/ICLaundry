import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import NewOrderModal from "../components/NewOrderModal";

describe("NewOrderModal", () => {
  it("should render all input fields", () => {
    // Arrange
    render(
      <NewOrderModal
        onCreateOrder={vi.fn()}
        onClose={vi.fn()}
      />
    );

    // Act
    const phoneInput =
      screen.getByRole("textbox", {
        name: /phone number/i,
      });

    const clientInput =
      screen.getByRole("textbox", {
        name: /client name/i,
      });

    const weightInput =
      screen.getByLabelText(/weight/i);

    // Assert
    expect(phoneInput)
      .toBeInTheDocument();

    expect(clientInput)
      .toBeInTheDocument();

    expect(weightInput)
      .toBeInTheDocument();
  });

  it("should allow user to type phone number", async () => {
    // Arrange
    const user = userEvent.setup();

    render(
      <NewOrderModal
        onCreateOrder={vi.fn()}
        onClose={vi.fn()}
      />
    );

    const phoneInput =
      screen.getByRole("textbox", {
        name: /phone number/i,
      });

    // Act
    await user.type(
      phoneInput,
      "09171234567"
    );

    // Assert
    expect(phoneInput)
      .toHaveValue("09171234567");
  });

  it("should allow user to type client name", async () => {
    // Arrange
    const user = userEvent.setup();

    render(
      <NewOrderModal
        onCreateOrder={vi.fn()}
        onClose={vi.fn()}
      />
    );

    const clientInput =
      screen.getByRole("textbox", {
        name: /client name/i,
      });

    // Act
    await user.type(
      clientInput,
      "Juan Dela Cruz"
    );

    // Assert
    expect(clientInput)
      .toHaveValue(
        "Juan Dela Cruz"
      );
  });

  it("should allow user to type weight", async () => {
    // Arrange
    const user = userEvent.setup();

    render(
      <NewOrderModal
        onCreateOrder={vi.fn()}
        onClose={vi.fn()}
      />
    );

    const weightInput =
      screen.getByLabelText(
        /weight/i
      );

    // Act
    await user.type(
      weightInput,
      "5"
    );

    // Assert
    expect(weightInput)
      .toHaveValue(5);
  });

  it("should call onCreateOrder when Create Order button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleCreateOrder =
      vi.fn();

    render(
      <NewOrderModal
        onCreateOrder={
          handleCreateOrder
        }
        onClose={vi.fn()}
      />
    );

    const phoneInput =
      screen.getByRole("textbox", {
        name: /phone number/i,
      });

    const clientInput =
      screen.getByRole("textbox", {
        name: /client name/i,
      });

    const weightInput =
      screen.getByLabelText(
        /weight/i
      );

    const createButton =
      screen.getByRole(
        "button",
        {
          name: /create order/i,
        }
      );

    // Act
    await user.type(
      phoneInput,
      "09171234567"
    );

    await user.type(
      clientInput,
      "Juan"
    );

    await user.type(
      weightInput,
      "5"
    );

    await user.click(
      createButton
    );

    // Assert
    expect(
      handleCreateOrder
    ).toHaveBeenCalledWith({
      phoneNumber:
        "09171234567",
      clientName: "Juan",
      weight: "5",
    });
  });

  it("should call onClose when Cancel button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleClose =
      vi.fn();

    render(
      <NewOrderModal
        onCreateOrder={vi.fn()}
        onClose={handleClose}
      />
    );

    const cancelButton =
      screen.getByRole(
        "button",
        {
          name: /cancel/i,
        }
      );

    // Act
    await user.click(
      cancelButton
    );

    // Assert
    expect(handleClose)
      .toHaveBeenCalledTimes(
        1
      );
  });
});