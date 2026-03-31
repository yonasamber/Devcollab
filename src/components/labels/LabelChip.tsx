type Props = {
  label: {
    name: string;
    color: string;
  };
};

export default function LabelChip({ label }: Props) {
  return (
    <span
      className="text-xs px-2 py-1 rounded text-white"
      style={{ backgroundColor: label.color }}
    >
      {label.name}
    </span>
  );
}
