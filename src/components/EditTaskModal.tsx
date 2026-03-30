"use client";

import { useUpdateTask } from "@/hooks/useTasks";
import { useState } from "react";

export default function EditTaskModal({ task, close }: any) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate?.split("T")[0] || 0);

  const update = useUpdateTask();

  const handleSubmit = () => {
    update.mutate({
      id: task._id,
      data: { title, description, priority, dueDate },
    });
    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <textarea
          className="border p-2 rounded w-full mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="border p-2 rounded w-full mb-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          className="border p-2 rounded w-full mb-2"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={close} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
