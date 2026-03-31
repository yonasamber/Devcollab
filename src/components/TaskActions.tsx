import { useDeleteTask } from "@/hooks/useTasks";

export default function TaskActions({ task, onEdit }: any) {
  const del = useDeleteTask();

  return (
    <div className="opacity-0 group-hover:opacity-100 transition flex gap-2">
      <button onClick={onEdit} className="text-blue-500 text-xs">
        Edit
      </button>
      <button
        onClick={() => del.mutate(task._id)}
        className="text-red-500 text-xs"
      >
        Delete
      </button>
    </div>
  );
}
