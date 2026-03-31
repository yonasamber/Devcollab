export default function TaskLabels({ labels }: any) {
  if (!labels?.length) return null;

  return (
    <div className="flex gap-1">
      {labels.map((label: any) => (
        <span key={label} className="text-xs px-2 py-0.5 bg-gray-200 rounded">
          {label}
        </span>
      ))}
    </div>
  );
}
