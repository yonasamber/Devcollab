"use client";

import CreateTaskModal from "@/components/CreateTaskModal";
import TaskColumn from "@/components/TaskColumn";
import { useTasks, useUpdateTask } from "@/hooks/useTasks";
import { DragDropContext } from "@hello-pangea/dnd";

interface Params {
  id: string;
}

export default function ProjectPage({ params }: { params: Params }) {
  const { data: tasks } = useTasks(params.id);
  const statuses: ("todo" | "doing" | "done")[] = ["todo", "doing", "done"];
  const update = useUpdateTask();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const taskId = result.draggableId;
    const newStatus = result.destination.droppableId;

    update.mutate({
      id: taskId,
      data: { status: newStatus },
    });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Project Board</h1>
        <CreateTaskModal projectId={params.id} />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4">
          {statuses.map((status) => (
            <TaskColumn
              key={status}
              title={status.toUpperCase()}
              tasks={tasks?.filter((t) => t.status === status) || []}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
