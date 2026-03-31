import { Task } from "@/types";
import PriorityBadge from "./PriorityBadge";

export default function TaskHeader({ task }: { task: Task }) {
  return (
    <div>
      <p>{task.title}</p>
      <PriorityBadge priority={task.priority} />
    </div>
  );
}
