"use client";

import { useState } from "react";
import { useCreateTask } from "@/hooks/useTasks";

export default function CreateTaskModal({ projectId }: { projectId: string }) {
  const [title, setTitle] = useState("");
  const createTask = useCreateTask();

  const handleCreate = () => {
    if (!title) return;
    createTask.mutate({ title, projectId });
    setTitle("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="New Task"
        className="border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleCreate}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
}
