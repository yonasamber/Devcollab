import { Task } from "@/types";
import { Draggable } from "@hello-pangea/dnd";

export default function TaskCard({
  task,
  index,
}: {
  task: Task;
  index: number;
}) {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          className="bg-white p-3 rounded shadow mb-2"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-xs text-gray-500">{task.priority}</p>
          {task.dueDate && (
            <p className="text-xs text-red-400">
              {new Date(task.dueDate).toDateString()}
            </p>
          )}
        </div>
      )}
    </Draggable>
  );
}
