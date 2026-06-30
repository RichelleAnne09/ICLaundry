import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import EditOrderModal from "../components/EditOrderModal.jsx";

describe("EditOrderModal", () => {
  const mockOrder = {
    id: 1,
    phoneNumber:
      "09171234567",
    clientName:
      "Juan Dela Cruz",
    weight: "5",
  };

  it("should display existing order information", () => {
    // Arrange
    render(
      <EditOrderModal
        order={mockOrder}
        onUpdateOrder={vi.fn()}
        onClose={vi.fn()}
      />
    );

    // Act
    const phoneInput =
      screen.getByDisplayValue(
        "09171234567"
      );

    const clientInput =
      screen.getByDisplayValue(
        "Juan Dela Cruz"
      );

    const weightInput =
      screen.getByDisplayValue(
        "5"
      );

    // Assert
    expect(phoneInput)
      .toBeInTheDocument();

    expect(clientInput)
      .toBeInTheDocument();

    expect(weightInput)
      .toBeInTheDocument();
  });

  it("should update the client name and call onUpdateOrder with the updated order", async () => {
  // Arrange
  const user = userEvent.setup();
  const handleUpdate = vi.fn();

  render(
    <EditOrderModal
      order={mockOrder}
      onUpdateOrder={handleUpdate}
      onClose={vi.fn()}
    />
  );

  const clientInput = screen.getByDisplayValue(
    "Juan Dela Cruz"
  );

  const updateButton = screen.getByRole(
    "button",
    {
      name: /update order/i,
    }
  );

  // Act
  await user.clear(clientInput);
  await user.type(
    clientInput,
    "Maria Santos"
  );
  await user.click(updateButton);

  // Assert
  expect(handleUpdate).toHaveBeenCalledWith({
    ...mockOrder,
    clientName: "Maria Santos",
  });
});

  it("should call onClose when Cancel button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();

    const handleClose =
      vi.fn();

    render(
      <EditOrderModal
        order={mockOrder}
        onUpdateOrder={vi.fn()}
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