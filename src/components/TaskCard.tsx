import { useDeleteTask } from "@/hooks/useTasks";
import { Task } from "@/types";
import { Draggable } from "@hello-pangea/dnd";
import TaskComments from "./TaskComments";
import PriorityBadge from "./PriorityBadge";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import TaskHeader from "./TaskHeader";
import TaskMeta from "./TaskMeta";
import TaskActions from "./TaskActions";

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
          className="bg-white p-3 rounded shadow mb-2 group"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="flex justify-between">
            <div>
              <TaskHeader task={task} />
              <TaskMeta task={task} />
            </div>

            <TaskActions task={task} onEdit={() => setEditOpen(true)} />
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
