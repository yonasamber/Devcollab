import { useDeleteTask } from "@/hooks/useTasks";
import { Task } from "@/types";
import { Draggable } from "@hello-pangea/dnd";
import TaskComments from "./TaskComments";
import PriorityBadge from "./PriorityBadge";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

export default function TaskCard({
  task,
  index,
}: {
  task: Task;
  index: number;
}) {
  const del = useDeleteTask();

  const [editOpen, setEditOpen] = useState(false);

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

            {/* Hover buttons */}

            <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 ml-2">
              <button
                className="text-blue-500 text-xs"
                onClick={() => setEditOpen(true)}
              >
                Edit
              </button>

              <button
                onClick={() => del.mutate(task._id)}
                className="text-red-500 text-xs"
              >
                Delete
              </button>
            </div>
          </div>
          <TaskComments taskId={task._id} />

          {editOpen && (
            <EditTaskModal task={task} close={() => setEditOpen(false)} />
          )}
        </div>
      )}
    </Draggable>
  );
}
