const OrdersTable = ({
  orders,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Customer</th>
            <th>Weight</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.orderNumber}</td>
                <td>{order.customer}</td>
                <td>{order.weight}</td>
                <td>{order.status}</td>
                <td>{order.payment}</td>
                <td>{order.amount}</td>
                <td>{order.date}</td>

                <td>
                  <button
                    onClick={() => onEdit(order)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(order)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default OrdersTable;