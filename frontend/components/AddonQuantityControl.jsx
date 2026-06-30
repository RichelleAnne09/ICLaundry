const AddonQuantityControl = ({
  quantity,
  maxStock,
  onIncrease,
  onDecrease,
}) => {
  return (
    <>
      <button
        onClick={onDecrease}
        disabled={quantity === 0}
      >
        -
      </button>

      <span>{quantity}</span>

      <button
        onClick={onIncrease}
        disabled={
          quantity >= maxStock
        }
      >
        +
      </button>
    </>
  );
};

export default AddonQuantityControl;