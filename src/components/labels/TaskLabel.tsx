import LabelChip from "./LabelChip";

export default function TaskLabels({ labels }: any) {
  if (!labels?.length) return null;

  return (
    <div className="flex gap-1 flex-wrap mt-2">
      {labels.map((label: any) => (
        <LabelChip key={label.name} label={label} />
      ))}
    </div>
  );
}
