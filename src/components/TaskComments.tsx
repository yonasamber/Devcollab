import { useComments, useCreateComment } from "@/hooks/useComments";
import { useState } from "react";

export default function TaskComments({ taskId }: { taskId: string }) {
  const { data: comments } = useComments(taskId);
  const create = useCreateComment();

  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text) return;

    create.mutate({
      taskId,
      text,
    });

    setText("");
  };

  return (
    <div className="mt-2">
      <div className="space-y-1">
        {comments?.map((c: any) => (
          <p key={c._id} className="text-sm bg-gray-100 p-1 rounded">
            {c.text}
          </p>
        ))}
      </div>
      <div className="flex gap-1 mt-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-1 text-sm w-full"
          placeholder="Comment..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
