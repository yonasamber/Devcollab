import { Task } from "@/types";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-white p-3 rounded shadow mb-2">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-xs text-gray-500">{task.status.toUpperCase()}</p>
    </div>
  );
}
