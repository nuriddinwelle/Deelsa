type Props = {
  status: "new" | "contacted" | "closed";
};

export default function StatusBadge({ status }: Props) {
  const styles = {
    new: "bg-blue-100 text-blue-700",
    contacted: "bg-yellow-100 text-yellow-700",
    closed: "bg-green-100 text-green-700",
  };

  const labels = {
    new: "New",
    contacted: "Contacted",
    closed: "Closed",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
