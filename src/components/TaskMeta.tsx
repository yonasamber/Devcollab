import PriorityBadge from "./PriorityBadge";
import TaskAssignee from "./TaskAssignee";
import TaskLabels from "./TaskLabels";

export default function TaskMeta({ task }: any) {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-2">
        {task.dueDate && (
          <span className="text-xs text-gray-500">
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <TaskLabels labels={task.labels} />
        <TaskAssignee assignee={task.assignee} />
      </div>
    </div>
  );
}
