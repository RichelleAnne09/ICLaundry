import { useState } from "react";

const SearchOrders = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <>
      <label htmlFor="searchOrders">
        Search Orders
      </label>

      <input
        id="searchOrders"
        type="text"
        placeholder="Search orders..."
        value={searchValue}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchOrders;