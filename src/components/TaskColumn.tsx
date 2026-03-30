import { Task } from "@/types";
import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";

export default function TaskColumn({
  title,
  tasks,
}: {
  title: string;
  tasks: Task[];
}) {
  if (!tasks) {
    return (
      <div className="w-72 bg-gray-100 p-3 rounded">
        <div className="animate-pulse space-y-2">
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }
  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <div
          className="flex-1 bg-gray-100 p-3 rounded"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{title.toUpperCase()}</h2>
          {tasks.map((task, index) => (
            <TaskCard key={task._id} task={task} index={index} />
          ))}

          {tasks.length === 0 && (
            <p className="text-gray-400 text-sm">No tasks yet</p>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
