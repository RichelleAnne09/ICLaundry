const statuses = [
  "All",
  "Pending",
  "Washing",
  "Drying",
  "Folding",
  "Ready for Pick-up",
  "Released",
];

const StatusFilter = ({
  selectedStatus,
  onStatusChange,
}) => {
  return (
    <>
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onStatusChange(status)}
          style={{
            fontWeight:
              selectedStatus === status
                ? "bold"
                : "normal",
          }}
        >
          {status}
        </button>
      ))}
    </>
  );
};

export default StatusFilter;