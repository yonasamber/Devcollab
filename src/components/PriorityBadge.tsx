export default function PriorityBadge({ priority }: any) {
  const colors = {
    low: "bg-green-200 text-green-700",
    medium: "bg-yellow-200 text-yellow-700",
    high: "bg-red-200 text-red-700",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded ${colors[priority]}`}>
      {priority}
    </span>
  );
}
