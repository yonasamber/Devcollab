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
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
