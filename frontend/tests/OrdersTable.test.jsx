import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import OrdersTable from "../components/OrdersTable.jsx";

describe("OrdersTable", () => {
  const mockOrders = [
    {
      id: 1,
      orderNumber: "ORD001",
      customer: "Juan Dela Cruz",
      weight: "5kg",
      status: "Pending",
      payment: "Paid",
      amount: "250",
      date: "2025-06-23",
    },
    {
      id: 2,
      orderNumber: "ORD002",
      customer: "Maria Santos",
      weight: "3kg",
      status: "Washing",
      payment: "Unpaid",
      amount: "150",
      date: "2025-06-24",
    },
  ];

  it("should render all table headers", () => {
    // Arrange
    render(
      <OrdersTable
        orders={mockOrders}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    // Act
    const orderNumberHeader =
      screen.getByText("Order Number");

    const customerHeader =
      screen.getByText("Customer");

    const weightHeader =
      screen.getByText("Weight");

    const statusHeader =
      screen.getByText("Status");

    const paymentHeader =
      screen.getByText("Payment");

    const amountHeader =
      screen.getByText("Amount");

    const dateHeader =
      screen.getByText("Date");

    const actionsHeader =
      screen.getByText("Actions");

    // Assert
    expect(orderNumberHeader)
      .toBeInTheDocument();

    expect(customerHeader)
      .toBeInTheDocument();

    expect(weightHeader)
      .toBeInTheDocument();

    expect(statusHeader)
      .toBeInTheDocument();

    expect(paymentHeader)
      .toBeInTheDocument();

    expect(amountHeader)
      .toBeInTheDocument();

    expect(dateHeader)
      .toBeInTheDocument();

    expect(actionsHeader)
      .toBeInTheDocument();
  });

  it("should render all orders", () => {
    // Arrange
    render(
      <OrdersTable
        orders={mockOrders}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    // Act
    const rows =
      screen.getAllByRole("row");

    // Assert
    expect(rows).toHaveLength(3);
  });

  it("should render order information correctly", () => {
    // Arrange
    render(
      <OrdersTable
        orders={mockOrders}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    // Act
    const orderNumber =
      screen.getByText("ORD001");

    const customer =
      screen.getByText("Juan Dela Cruz");

    const weight =
      screen.getByText("5kg");

    // Assert
    expect(orderNumber)
      .toBeInTheDocument();

    expect(customer)
      .toBeInTheDocument();

    expect(weight)
      .toBeInTheDocument();
  });

  it("should display No orders found when orders array is empty", () => {
    // Arrange
    render(
      <OrdersTable
        orders={[]}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    // Act
    const message =
      screen.getByText(
        "No orders found"
      );

    // Assert
    expect(message)
      .toBeInTheDocument();
  });

  it("should call onEdit when Edit button is clicked", async () => {
    // Arrange
    const user =
      userEvent.setup();

    const handleEdit =
      vi.fn();

    render(
      <OrdersTable
        orders={mockOrders}
        onEdit={handleEdit}
        onDelete={vi.fn()}
      />
    );

    const editButtons =
      screen.getAllByRole(
        "button",
        { name: /edit/i }
      );

    // Act
    await user.click(
      editButtons[0]
    );

    // Assert
    expect(handleEdit)
      .toHaveBeenCalledWith(
        mockOrders[0]
      );
  });

  it("should call onDelete when Delete button is clicked", async () => {
    // Arrange
    const user =
      userEvent.setup();

    const handleDelete =
      vi.fn();

    render(
      <OrdersTable
        orders={mockOrders}
        onEdit={vi.fn()}
        onDelete={handleDelete}
      />
    );

    const deleteButtons =
      screen.getAllByRole(
        "button",
        { name: /delete/i }
      );

    // Act
    await user.click(
      deleteButtons[0]
    );

    // Assert
    expect(handleDelete)
      .toHaveBeenCalledWith(
        mockOrders[0]
      );
  });

  it("should render one Edit button per order", () => {
    // Arrange
    render(
      <OrdersTable
        orders={mockOrders}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    // Act
    const editButtons =
      screen.getAllByRole(
        "button",
        { name: /edit/i }
      );

    // Assert
    expect(editButtons)
      .toHaveLength(2);
  });

  it("should render one Delete button per order", () => {
    // Arrange
    render(
      <OrdersTable
        orders={mockOrders}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    // Act
    const deleteButtons =
      screen.getAllByRole(
        "button",
        { name: /delete/i }
      );

    // Assert
    expect(deleteButtons)
      .toHaveLength(2);
  });
});