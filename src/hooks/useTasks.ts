import api from "@/lib/axios";
import { Task } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useTasks = (projectId?: string) => {
  return useQuery<Task[], any>({
    queryKey: ["tasks", projectId],
    queryFn: async () => {
      const { data } = await api.get<{ tasks: Task[] }>("/tasks");
      if (projectId) return data.tasks.filter((t) => t.projectId === projectId);
      return data.tasks;
    },
  });
};
