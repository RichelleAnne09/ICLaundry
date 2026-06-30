import { useState } from "react";

const NewOrderModal = ({
  onCreateOrder,
  onClose,
}) => {
  const [phoneNumber, setPhoneNumber] =
    useState("");

  const [clientName, setClientName] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const handleSubmit = () => {
    onCreateOrder({
      phoneNumber,
      clientName,
      weight,
    });

    setPhoneNumber("");
    setClientName("");
    setWeight("");
  };

  return (
    <>
      <h2>New Order</h2>

      <label htmlFor="phoneNumber">
        Phone Number
      </label>

      <input
        id="phoneNumber"
        type="text"
        value={phoneNumber}
        onChange={(e) =>
          setPhoneNumber(e.target.value)
        }
      />

      <label htmlFor="clientName">
        Client Name
      </label>

      <input
        id="clientName"
        type="text"
        value={clientName}
        onChange={(e) =>
          setClientName(e.target.value)
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
          setWeight(e.target.value)
        }
      />

      <button onClick={handleSubmit}>
        Create Order
      </button>

      <button onClick={onClose}>
        Cancel
      </button>
    </>
  );
};

export default NewOrderModal;