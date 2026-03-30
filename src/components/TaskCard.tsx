import { useDeleteTask } from "@/hooks/useTasks";
import { Task } from "@/types";
import { Draggable } from "@hello-pangea/dnd";
import TaskComments from "./TaskComments";
import PriorityBadge from "./PriorityBadge";

export default function TaskCard({
  task,
  index,
}: {
  task: Task;
  index: number;
}) {
  const del = useDeleteTask();

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          className="bg-white p-3 rounded shadow mb-2"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="flex justify-between">
            <div className="flex justify-between items-center">
              <p className="font-medium">{task.title}</p>
              <PriorityBadge priority={task.priority} />
            </div>
            {task.dueDate && (
              <p className="text-xs text-gray-500 mt-1">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </p>
            )}

            <button
              onClick={() => del.mutate(task._id)}
              className="text-red-500 text-xs"
            >
              Delete
            </button>
          </div>
          <TaskComments taskId={task._id} />
        </div>
      )}
    </Draggable>
  );
}
