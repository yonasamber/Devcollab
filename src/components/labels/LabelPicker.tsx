"use client";

import { useAttachLabel } from "@/hooks/useAttachLabel";
import { useLabels } from "@/hooks/useLabels";

export default function LabelPicker({ taskId }: any) {
  const { data: labels } = useLabels();
  const attach = useAttachLabel();

  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {labels?.map((label: any) => (
        <button
          key={label._id}
          onClick={() =>
            attach.mutate({
              taskId,
              label,
            })
          }
          className="text-xs px-2 py-1 rounded text-white"
          style={{ backgroundColor: label.color }}
        >
          {label.name}
        </button>
      ))}
    </div>
  );
}
