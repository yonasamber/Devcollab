import { Task } from "@/types";
import TaskCard from "./TaskCard";

export default function TaskColumn({
  title,
  tasks,
}: {
  title: string;
  tasks: Task[];
}) {
  return (
    <div className="flex-1 bg-gray-100 p-2 rounded">
      <h2 className="font-bold mb-2">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}
