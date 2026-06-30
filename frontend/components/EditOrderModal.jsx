import { useState } from "react";

const EditOrderModal = ({
  order,
  onUpdateOrder,
  onClose,
}) => {
  const [phoneNumber, setPhoneNumber] =
    useState(order.phoneNumber);

  const [clientName, setClientName] =
    useState(order.clientName);

  const [weight, setWeight] =
    useState(order.weight);

  const handleUpdate = () => {
    onUpdateOrder({
      ...order,
      phoneNumber,
      clientName,
      weight,
    });
  };

  return (
    <>
      <h2>Edit Order</h2>

      <label htmlFor="phoneNumber">
        Phone Number
      </label>

      <input
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) =>
          setPhoneNumber(
            e.target.value
          )
        }
      />

      <label htmlFor="clientName">
        Client Name
      </label>

      <input
        id="clientName"
        value={clientName}
        onChange={(e) =>
          setClientName(
            e.target.value
          )
        }
      />

      <label htmlFor="weight">
        Weight
      </label>

      <input
        id="weight"
        type="number"
        value={weight}
        onChange={(e) =>
          setWeight(
            e.target.value
          )
        }
      />

      <button
        onClick={handleUpdate}
      >
        Update Order
      </button>

      <button onClick={onClose}>
        Cancel
      </button>
    </>
  );
};

export default EditOrderModal;